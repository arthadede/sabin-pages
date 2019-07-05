import { Typography, Row, Col, Avatar, Tag, Input, Card, Radio, Button, Modal, Icon, Upload, message } from "antd";
import Highlight from 'react-highlight'
import Head from 'next/head'
import Error from 'next/error'
import axios from "axios";
import React, {useState, useRef} from 'react'
import {Router} from '../routes'
import UserLayout from "../components/UserLayout";
import ModelSider from "../components/MeModelSider";
import {withAuthSync} from '../utils/auth'
import _ from 'lodash'
import randomColor from 'randomcolor'

function ModelView(props) {
  if (props.errorCode) 
    return <Error statusCode={props.errorCode}/>

  const selectedKeys = props.route.parsedUrl.pathname
  const inputRef = useRef(null)
  const [model, setModel] = useState(props.model)
  const [inputValue, setInputValue] = useState(null)
  const [inputVisible, setInputVisible] = useState(false)

  const handleInputVisible = async () => {
    await setInputVisible(true)
    await inputRef.current.focus()
  }

  const handleModelRemove = () => {
    const handleOk = async () => {
      const response = await axios({
        method: 'DELETE',
        url: props.modelApi,
        headers: {authorization: props.token},
      })
      if (response.status === 200) {
        Router.pushRoute('/dashboard')
        message.success("Modal deleted successfully.")
      }
    }

    Modal.confirm({
      title: 'Are you sure?',
      content: `You will not be able to recover this model.`,
      okText: 'Yes',
      onOk: handleOk,
      cancelText: 'Cancel',
    });
  }

  const handleModelUpdate = async data => {
    return new Promise((resolve, reject) => {
      axios({
        method: 'PATCH',
        url: props.modelApi,
        headers: {authorization: props.token},
        data: data
      }).then(res => res.status === 200 && resolve(res.data))
        .catch(err => console.log(err))
    })
  }

  const handleEditName = text => {
    handleModelUpdate({name: text})
    .then(data => setModel(state => ({...state, ...data[0], config: {...state.config, ...data[1]} })))
  }

  const handleEditDescription = text => {
    handleModelUpdate({desc: text})
    .then(data => setModel(state => ({...state, ...data[0], config: {...state.config, ...data[1]} })))
  }
  
  const handleAddLabel = () => {
    handleModelUpdate({label: [
      ...model.label, 
      {
        name: inputValue,
        color: randomColor({
          luminosity: 'dark',
          hue: 'blue'
        }),
      }]
    })
    .then(data => {
      setModel(state => ({...state, ...data[0], config: {...state.config, ...data[1]} }))
      setInputValue(null)
      setInputVisible(false)
    })
  }

  const handleRadioPrivate = e => {
    const handle = () => handleModelUpdate({isPrivate: e.target.value})
    .then(data => setModel(state => ({...state, ...data[0], config: {...state.config, ...data[1]} })))

    if (e.target.value === true) handle()
    else
      Modal.confirm({
        title: 'Are you sure?',
        content: 'You will share your model to public.',
        okText: 'Yes',
        onOk: handle,
        cancelText: 'Cancel',
      })
  }


  const handleRadioMenuStats = e => {
    let handle = () => handleModelUpdate({UIStats: e.target.value})
    .then(data => setModel(state => ({...state, ...data[0], config: {...state.config, ...data[1]} })))

    if (e.target.value === false) handle()
    else
      Modal.confirm({
        title: 'Are you sure?',
        content: 'You will other can see stats your model.',
        okText: 'Yes',
        onOk: handle,
        cancelText: 'Cancel',
      })
  }

  const handleRadioAnnotation = e => {
    let handle = () => handleModelUpdate({UIAnnotation: e.target.value})
    .then(data => setModel(state => ({...state, ...data[0], config: {...state.config, ...data[1]} })))

    if (e.target.value === false) handle() 
    else
      Modal.confirm({
        title: 'Are you sure?',
        content: 'You will users can make annotation in your model.',
        okText: 'Yes',
        onOk: handle,
        cancelText: 'Cancel',
      })
  }

  const handleRemoveLabel = key => {
    let value = model.label.filter((item, i) => i !== key)
    let handle = () => handleModelUpdate({label: value})
    .then(data => setModel(state => ({...state, ...data[0], config: {...state.config, ...data[1]} })))
    
    Modal.confirm({
      title: 'Are you sure?',
      content: 'You will remove a label from your model.',
      okText: 'Yes',
      onOk: handle,
      cancelText: 'Cancel',
    })
  }

  const beforeUpload = (file) => {
    if (file.type !== 'image/png') {
      message.error('You can only upload PNG file!');
      return false
    }

    if (file.size / 1024 / 1024 > 10) {
      message.error('Image must smaller than 10MB!');
      return false
    }

    return true;
  }


  const uploudAvatar = {
    accept: 'image/png',
    name: 'file',
    action: "/source",
    showUploadList: false,
    beforeUpload: beforeUpload,
    async onChange(info) {
      if (info.file.status !== 'uploading') {}

      if (info.file.status === 'done') {
        const formData = new FormData();
        formData.append('avatar', info.file.originFileObj)
        
        const response = await axios({
          method: 'PATCH',
          url: `${props.apiUrl}/avatar/${model.id}`,
          data: formData,
          headers: {authorization: props.token}
        })

        if (response.status === 200) {
          setModel(state => ({
            ...state,
            avatar: response.data
          }))
          message.success(`Avatar changed successfully.`)
          window.location.reload()
        }

      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  return (
    <UserLayout {...props}>
      <Row 
        type="flex"
        gutter={32}>
        <Head>
          <title>My Model Info - Sistem Anotasi Named Entity</title>
        </Head>
        <Col xs={24} md={6}>
          <ModelSider
            current={selectedKeys}
            dataSource={model}/>
        </Col>
        <Col xs={24} md={18}>
          <Card
            className="ant-custom"
            actions={[
            <Button className="btn-danger" onClick={handleModelRemove}>Delete Model</Button>
            ]}>
            <Row>
              <Col md={4}>
                <Card bordered={false}>
                  <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'flex-end'
                  }}>
                    <Avatar size={70} src={model.avatar.path} />
                    <Upload {...uploudAvatar}>
                      <a style={{position: 'absolute', bottom: 0, right: 0}}><Icon type="edit"/></a>
                    </Upload> 
                  </div>
                </Card>
              </Col>
              <Col md={20}>
                <Card bordered={false}>
                  <div style={{display: "flex", flexDirection: "column"}}>
                    <div style={{marginBottom: 16}}>
                      <Typography.Title level={4} editable={{onChange: handleEditName}}>{model.name}</Typography.Title>
                      <Typography.Paragraph 
                        style={{ textAlign: 'justify'}}
                        editable={{onChange: handleEditDescription}}
                        ellipsis={{rows: 4, expandable: true}}>{model.desc}</Typography.Paragraph>
                    </div>
                    <div style={{marginBottom: 16}}>
                      <Row>
                        <Col md={24} style={{marginBottom: 16}}>
                          <Typography.Text style={{display: "block", marginBottom: 8}} type="secondary">Type</Typography.Text>
                          <Radio.Group value={model.isPrivate} onChange={handleRadioPrivate} buttonStyle="solid">
                            <Radio.Button value={true}>Private</Radio.Button>
                            <Radio.Button value={false}>Public</Radio.Button>
                          </Radio.Group>
                        </Col>
                        <Col md={24} style={{marginBottom: 16}}>
                          <Typography.Text style={{display: "block", marginBottom: 8}} type="secondary">Annotator</Typography.Text>
                          <Radio.Group value={model.annotator} buttonStyle="solid">
                            <Radio.Button value="classifier">Classifier</Radio.Button>
                            <Radio.Button value="extractor">Extractor</Radio.Button>
                            <Radio.Button value="pattern-extractor">Pattern Extractor</Radio.Button>
                          </Radio.Group>
                        </Col>
                        <Col md={24} style={{marginBottom: 16}}>
                          <Typography.Text style={{display: "block", marginBottom: 8}} type="secondary">Label</Typography.Text>
                          {model.label.map((item, key) => <Tag key={key} className="ant-custom" color={item.color} style={{marginBottom: 8}} onClose={() => handleRemoveLabel(key)} closable>{item.name}</Tag>)}
                          {inputVisible && <Input ref={inputRef} style={{width: 90}} type="text" value={inputValue} onChange={e => setInputValue(e.target.value)} onPressEnter={handleAddLabel}/>}
                          {!inputVisible && <Tag className="ant-custom" style={{ background: '#fff', borderStyle: 'dashed', cursor: 'pointer' }} onClick={handleInputVisible}>New Label</Tag>}
                        </Col>
                      </Row>
                    </div>
                    <div style={{marginBottom: 16}}>
                      <Typography.Text style={{marginBottom: 16}} strong>UI Control</Typography.Text>
                      <Row>
                        <Col md={12} style={{marginBottom: 16}}>
                          <Typography.Text style={{display: "block", marginBottom: 8}} type="secondary">Menu Stats</Typography.Text>
                          <Radio.Group value={model.config.UIStats} onChange={handleRadioMenuStats} buttonStyle="solid">
                            <Radio.Button value={true}>Show</Radio.Button>
                            <Radio.Button value={false}>Hide</Radio.Button>
                          </Radio.Group>
                        </Col>
                        <Col md={12} style={{marginBottom: 16}}>
                          <Typography.Text style={{display: "block", marginBottom: 8}} type="secondary">Menu Annotation</Typography.Text>
                          <Radio.Group value={model.config.UIAnnotation} onChange={handleRadioAnnotation} buttonStyle="solid">
                            <Radio.Button value={true}>Show</Radio.Button>
                            <Radio.Button value={false}>Hide</Radio.Button>
                          </Radio.Group>
                        </Col>
                      </Row>
                    </div>
                    <div style={{marginBottom: 16}}>
                      <Typography.Text style={{display: 'block', marginBottom: 16}} strong>API Request</Typography.Text>
                      <Typography.Text>To extract make a GET request to the following URL:</Typography.Text>
                      <div style={{ width: '100%' }}>
                        <Highlight>
                          {`${process.env.API_HOST}/model/${props.model.id}/train`}
                        </Highlight>
                      </div>
                      <Typography.Text style={{display: 'block', marginBottom: 16}} strong>Code Examples with Curl</Typography.Text>
                      <div style={{ width: '100%' }}>
                        <Highlight>
                          {`curl -i -H "Authorization: ${props.token}" -H "Content-Type: application/json" -X GET ${process.env.API_HOST}/model/${props.model.id}/train`}
                        </Highlight>
                      </div>
                    </div>
                  </div>
                </Card>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </UserLayout>
  )
}

ModelView.getInitialProps = async ({apiUrl, token, query}) => {
  const id = query.id
  const modelApi = `${apiUrl}/model/${id}`

  try {
    const model = await axios({
      method: "GET",
      url: modelApi,
      headers: {authorization: token}
    }).then(res => res.data)

    
    return {modelApi, model}
  } catch (error) {
    return {errorCode: error.response.status}
  }
}

export default withAuthSync(ModelView)