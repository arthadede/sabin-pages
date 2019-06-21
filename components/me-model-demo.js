import React from 'react'
import Head from 'next/head'
import Error from 'next/error'
import axios from 'axios'
import { Row, Col, Card, Avatar, Tag, Input, Typography, Table } from 'antd'
import ModelSider from '../components/MeModelSider'
import UserLayout from '../components/UserLayout'
import {withAuthSync} from '../utils/auth'

const column = [{
  title: "Label",
  dataIndex: "label",
  key: "label"
}, {
  title: "Result",
  dataIndex: "result",
  key: "result"
}]

const demoResult = [{
  label: "label1",
  result: "48%"
}, {
  label: "label2",
  result: "40%"
}]

function ModelDemo(props) {
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
        <Card style={{marginBottom: 16}}>
          <Row>
            <Col md={4}><Avatar size={89} icon="user"/></Col>
            <Col md={20}>
              <Card.Meta 
                style={{marginBottom: 16}}
                title={props.model.name} 
                description={props.model.desc}/>
              {props.model.label.map(item => <Tag color="blue">{item}</Tag>)}
            </Col>
          </Row>
        </Card>
        <Card style={{marginBottom: 16}}>
          <Row gutter={32} type="flex">
            <Col md={14}>
              <Typography.Title level={4}>Masukan kalimat untuk mencoba</Typography.Title>
              <Input.TextArea rows="7"/>
            </Col>
            <Col md={10}>
              <Typography.Title level={4}>Result</Typography.Title>
              <Table showHeader={false} pagination={false} columns={column} dataSource={demoResult}/>
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>
  )
}

ModelDemo.Layout = UserLayout
ModelDemo.getInitialProps = async ({apiUrl, token, query}) => {
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

export default withAuthSync(ModelDemo)