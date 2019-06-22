import { Row, Col, Card, Button, Modal, Empty, message } from 'antd'
import Head from 'next/head'
import Error from 'next/error'
import axios from 'axios'
import io from 'socket.io-client'
import React, {useState, useEffect} from 'react'
import {Router} from '../routes'
import ModelSider from '../components/ModelSider'
import UserLayout from '../components/UserLayout'
import Classifier from '../components/Classifier'
import Extractor from '../components/Extractor'
import {withAuthSync} from '../utils/auth'

function ModelAnno(props) {
  if (props.errorCode) 
    return <Error statusCode={props.errorCode}/>

  const socket = io.connect(process.env.SOCKET_HOST)
  const [state, setState] = useState([])
    
  const selectedKeys = props.route.parsedUrl.pathname
  const Title = props.model.annotator === 'classifier' ? "Text Classification" : "Text Extractor"
  const Annotation = props.model.annotator === 'classifier' ? Classifier : Extractor


  const handleConfirm = () => {
    const modelId = props.model.id
    const sourceId = props.source.id

    if (state.length === 0) {
      message.error("This field is empty.")
      return
    }

    const handleOk = () => {
      axios({
        method: 'POST',
        url: `${props.apiUrl}/model/${modelId}/train`,
        data: {
          source: sourceId,
          training: state
        },
        headers: {authorization: props.token},
      }).then(async response => {
        if (response.status === 200) {
          await Router.pushRoute(`/model/${props.model.id}/train`)
          message.success('Training source success!');
        }
      })

    }

    Modal.confirm({
      title: 'Are you sure?',
      content: 'You will add to train data and not be able to edit this annotation.',
      okText: 'Yes',
      onOk: handleOk,
      cancelText: 'Cancel',
    })
  }

  const handleUnloadDialog = () => {
    props.socket.emit('exitRoom', props.source.uuid)
    return undefined
  }

  useEffect(() => {

    if (props.source) {
      window.addEventListener("beforeunload", handleUnloadDialog)

      socket.on('disconnect', () => {
        socket.emit('exitRoom', props.source.uuid)
      });

      socket.emit('joinRoom', props.source.uuid)
      
      return (() => {
        // componentWillUnmout
        socket.emit('exitRoom', props.source.uuid)
      })
    }
    return (() => {
      socket.close()
    })
  }, [])

  const AnnotationComponent = () => {
    if (!props.source) return <Empty image={Empty.PRESENTED_IMAGE_SIMPLE}/>

    return (
      <div>
        <Annotation 
          dataLabel={props.model.label} 
          dataSource={props.source}
          value={state}
          onChange={val => setState(val)}/>
        <div 
          className="d-flex 
          align-items-center 
          justify-content-flex-end">
          <Button
            icon="reload"
            onClick={() => window.location.reload()}
            style={{marginLeft: 16}}>
          </Button>
          <Button
            type="primary"
            onClick={handleConfirm}
            style={{marginLeft: 16}}>
            Confirm
          </Button>
        </div>
      </div>
    )
  }

  return (
    <UserLayout {...props}>
      <Row 
        type="flex"
        gutter={32}>
        <Head>
          <title>Model Annotation - Sistem Anotasi Named Entity</title>
        </Head>
        <Col md={6}>
          <ModelSider
            id={props.model.id}
            config={props.config}
            current={selectedKeys}/>
        </Col>
        <Col md={18}>
          <Card 
          title={Title}
          style={{minHeight: '100%'}}>
            <AnnotationComponent/>
          </Card>
        </Col>
      </Row>
    </UserLayout>
  )
}

ModelAnno.getInitialProps = async ({res, apiUrl, token, query}) => {
  const id = query.id
  const modelApi = `${apiUrl}/model/${id}`
  
  const rooms = await axios({
    method: "GET",
    url: `${process.env.SOCKET_HOST}/rooms`
  }).then(res => res.data)

  const source = await axios({
    method: "POST",
    url: `${modelApi}/source/process`,
    data: {rooms},
    headers: {authorization: token}
  }).then(res => res.data)


  try {
    const model = await axios({
      method: "GET",
      url: modelApi,
      headers: {authorization: token}
    }).then(res => res.data)

    const config = await axios({
      method: "GET",
      url: `${modelApi}/config`,
      headers: {authorization: token}
    }).then(res => res.data)

    if (!config.UIAnnotation) throw {response: {status: 404}}
    
    return {model, config, source}
  } catch (error) {
    console.log(error)
    return {errorCode: error.response.status}
  }
}

export default withAuthSync(ModelAnno)