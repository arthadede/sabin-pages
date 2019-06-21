import React from 'react'
import Head from 'next/head'
import Error from 'next/error'
import axios from 'axios'
import { Row, Col, Typography, Upload, Icon } from 'antd'
import ModelSider from '../components/MeModelSider'
import UserLayout from '../components/UserLayout'
import {withAuthSync} from '../utils/auth'

const Dragger = Upload.Dragger;

const draggerProps = {
  name: "file",
  multiple: true,
}

function ModelBatch(props) {
  if (props.errorCode) 
    return <Error statusCode={props.errorCode}/>

  const selectedKeys = props.route.parsedUrl.pathname

  return (
    <Row gutter={16}>
      <Col md={6}>
        <ModelSider
          current={selectedKeys}
          dataSource={props.model}/>
      </Col>
      <Col md={18}>
        <Typography.Title level={4}>Batch Processing</Typography.Title>
        <Dragger {...draggerProps}>
          <p className="ant-upload-drag-icon">
            <Icon type="inbox" />
          </p>
          <p className="ant-upload-text">Click or drag file to this area to upload</p>
          <p className="ant-upload-hint">
            Support for a single or bulk upload. Strictly prohibit from uploading company data or other
            band files
          </p>
        </Dragger>
      </Col>
    </Row>
  )
}

ModelBatch.getInitialProps = async ({apiUrl, token, query}) => {
  const id = query.id

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

export default withAuthSync(ModelBatch)