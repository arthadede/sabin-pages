import { Row, Col, Card, Button, Modal, Empty, Spin, message } from 'antd'
import Head from 'next/head'
import Error from 'next/error'
import axios from 'axios'
import React, {useState, useEffect} from 'react'
import io from 'socket.io-client'

import {withAuthSync} from '../utils/auth'
import ModelSider from '../components/MeModelSider'
import UserLayout from '../components/UserLayout'
import Classifier from '../components/Classifier'
import Extractor from '../components/Extractor'
import PatternExtractor from '../components/PatternExtractor'


function ModelAnno(props) {
  if (props.errorCode) 
    return <Error statusCode={props.errorCode}/>

  const [socket, setSocket] = useState(io.connect(process.env.API_HOST))
  const [source, setSource] = useState(null)
  const [state, setState] = useState([])
  const [loading, setLoading] = useState(false)
  const selectedKeys = props.route.parsedUrl.pathname
  const Title = props.model.annotator === 'classifier' ? "Text Classification" : props.model.annotator === 'extractor' ? "Text Extractor" : "Select a sentence for annotation"
  const Annotation = props.model.annotator === 'classifier' ? Classifier  :  props.model.annotator === 'extractor' ? Extractor : PatternExtractor

  const handleConfirm = () => {
    if (state.length === 0) {
      message.error("This field is empty.")
      return
    }

    const handleOk = () => {
      socket.emit('post', {
        modelId: props.model.id,
        userId: props.token,
        training: state,
        source: source
      })
      setLoading(true)
    }

    Modal.confirm({
      title: 'Are you sure?',
      content: 'You will save to train and not be able to edit this annotation.',
      okText: 'Yes',
      onOk: handleOk,
      cancelText: 'Cancel',
    })
  }

  const handleNext = () => {
    socket.emit('get', props.model.id)
    socket.on('response', res => setSource(...res))
    setState([])
  }

  useEffect(() => {
    socket.on('post', res => {
      socket.emit('get', props.model.id)
      socket.on('response', res => setSource(...res))
      message.success("Traning created successfully.")
      setLoading(false)
      setState([])
    })
    
    socket.on('disconnect', () => {
      socket.open()
    })

    socket.emit('get', props.model.id)
    socket.on('response', res => setSource(...res))
    
    return (() => {
      socket.close()
    })
  }, [])


  const AnnotationComponent = () => {
    if (!source) return <Empty image={Empty.PRESENTED_IMAGE_SIMPLE}/>
    
    return (
      <div>
        <Annotation 
          dataLabel={props.model.label}
          dataSource={source}
          value={state}
          onChange={val => setState(val)}/>
        <div 
          className="d-flex 
          align-items-center 
          justify-content-flex-end">
          <Button
            icon="reload"
            onClick={handleNext}
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
          <Spin spinning={loading}>
            <Card 
            title={Title}>
              <AnnotationComponent/>
            </Card>
          </Spin>
        </Col>
      </Row>
    </UserLayout>
  )
}

ModelAnno.getInitialProps = async ({res, apiUrl, token, query}) => {
  const id = query.id

  process.browser
  ? null 
  : res.redirect(`/me/model/${id}`, 302)

  try {
    const model = await axios({
      method: "GET",
      url: `${apiUrl}/model/${id}`,
      headers: {authorization: token}
    }).then(res => res.data)

    
    return {model}
  } catch (error) {
    return {errorCode: error.response.status}
  }
}

export default withAuthSync(ModelAnno)