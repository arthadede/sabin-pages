import { Card, Typography, List, Avatar, Button, Empty } from "antd";
import axios from "axios";
import Head from 'next/head'
import React, {useState} from 'react'
import {Router} from '../routes'
import {withAuthSync} from '../utils/auth'
import UserLayout from "../components/UserLayout";

function DashboardPage(props) {
  const [model, setModel] = useState(props.model)

  const ComponentModelMe = (
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
          <Card 
            hoverable 
            style={{marginBottom: 16, height: 163.090}}
            onClick={() => Router.pushRoute('MeModelInfo', {id: item.id})}>
              <List.Item.Meta
                avatar={<Avatar size={50} src={item.avatar.path}/>}
                title={
                  <div>
                    <Typography.Title level={4} ellipsis>
                      {item.name}
                    </Typography.Title>
                  </div>
                  }
                description={<Typography.Paragraph ellipsis={{rows: 3}}>{item.desc}</Typography.Paragraph>}/>
            </Card>
          </List.Item>
      )}/>
  )

  return (
    <UserLayout {...props}>
      <Head>
        <title>Dashboard - Sistem Anotasi Named Entity</title>
      </Head>
      <Card bordered={false}
        title="Your Model"
        extra={[<Button key="1" className="btn-success" onClick={() => Router.pushRoute('/create')}>Create Model</Button>]}>
        {model.length !== 0 ? ComponentModelMe : <Empty image={Empty.PRESENTED_IMAGE_SIMPLE}/> }
      </Card>
    </UserLayout>
  )
}

DashboardPage.getInitialProps = async ({apiUrl, token}) => {
  const getModel = () => {
    return axios({
      method: "GET",
      url: `${apiUrl}/model/me`,
      headers: {
        authorization: token,
      }
    })
  }

  const [model] = await axios.all([getModel()])

  return {
    model: model.data
  }
}

export default withAuthSync(DashboardPage)