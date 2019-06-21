import { Row, Col, Card, Typography, List, Avatar, Skeleton, PageHeader, Button, Empty } from "antd";
import axios from "axios";
import Head from 'next/head'
import React, {useState} from 'react'
import {Router} from '../routes'
import {withAuthSync} from '../utils/auth'
import UserLayout from "../components/UserLayout";

const getRandomInt = () => {
  const colorArr = ['#FF6384', '#36A2EB', '#FFCE56', '#2ecc71', '#686de0']
  let min=0, max=colorArr.length-1
  min = Math.ceil(min)
  max = Math.floor(max)
  let randomInt = Math.floor(Math.random() * (max - min + 1)) + min
  return colorArr[randomInt]
}

function DashboardPage(props) {
  const [model, setModel] = useState(props.model)

  const ComponentModelMe = (
    <Row type="flex" gutter={16}>
      {model.map((item, key) => (
        <Col key={key} xs={24} sm={12} lg={8}>
          <Skeleton avatar title={false} loading={false} active>
            <Card 
              hoverable 
              style={{marginBottom: 16}}
              onClick={() => Router.pushRoute('MeModelInfo', {id: item.id})}>
              <List.Item.Meta
                avatar={item.avatar !== null ? <Avatar size={50} src={item.avatar.path}/> : <Avatar size={50} style={{backgroundColor: getRandomInt(), fontSize: 25}}>{item.name[0]}</Avatar>}
                title={<Typography.Title level={4}>{item.name}</Typography.Title>} 
                description={<Typography.Paragraph ellipsis={{rows: 3}}>{item.desc}</Typography.Paragraph>}/>
            </Card>
          </Skeleton>
        </Col>
      ))}
    </Row>
  )

  return (
    <UserLayout {...props}>
      <Row>
        <Head>
          <title>Dashboard - Sistem Anotasi Named Entity</title>
        </Head>
        <PageHeader
          title="Your Model"
          extra={[<Button key="1" className="btn-success" onClick={() => Router.pushRoute('/create')}>Create Model</Button>]}>
          {model.length !== 0 ? ComponentModelMe : <Empty image={Empty.PRESENTED_IMAGE_SIMPLE}/> }
        </PageHeader>
      </Row>
    </UserLayout>
  )
}

DashboardPage.getInitialProps = async ({apiUrl, token}) => {
  const getModel = () => {
    return axios({
      method: "GET",
      url: `${apiUrl}/model/me`,
      headers: {authorization: token}
    })
  }

  const [model] = await axios.all([getModel()])

  return {
    model: model.data
  }
}

export default withAuthSync(DashboardPage)