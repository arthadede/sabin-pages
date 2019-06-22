import { Row, Col, Card, Button, Modal, Empty, message } from 'antd'
import Head from 'next/head'
import Error from 'next/error'
import axios from 'axios'
import io from 'socket.io-client'
import React, {useState, useEffect} from 'react'
import {Router} from '../routes'
import {withAuthSync} from '../utils/auth'
import ModelSider from '../components/MeModelSider'
import UserLayout from '../components/UserLayout'
import Classifier from '../components/Classifier'
import Extractor from '../components/Extractor'


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
      }).then(response => {
        if (response.status === 200) {
          message.success('Training source success!');
          Router.pushRoute(`/me/model/${props.model.id}/train`)
        }
      }).catch(err => {
        switch (err.response.status) {
          case 400:
            message.error(err.response.data.message && err.response.statusText);
            break;
          case 500:
            message.error(err.response.statusText);
            break;
        }
      })

    }

    Modal.confirm({
      title: 'Are you sure?',
      content: 'You will save to train and not be able to edit this annotation.',
      okText: 'Yes',
      onOk: handleOk,
      cancelText: 'Cancel',
    })
  }

  const handleUnloadDialog = () => {
    socket.emit('exitRoom', props.source.uuid)
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
          <title>My Model Annotation - Sistem Anotasi Named Entity</title>
        </Head>
        <Col md={6}>
          <ModelSider
            current={selectedKeys}
            dataSource={props.model}/>
        </Col>
        <Col md={18}>
          <Card 
          title={Title}>
            <AnnotationComponent/>
          </Card>
        </Col>
      </Row>
    </UserLayout>
  )
}

ModelAnno.getInitialProps = async ({req, apiUrl, token, query}) => {
  const id = query.id

  const rooms = await axios({
    method: "GET",
    url: `${process.env.SOCKET_HOST}/rooms`
  }).then(res => res.data)
  
  const source = await axios({
    method: "POST",
    url: `${apiUrl}/model/${id}/source/process`,
    data: {rooms},
    headers: {authorization: token}
  }).then(res => res.data)

  try {
    const model = await axios({
      method: "GET",
      url: `${apiUrl}/model/${id}`,
      headers: {authorization: token}
    }).then(res => res.data)
    
    return {model, source}
  } catch (error) {
    return {errorCode: error.response.status}
  }
}

export default withAuthSync(ModelAnno)