import { Row, Col, Card, Typography, List, Avatar, Skeleton, PageHeader, Button, Empty } from "antd";
import axios from "axios";
import React, {useState} from 'react'
import Head from 'next/head'
import {Router} from '../routes'
import {withAuthSync} from '../utils/auth'
import UserLayout from "../components/UserLayout";

function ExplorePage(props) {
  const [model, setModel] = useState(props.model)

  const ComponentModel = (
    <Row type="flex" gutter={16}>
      {model.map((item, key) => (
        <Col key={key} xs={24} sm={12} lg={8}>
          <Skeleton avatar title={false} loading={false} active>
            <Card 
              hoverable 
              style={{marginBottom: 16}}
              onClick={() => Router.pushRoute('ModelInfo', {id: item.id})}>
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
          <title>Explore - Sistem Anotasi Named Entity</title>
        </Head>
        <PageHeader>
          {model.length !== 0 ? ComponentModel : <Empty image={Empty.PRESENTED_IMAGE_SIMPLE}/> }
        </PageHeader>
      </Row>
    </UserLayout>
  )
}

ExplorePage.getInitialProps = async ({apiUrl, token}) => {
  const getModel = () => {
    return axios({
      method: "GET",
      url: `${apiUrl}/model`,
      headers: {authorization: token}
    })
  }

  const [model] = await axios.all([getModel()])

  return {
    model: model.data,
  }
}

export default withAuthSync(ExplorePage)