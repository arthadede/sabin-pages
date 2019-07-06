import { Row, Col, Avatar, Card, Form, Input, Upload, Button, Radio, Tag, Icon, message, Popover } from "antd";
import Head from 'next/head'
import axios from 'axios'
import _ from 'lodash'
import React, {useRef, useState, useEffect} from 'react'
import { CirclePicker } from 'react-color'
import {Router} from '../routes'
import UserLayout from "../components/UserLayout";
import {withAuthSync} from '../utils/auth'

const RadioButton = Radio.Button

function handleInputLabelRef(ref, cb) {
  function handleClickOutside(event) {
    if (ref.current && !ref.current.contains(event.target) && !event.target.title) {
      cb({status: false})
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  })
}

function ModelCreate(props) {
  const { getFieldDecorator, getFieldValue, setFieldsValue } = props.form
  const inputRef = useRef(null)
  const labelWrapper = useRef(null)
  const labelRef = useRef(null)
  const [colorPicker, setColorPicker] = useState("#0088ff")
  const [loading, setLoading] = useState(false)
  const [imageUrl, setImageUrl] = useState(null)
  const [imageLoading, setImageLoading] = useState(false)
  const [inputValue, setInputValue] = useState(null)
  const [inputVisible, setInputVisible] = useState(false)
  
  handleInputLabelRef(labelWrapper, ({ status }) => {
    if (status === false && inputValue !== null) {
      handleAddLabel()
      setInputVisible(false)
    } else {
      setInputVisible(false)
    }
  })

  const handleInputVisible = async () => {
    await setInputVisible(true)
    await inputRef.current.focus()
  }

  const handleAddLabel = async () => {
    const label = getFieldValue('label')
    setFieldsValue({
      label: [
        ...label, 
        { 
          name: inputValue,
          color: colorPicker,
       }
      ]
    })
      
    await setInputValue(null)
    await labelRef.current && labelRef.current.focus()
  }

  const handleTabLabel = e => {
    const keyCode = e.which || e.keyCode

    if (keyCode === 9) {
      e.preventDefault();
      if (!inputValue) {
        setInputVisible(false)
        return
      }
      
      handleAddLabel()
    }

    if (keyCode === 27) { 
      setInputValue(null)
      setInputVisible(false)
    }
  }

  const handleOnCloseLabel = key => {
    const label = getFieldValue('label')
    setFieldsValue({
      label: label.filter((text, i) => i !== key)
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    props.form.validateFields(async (err, values) => {
      if (!err) {

        const {avatar, ...model} = values

        try {

          setLoading(true)
          const resModel = await axios({
            method: "POST",
            url: `${props.apiUrl}/model`,
            data: model,
            headers: {authorization: props.token}
          })

          const formData = new FormData();
          formData.append('avatar', avatar.originFileObj)
          formData.append('model', resModel.data.id)
          const response = await axios({
            method: 'POST',
            url: `${props.apiUrl}/avatar`,
            data: formData,
            headers: {authorization: props.token}
          })
  
          if (response.status === 200) {
            message.success("Model created successfully.")
            Router.pushRoute("/dashboard")
          }
        } catch (err) {
          switch (err.response.status) {
            case 400:
              message.error(err.response.data.message && err.response.statusText)
              break;
          }
        } finally {
          setLoading(false)
        }
      }
    })
  }

  const getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
  }

  const beforeUpload = (file) => {
    if (file.type !== 'image/png') {
      message.error('We only support PNG thumbnail.');
      return false
    }
    
    if (file.size / 1024 / 1024 > 5) {
      message.error('Please upload a picture smaller than 1 MB.');
      return false
    }

    return true
  }

  const handleChange = info => {
    if (info.file.status === 'uploading') {
      setImageLoading(true)
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, imageUrl => {
        setImageUrl(imageUrl)
        setImageLoading(false)
      })
      return info && info.file
    }
  };

  const uploadButton = (
    <div>
      <Icon type={imageLoading ? 'loading' : 'plus'} />
      <div className="ant-upload-text">Upload</div>
    </div>
  )

  return (
    <UserLayout {...props}>
      <Head>
        <title>Create Model - Sistem Anotasi Named Entity</title>
      </Head>
      <Form>
        <Card title="Create Model">
          <Row gutter={16}>
            <Col md={4}>
              <Form.Item label="Avatar">
                {getFieldDecorator('avatar', {
                  valuePropName: 'file',
                  getValueFromEvent: handleChange,
                  rules: [
                    {required: true, message: 'This field is required.'}
                  ],
                })(
                  <Upload
                    accept=".png,image/png"
                    name="avatar"
                    action="/source"
                    listType="picture-card"
                    className="avatar-uploader"
                    showUploadList={false}
                    beforeUpload={beforeUpload}
                  >
                    {imageUrl ? <Avatar src={imageUrl} size={90} /> : uploadButton}
                  </Upload>
                )}
              </Form.Item>
            </Col>
            <Col md={20}>
                <Form.Item label="Name">
                  {getFieldDecorator('name', {
                    rules: [
                      {required: true, message: `This field is required.`},
                      {min: 4, message: `Minimum length is 6 characters.`},
                      {max: 20, message: `Minimum length is 20 characters.`}
                    ],
                  })(<Input />)}
                </Form.Item>
                <Form.Item label="Description">
                  {getFieldDecorator('desc', {
                    rules: [
                      {required: true, message: 'This field is required.'}
                    ],
                  })(<Input.TextArea rows={4} />)}
                </Form.Item>
                <Form.Item label="Annotator">
                  {getFieldDecorator('annotator', {
                    rules: [
                      {required: true, message: 'This field is required.'},
                    ],
                  })(
                    <Radio.Group buttonStyle="solid">
                      <RadioButton value="classifier">Classifier</RadioButton>
                      <RadioButton value="extractor">Extractor</RadioButton>
                      <RadioButton value="pattern-extractor">Pattern Extractor</RadioButton>
                    </Radio.Group>,
                  )}
                </Form.Item>
                <Form.Item label="Labels" extra='Press tab or enter for new input label.'>
                  {getFieldDecorator('label', {
                    initialValue: [],
                    rules: [
                      {required: true, message: 'This field is required.'}
                    ]
                  })(
                    <>
                      {getFieldValue('label').map((item, key) => (
                        <Tag key={key}
                          className="ant-custom"
                          color={item.color}
                          onClose={() => handleOnCloseLabel(key)}
                          closable>
                            {item.name}
                          </Tag>
                      ))}
                    </>
                  )}
                  {inputVisible && (
                    <div 
                      style={{display: 'inline-block'}}
                      ref={labelWrapper}>
                      <Input 
                      ref={inputRef}
                      style={{width: 120, outlineColor: colorPicker}}
                      value={inputValue} 
                      onChange={e => setInputValue(e.target.value)} 
                      onPressEnter={handleAddLabel}
                      onKeyDown={handleTabLabel}
                      suffix={
                        <Popover 
                          placement="bottomRight" 
                          content={<CirclePicker color={colorPicker} onChange={color => {
                            setColorPicker(color.hex)
                            inputRef.current.focus()
                          }}/>} 
                          trigger="click">
                          <div style={{width: 15, height: 15, background: colorPicker}}/>    
                        </Popover>
                      }/>
                    </div>)}
                  {!inputVisible && (
                    <button
                      ref={labelRef}
                      className="ant-tag ant-custom"
                      style={{ background: '#fff', borderStyle: 'dashed', cursor: 'pointer' }}
                      onClick={handleInputVisible}
                      onKeyPress={handleInputVisible}>
                      New Label
                    </button>)}
                  </Form.Item>
                <Form.Item label="Type">
                  {getFieldDecorator('isPrivate', {
                    rules: [
                      {required: true, message: 'This field is required.'}
                    ]
                  })(
                    <Radio.Group buttonStyle="solid">
                      <RadioButton value={false}>Public</RadioButton>
                      <RadioButton value={true}>Private</RadioButton>
                    </Radio.Group>,
                  )}
                </Form.Item>
                <div style={{display: "flex", justifyContent: "flex-end"}}>
                  <Button style={{marginLeft: 16}} type="primary" onClick={handleSubmit} loading={loading}>Create Model</Button>
                  <Button style={{marginLeft: 16}} onClick={() => Router.pushRoute('/dashboard')} className="btn-danger">Cancel</Button>
                </div>
            </Col>
          </Row>
        </Card>
      </Form>
    </UserLayout>
  )
}

ModelCreate.getInitialProps = async () => {
  return {}
}

const WrappedModelCreateForm = Form.create({name: "model-create-form"})(ModelCreate)

export default withAuthSync(WrappedModelCreateForm)