import { Layout, Menu, Icon, Row, Col, Typography, Dropdown } from 'antd'
import React, { useState } from 'react'
import { Router } from '../routes'
import {logout} from '../utils/auth'

const { Header, Content, Sider } = Layout

export default ({route, children, auth}) => {
  const [collapsed, setCollapsed] = useState(true)
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
        <div style={{height: 64}}/>
        <Menu.Item key="/admin">
          <Icon type="appstore" />
          <span>Dashboard</span>
        </Menu.Item>
        <Menu.Item key="/admin/model">
          <Icon type="crown" />
          <span>Model</span>
        </Menu.Item>
        <Menu.Item key="/admin/user">
          <Icon type="user" />
          <span>Users</span>
        </Menu.Item>
      </Menu>
    </Sider>
  )

  const DropdownComponent = (
    <Menu>
      <Menu.Item key="1" onClick={logout}>
        <Icon type="logout" /> Logout
      </Menu.Item>
    </Menu>
  );

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
            <Dropdown overlay={DropdownComponent}>
              <Typography.Text style={{cursor: 'pointer'}}>
                {auth.email} <Icon type="down" />
              </Typography.Text>
            </Dropdown>
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