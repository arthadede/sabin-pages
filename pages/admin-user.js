import { Row, Input, Typography, Table, Badge, Dropdown, Menu, Button, Icon, Card, message, Modal } from 'antd'
import AdminLayout from "../components/AdminLayout";
import Head from 'next/head'
import axios from 'axios';
import moment from 'moment'
import _ from 'lodash'
import React, {useState} from 'react'
import {withAuthSync} from '../utils/auth'

function AdminUser(props) {
  const [user, setUser] = useState(props.user)
  const [search, setSearch] = useState('')

  const recoveryUser = async id => {
    const response = await axios({
      method: 'PATCH',
      url: `${props.apiUser}/${id}`,
      data: {isDeleted: false},
      headers: {authorization: props.token}
    })
    
    if (response.status === 200) {
      message.success("User recovered successfully.")
      setUser(user.map(item => {
        if (item.id === id) item.isDeleted = false
        return item
      }))
    }
  }

  const deleteUser = async id => {
    const response = await axios({
      method: 'PATCH',
      url: `${props.apiUser}/${id}`,
      data: {isDeleted: true},
      headers: {authorization: props.token}
    })
    
    if (response.status === 200) {
      message.success("User disabled successfully.")
      setUser(user.map(item => {
        if (item.id === id) item.isDeleted = true
        return item
      }))
    }
  }

  const destroy = id => {
    const handleOk = async () => {
      const response = await axios({
        method: 'DELETE',
        url: `${props.apiUser}/${id}`,
        headers: {authorization: props.token}
      })
      
      if (response.status === 200) {
        message.success("User deleted successfully.")
        setUser(user.filter(item => {
          if (item.id === id) return false
          return true
        }))
      }
    }

    Modal.confirm({
      title: 'Are you sure?',
      content: 'You will not be able to recover this user.',
      okText: 'Yes',
      onOk: handleOk,
      cancelText: 'Cancel',
    })
  }

  const handleMenuClick = (e, id) => {
    switch (e.key) {
      case 'recovery':
        recoveryUser(id)
        break
      case 'delete':
        deleteUser(id)
        break
      case 'destroy':
        destroy(id)
        break
    }
  }

  const compareObjects = (o1, o2) => {
    var k = '';
    for(k in o1) if(o1[k] != o2[k]) return false;
    for(k in o2) if(o1[k] != o2[k]) return false;
    return true;
  }
  
  const itemExists = (haystack, needle) => {
    for(var i=0; i<haystack.length; i++) if(compareObjects(haystack[i], needle)) return true;
    return false;
  }

  const searchAll = (objects) => {
    let results = [];
    let toSearch = search.trim()
    for(let i=0; i<objects.length; i++) {
      for(let key in objects[i]) {
        if(_.includes(objects[i][key], toSearch)) {
          if(!itemExists(results, objects[i])) results.push(objects[i]);
        }
      }
    }
    return results;
  }
  
  const columns = [
    { title: 'Email', key: 'email', dataIndex: 'email' },
    { title: 'Name', width: 200, key: 'name', render: (text, record) => `${record.firstname} ${record.lastname}` },
    { title: 'Role', dataIndex: 'role.name', key: 'role' },
    { key: 'isDeleted', title: 'Status', dataIndex: 'isDeleted',
      render: text => <Badge status={text ? 'error' : 'success'} text={text ? 'Deleted' : 'Active'}/> },
    { key: 'createdAt', title: 'Register date', dataIndex: 'createdAt',
      render: text => <Typography.Text>{moment(text).fromNow()}</Typography.Text> },
    { key: 'action', 
      render: (text, record) => (
      <Dropdown overlay={
        <Menu onClick={e => handleMenuClick(e, record.id)}>
          {record.isDeleted && <Menu.Item key="recovery">Recovery</Menu.Item>}
          {!record.isDeleted && <Menu.Item key="delete">Delete</Menu.Item>}
          <Menu.Item key="destroy">Destroy</Menu.Item>
        </Menu>}>
        <Button>
          Actions <Icon type="down" />
        </Button>
      </Dropdown>
    )},
  ]
  return (
    <AdminLayout {...props}>
      <Row>
        <Head>
          <title>Admin User - Sistem Anotasi Named Entity</title>
        </Head>
        <Card 
          bordered={false}
          title="User Data"
          extra={
            <Input.Search value={search} onChange={e => setSearch(e.target.value)}/>
          }>
          <Table
            rowKey="id"
            columns={columns}
            dataSource={searchAll(user)}
          />
        </Card>
      </Row>
    </AdminLayout>
  )
}

AdminUser.getInitialProps = async ({apiUrl, token}) => {
  const apiUser = `${apiUrl}/admin/user`
  
  const fetchUser = () => {
    return axios({
      method: 'GET',
      url: apiUser,
      headers: {authorization: token}
    })
  }

  const [user] = await axios.all([fetchUser()])

  return {
    apiUser,
    user: user.data
  }
}

export default withAuthSync(AdminUser, 1)
