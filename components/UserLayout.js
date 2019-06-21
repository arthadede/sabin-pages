import React from 'react'
import {Row, Col, Button, Layout, Menu, Icon} from 'antd'
import {Router} from '../routes'
import {logout} from '../utils/auth'

const {Header, Content, Footer} = Layout


export default function({route, children}) {
  const selectedKeys = route.parsedUrl.pathname

  const handleMenu = n => Router.pushRoute(n.key)

  const HeaderComp = (
    <Header className="ant-custom">
      <Row type="flex">
        <Col md={4}>
          <div className="logo"/>
        </Col>
        <Col md={14}>
          <Menu
            className="ant-custom"
            onClick={handleMenu}
            selectedKeys={[selectedKeys]}
            mode="horizontal"
            style={{ lineHeight: '64px' }}>
              <Menu.Item
                key="/dashboard"
                className="ant-custom">
                Dashboard
              </Menu.Item>
              <Menu.Item
                key="/explore"
                className="ant-custom">
                Explore
              </Menu.Item>
          </Menu>
        </Col>
        <Col md={6}>
          <div className="h-100 d-flex align-items-center justify-content-flex-end">
            <Button onClick={logout}>
              <Icon type="logout" /> Logout
            </Button>
          </div>
        </Col>
      </Row>
    </Header>
  )


  const FooterComponent = () => (
    <Footer style={{ textAlign: 'center' }}>Sistem Anotasi Bahasa Indonesia ©2019</Footer>
  )
  
  return (
    <Layout style={{minHeight: '100%'}}>
      {HeaderComp}
      <Content 
        className="ant-custom">
        <div
          className="content-custom">
          {children}
        </div>
      </Content>
      <FooterComponent/>
    </Layout>
  )
}