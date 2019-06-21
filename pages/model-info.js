import React from 'react'
import Head from 'next/head'
import Error from 'next/error'
import axios from "axios";
import { Typography, Row, Col, Avatar, Tag, Radio, Card } from "antd";
import UserLayout from "../components/UserLayout";
import ModelSider from "../components/ModelSider";
import {withAuthSync} from '../utils/auth'

const colorUI =  ['#36A2EB', '#FFCE56', '#2ecc71', '#9b59b6', '#7ed6df', '#686de0']

function ModelView(props) {
  const selectedKeys = props.route.parsedUrl.pathname

  if (props.errorCode > 200 ) {
    return <Error statusCode={props.errorCode} />;
  }

  return (
    <UserLayout {...props}>
      <Row 
        type="flex"
        gutter={32}>
        <Head>
          <title>Model Info - Sistem Anotasi Named Entity</title>
        </Head>
        <Col md={6}>
          <ModelSider
            id={props.model.id}
            config={props.config}
            current={selectedKeys}/>
        </Col>
        <Col md={18}>
          <Card>
            <Row>
              <Col md={4}>
                <Card bordered={false}>
                  <Avatar 
                  size={89} 
                  src={props.model.avatar.path}/>
                </Card>
              </Col>
              <Col md={20}>
                <Card bordered={false}>
                  <div style={{display: "flex", flexDirection: "column"}}>
                    <div style={{marginBottom: 16}}>
                      <Typography.Title level={4}>{props.model.name}</Typography.Title>
                      <Typography.Paragraph>{props.model.desc}</Typography.Paragraph>
                    </div>
                    <div style={{marginBottom: 16}}>
                      <Row>
                        <Col md={12} style={{marginBottom: 16}}>
                          <Typography.Text style={{display: "block", marginBottom: 8}} type="secondary">Type</Typography.Text>
                          <Radio.Group value={props.model.isPrivate} buttonStyle="solid">
                            <Radio.Button value={true}>Private</Radio.Button>
                            <Radio.Button value={false}>Public</Radio.Button>
                          </Radio.Group>
                        </Col>
                        <Col md={12} style={{marginBottom: 16}}>
                          <Typography.Text style={{display: "block", marginBottom: 8}} type="secondary">Annotator</Typography.Text>
                          <Radio.Group value={props.model.annotator}  buttonStyle="solid">
                            <Radio.Button value="classifier">Classifier</Radio.Button>
                            <Radio.Button value="extractor">Extractor</Radio.Button>
                          </Radio.Group>
                        </Col>
                        <Col md={24} style={{marginBottom: 16}}>
                          <Typography.Text style={{display: "block", marginBottom: 8}} type="secondary">Label</Typography.Text>
                          {props.model.label.map((item, key) => <Tag key={key} className="ant-custom" color={colorUI[key]} style={{marginBottom: 8}} >{item}</Tag>)}
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

ModelView.Layout = UserLayout
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

    return {model, config}
  } catch (error) {
    return {errorCode: error.response.status}
  }
}

export default withAuthSync(ModelView)