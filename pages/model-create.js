import { Row, Col, Avatar, Card, Form, Input, Upload, Button, Radio, Tag, Icon, message } from "antd";
import Head from 'next/head'
import axios from 'axios'
import React, {useState, useRef} from 'react'
import {Router} from '../routes'
import UserLayout from "../components/UserLayout";
import {withAuthSync} from '../utils/auth'

const RadioButton = Radio.Button

function ModelCreate(props) {
  const { getFieldDecorator, getFieldValue, setFieldsValue } = props.form
  const inputRef = useRef(null)
  const [loading, setLoading] = useState(false)
  const [imageUrl, setImageUrl] = useState(null)
  const [imageLoading, setImageLoading] = useState(false)
  const [inputValue, setInputValue] = useState(null)
  const [inputVisible, setInputVisible] = useState(false)

  const handleInputVisible = async () => {
    await setInputVisible(true)
    await inputRef.current.focus()
  }


  const handleAddLabel = () => {
    const label = getFieldValue('label')
    setFieldsValue({
      label: [...label, inputValue]
    })
    setInputValue(null)
    setInputVisible(false)
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
    const isPNG = file.type === 'image/png';
    if (!isPNG) {
      message.error('We only support PNG thumbnail.');
    }
    
    console.log(file.size)
    const fileSize = file.size / 1024 / 1024 < 1;
    if (!fileSize) {
      message.error('Please upload a picture smaller than 1 MB.');
    }

    return isPNG && fileSize;
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
        <Row gutter={16}>
          <Col md={18}>
            <Card title="Create Model">
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
                    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                    listType="picture-card"
                    className="avatar-uploader"
                    showUploadList={false}
                    beforeUpload={beforeUpload}
                  >
                    {imageUrl ? <Avatar src={imageUrl} size={90} /> : uploadButton}
                  </Upload>
                )}
              </Form.Item>
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
              <div>
              <Form.Item label="Labels">
                {getFieldDecorator('label', {
                  initialValue: [],
                  rules: [
                    {required: true, message: 'This field is required.'}
                  ]
                })(
                  <>
                    {getFieldValue('label').map((item, i) => 
                      <Tag key={i}
                        className="ant-custom"
                        color="#108ee9"
                        onClose={() => handleOnCloseLabel(i)} 
                        closable>
                        {item}
                      </Tag>)}
                  </>
                )}
                {inputVisible && 
                  <Input 
                    ref={inputRef}
                    style={{width: 120}}
                    value={inputValue} 
                    onChange={e => setInputValue(e.target.value)} 
                    onPressEnter={handleAddLabel}/>}
                {!inputVisible && 
                  <Tag 
                  className="ant-custom" 
                  style={{ background: '#fff', borderStyle: 'dashed', cursor: 'pointer' }} 
                  onClick={handleInputVisible}>New Label</Tag>}
              </Form.Item>
              <Form.Item label="Annotator">
                {getFieldDecorator('annotator', {
                  rules: [
                    {required: true, message: 'This field is required.'}
                  ],
                })(
                  <Radio.Group buttonStyle="solid">
                    <RadioButton value="classifier">Classifier</RadioButton>
                    <RadioButton value="extractor">Extractor</RadioButton>
                  </Radio.Group>,
                )}
              </Form.Item>
              </div>
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
                <Button style={{marginLeft: 16}} className="btn-danger">Cancel</Button>
              </div>
            </Card>
          </Col>
        </Row>
      </Form>
    </UserLayout>
  )
}

ModelCreate.getInitialProps = async () => {
  return {}
}

const WrappedModelCreateForm = Form.create({name: "model-create-form"})(ModelCreate)

export default withAuthSync(WrappedModelCreateForm)