import { Layout, Menu, Button, Icon, Row, Col, Typography } from 'antd'
import React, { useState } from 'react'
import { Router } from '../routes'
import {logout} from '../utils/auth'

const { Header, Content, Sider } = Layout

export default ({route, children}) => {
  const [collapsed, setCollapsed] = useState(false)
  const selectedKeys = route.parsedUrl.pathname

  const handleToggle = () => setCollapsed(n => !n)
  const handleMenu = n => Router.pushRoute(n.key)

  const SiderComp = (
    <Sider 
      collapsible 
      trigger={
        <Typography.Text style={{color: '#fff'}} onClick={() => Router.pushRoute('/')}>
          <Icon type="left" /> Homepage
        </Typography.Text>} 
      collapsed={collapsed}>
      <div className="logo" />
      <Menu 
        onClick={handleMenu}
        selectedKeys={[selectedKeys]}
        theme="dark" mode="inline" defaultSelectedKeys={['1']}>
        <Menu.Item key="/admin">
          <Icon type="user" />
          <span>Dashboard</span>
        </Menu.Item>
        <Menu.Item key="/admin/model">
          <Icon type="video-camera" />
          <span>Model</span>
        </Menu.Item>
        <Menu.Item key="/admin/source">
          <Icon type="upload" />
          <span>Sources</span>
        </Menu.Item>
        <Menu.Item key="/admin/user">
          <Icon type="user" />
          <span>Users</span>
        </Menu.Item>
      </Menu>
    </Sider>
  )

  const HeaderComp = (
    <Header style={{ background: '#fff'}}>
      <Row type="flex">
        <Col md={4}>
          <Icon
            className="trigger"
            type={collapsed ? 'menu-unfold' : 'menu-fold'}
            onClick={handleToggle}
          />
        </Col>
        <Col md={20}>
          <div className="h-100 d-flex align-items-center justify-content-flex-end">
            <Button onClick={logout}>
              <Icon type="logout" /> Logout
            </Button>
          </div>
        </Col>
      </Row>
    </Header>
  )

  return (
    <Layout style={{minHeight: '100%'}}>
      {SiderComp}
      <Layout>
        {HeaderComp}
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            background: '#fff',
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  )
}