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
    <List 
    pagination
    grid={{
      gutter: 16,
      xs: 1,
      sm: 2,
      xl: 3
    }}
    dataSource={model}
    renderItem={(item, key) => (
      <List.Item>
        <Skeleton avatar title={false} loading={false} active>
          <Card 
            hoverable 
            style={{marginBottom: 16, height: 163.090}}
            onClick={() => Router.pushRoute('ModelInfo', {id: item.id})}>
            <List.Item.Meta
              avatar={<Avatar size={50} src={item.avatar.path}/>}
              title={
                <div>
                  <Typography.Title level={4} ellipsis={{rows: 1}}>{item.name}</Typography.Title>
                </div>
              }
              description={<Typography.Paragraph ellipsis={{rows: 3}}>{item.desc}</Typography.Paragraph>}/>
          </Card>
        </Skeleton>
      </List.Item>
    )}/>
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