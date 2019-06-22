import { Typography, Row, Col, Avatar, Tag, Input, Card, Radio, Button, Modal, Icon, Upload, message } from "antd";
import Head from 'next/head'
import Error from 'next/error'
import axios from "axios";
import React, {useState, useRef} from 'react'
import {Router} from '../routes'
import UserLayout from "../components/UserLayout";
import ModelSider from "../components/MeModelSider";
import {withAuthSync} from '../utils/auth'

const colorUI =  ['#36A2EB', '#FFCE56', '#2ecc71', '#9b59b6', '#7ed6df', '#686de0']

const getRandomInt = () => {
  const colorArr = ['#FF6384', '#36A2EB', '#FFCE56', '#2ecc71', '#686de0']
  let min=0, max=colorArr.length-1
  min = Math.ceil(min)
  max = Math.floor(max)
  let randomInt = Math.floor(Math.random() * (max - min + 1)) + min
  return colorArr[randomInt]
}

function ModelView(props) {
  if (props.errorCode) 
    return <Error statusCode={props.errorCode}/>


  const selectedKeys = props.route.parsedUrl.pathname
  const inputRef = useRef(null)
  const [model, setModel] = useState(props.model)
  const [config, setConfig] = useState(props.config)
  const [inputValue, setInputValue] = useState(null)
  const [inputVisible, setInputVisible] = useState(false)

  const handleModelRemove = () => {
    const handleOk = async () => {
      const response = await axios({
        method: 'DELETE',
        url: props.modelApi,
        headers: {authorization: props.token},
      })
      if (response.status === 200) {
        Router.pushRoute('/dashboard')
        message.success("Modal berhasil dihapus.")
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
  
  const handleInputVisible = async () => {
    await setInputVisible(true)
    await inputRef.current.focus()
  }

  const handleEditName = async text => {
    const response = await axios({
      method: 'PATCH',
      url: props.modelApi,
      headers: {authorization: props.token},
      data: {name: text}
    })
    if (response.status === 200) {
      setModel(state => ({...state, name: response.data.name}))
      message.success("Informasi berhasil diubah.")
    }
  }

  const handleEditDescription = async text => {
    const response = await axios({
      method: 'PATCH',
      url: props.modelApi,
      headers: {authorization: props.token},
      data: {desc: text}
    })
    if (response.status === 200) {
      setModel(state => ({...state, desc: response.data.desc}))
      message.success("Informasi berhasil diubah.")
    }
  }

  const handleRadioPrivate = async e => {
    const handleOk = async () => {
      const response = await axios({
        method: 'PATCH',
        url: props.modelApi,
        headers: {authorization: props.token},
        data: {isPrivate: e.target.value}
      })
      if (response.status === 200) {
        setModel(state => ({...state, isPrivate: response.data.isPrivate}))
        message.success("Informasi berhasil diubah.")
      }
    }

    if (e.target.value === true) handleOk()
    else
      Modal.confirm({
        title: 'Are you sure?',
        content: 'You will user can see your model in explore.',
        okText: 'Yes',
        onOk: handleOk,
        cancelText: 'Cancel',
      })
  }

  const beforeUpload = (file) => {
    const isPNG = file.type === 'image/png';
    if (!isPNG) {
      message.error('You can only upload PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error('Image must smaller than 2MB!');
    }
    return isPNG && isLt2M;
  }

  // const handleRadioAnnotator = e => {
  //   const handleOk = async () => {
  //     const response = await axios({
  //       method: 'PATCH',
  //       url: props.modelApi,
  //       headers: {authorization: props.token},
  //       data: {annotator: e.target.value}
  //     })
  //     if (response.status === 200) {
  //       setModel(state => ({...state, annotator: response.data.annotator}))
  //     }
  //   }

  //   Modal.confirm({
  //     title: 'Confirm',
  //     content: 'Bla bla ...',
  //     okText: 'Yes',
  //     onOk: handleOk,
  //     cancelText: 'Cancel',
  //   })
  // }

  const handleAddLabel = async () => {
    const response = await axios({
      method: 'PATCH',
      url: props.modelApi,
      headers: {authorization: props.token},
      data: {label: [...model.label, inputValue]}
    })
    if (response.status === 200) {
      setModel(state => ({...state, label: response.data.label}))
      setInputValue(null)
      setInputVisible(false)
      message.success("Informasi berhasil diubah.")
    }
  }

  const handleOnCloseLabel = key => {
    const handleOk = async () => {
      const response = await axios({
        method: 'PATCH',
        url: props.modelApi,
        headers: {authorization: props.token},
        data: {label: model.label.filter((item, i) => i !== key)}
      })
      if (response.status === 200) {
        setModel(state => ({...state, label: response.data.label}))
        message.success("Informasi berhasil diubah.")
      }
    }

    Modal.confirm({
      title: 'Confirm',
      content: 'Bla bla ...',
      okText: 'Yes',
      onOk: handleOk,
      cancelText: 'Cancel',
    })
  }

  const handleRadioMenuStats = e => {
    const handleOk = async () => {
      const response = await axios({
        method: 'PATCH',
        url: `${props.modelApi}/config`,
        headers: {authorization: props.token},
        data: {UIStats: e.target.value}
      })
      if (response.status === 200) {
        setConfig(state => ({...state, UIStats: response.data.configUI.UIStats}))
        message.success("Informasi berhasil diubah.")
      }
    }

    if (e.target.value === false) handleOk() 
    else
      Modal.confirm({
        title: 'Are you sure?',
        content: 'You will other can see stats your model.',
        okText: 'Yes',
        onOk: handleOk,
        cancelText: 'Cancel',
      })
  }

  // const handleRadioMenuRun = e => {
  //   const handleOk = async () => {
  //     const response = await axios({
  //       method: 'PATCH',
  //       url: `${props.modelApi}/config`,
  //       headers: {authorization: props.token},
  //       data: {UIRun: e.target.value}
  //     })
  //     if (response.status === 200) {
  //       setConfig(state => ({...state, UIRun: response.data.configUI.UIRun}))
  //     }
  //   }

  //   if (e.target.value === false) handleOk() 
  //   else
  //     Modal.confirm({
  //       title: 'Are you sure?',
  //       content: 'You will users can make annotation in your model.',
  //       okText: 'Yes',
  //       onOk: handleOk,
  //       cancelText: 'Cancel',
  //     })
  // }

  const handleRadioAnnotation = e => {
    const handleOk = async () => {
      const response = await axios({
        method: 'PATCH',
        url: `${props.modelApi}/config`,
        headers: {authorization: props.token},
        data: {UIAnnotation: e.target.value}
      })
      if (response.status === 200) {
        setConfig(state => ({...state, UIAnnotation: response.data.configUI.UIAnnotation}))
        message.success("Informasi berhasil diubah.")
      }
    }

    if (e.target.value === false) handleOk() 
    else
      Modal.confirm({
        title: 'Are you sure?',
        content: 'You will users can make annotation in your model.',
        okText: 'Yes',
        onOk: handleOk,
        cancelText: 'Cancel',
      })
  }

  const uploudAvatar = {
    accept: 'image/png',
    name: 'file',
    action: "//jsonplaceholder.typicode.com/posts/",
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
                      <Typography.Paragraph editable={{onChange: handleEditDescription}}>{model.desc}</Typography.Paragraph>
                    </div>
                    <div style={{marginBottom: 16}}>
                      <Row>
                        <Col md={12} style={{marginBottom: 16}}>
                          <Typography.Text style={{display: "block", marginBottom: 8}} type="secondary">Type</Typography.Text>
                          <Radio.Group value={model.isPrivate} onChange={handleRadioPrivate} buttonStyle="solid">
                            <Radio.Button value={true}>Private</Radio.Button>
                            <Radio.Button value={false}>Public</Radio.Button>
                          </Radio.Group>
                        </Col>
                        <Col md={12} style={{marginBottom: 16}}>
                          <Typography.Text style={{display: "block", marginBottom: 8}} type="secondary">Annotator</Typography.Text>
                          <Radio.Group value={model.annotator} buttonStyle="solid">
                            <Radio.Button value="classifier">Classifier</Radio.Button>
                            <Radio.Button value="extractor">Extractor</Radio.Button>
                          </Radio.Group>
                        </Col>
                        <Col md={24} style={{marginBottom: 16}}>
                          <Typography.Text style={{display: "block", marginBottom: 8}} type="secondary">Label</Typography.Text>
                          {model.label.map((item, key) => <Tag key={key} className="ant-custom" color={colorUI[key]} style={{marginBottom: 8}} onClose={() => handleOnCloseLabel(key)} closable>{item}</Tag>)}
                          {inputVisible && <Input ref={inputRef} style={{width: 90}} type="text" value={inputValue} onChange={e => setInputValue(e.target.value)} onPressEnter={handleAddLabel}/>}
                          {!inputVisible && <Tag className="ant-custom" style={{ background: '#fff', borderStyle: 'dashed', cursor: 'pointer' }} onClick={handleInputVisible}>New Label</Tag>}
                        </Col>
                      </Row>
                    </div>
                    <div>
                      <Typography.Text style={{marginBottom: 16}} strong>UI Control</Typography.Text>
                      <Row>
                        <Col md={12} style={{marginBottom: 16}}>
                          <Typography.Text style={{display: "block", marginBottom: 8}} type="secondary">Menu Stats</Typography.Text>
                          <Radio.Group value={config.UIStats} onChange={handleRadioMenuStats} buttonStyle="solid">
                            <Radio.Button value={true}>Show</Radio.Button>
                            <Radio.Button value={false}>Hide</Radio.Button>
                          </Radio.Group>
                        </Col>
                        {/* <Col md={12} style={{marginBottom: 16}}>
                          <Typography.Text style={{display: "block", marginBottom: 8}} type="secondary">Menu Run</Typography.Text>
                          <Radio.Group value={config.UIRun} onChange={handleRadioMenuRun} buttonStyle="solid">
                            <Radio.Button value={true}>Show</Radio.Button>
                            <Radio.Button value={false}>Hide</Radio.Button>
                          </Radio.Group>
                        </Col> */}
                        <Col md={12} style={{marginBottom: 16}}>
                          <Typography.Text style={{display: "block", marginBottom: 8}} type="secondary">Menu Annotation</Typography.Text>
                          <Radio.Group value={config.UIAnnotation} onChange={handleRadioAnnotation} buttonStyle="solid">
                            <Radio.Button value={true}>Show</Radio.Button>
                            <Radio.Button value={false}>Hide</Radio.Button>
                          </Radio.Group>
                        </Col>
                      </Row>
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

    const config = await axios({
      method: "GET",
      url: `${modelApi}/config`,
      headers: {authorization: token}
    }).then(res => res.data)
    
    return {modelApi, model, config}
  } catch (error) {
    return {errorCode: error.response.status}
  }
}

export default withAuthSync(ModelView)