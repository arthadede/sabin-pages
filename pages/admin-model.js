import { Row, Descriptions, Typography, Table, Tag, Dropdown, Menu, Button, Icon, Badge, Card, Input, Modal, message } from 'antd'
import axios from 'axios'
import Head from 'next/head'
import moment from 'moment'
import {withAuthSync} from '../utils/auth'
import React, {useState} from 'react'
import _ from 'lodash'
import AdminLayout from "../components/AdminLayout"

function AdminModel(props) {
  const [model, setModel] = useState(props.model)
  const [search, setSearch] = useState('')

  const deleteSoft = async id => {
    const response = await axios({
      method: 'PATCH',
      url: `${props.apiModel}/${id}`,
      data: {isDeleted: true},
      headers: {authorization: props.token}
    })
    
    if (response.status === 200) {
      setModel(model.map(item => {
        if (item.id === id) item.isDeleted = true
        return item
      }))
    }
  }

  const unDeleteSoft = async id => {
    const response = await axios({
      method: 'PATCH',
      url: `${props.apiModel}/${id}`,
      data: {isDeleted: false},
      headers: {authorization: props.token}
    })
    
    if (response.status === 200) {
      setModel(model.map(item => {
        if (item.id === id) item.isDeleted = false
        return item
      }))
    }
  }

  const destroy = id => {
    const handleOk = async () => {
      const response = await axios({
        method: 'DELETE',
        url: `${props.apiModel}/${id}`,
        headers: {authorization: props.token}
      })
      
      if (response.status === 200) {
        message.success("Model berhasil dihapus.")
        setModel(model.filter(item => {
          if (item.id === id) return false
          return true
        }))
      }
    }

    Modal.confirm({
      title: 'Are you sure?',
      content: 'You will not be able to recover this model.',
      okText: 'Yes',
      onOk: handleOk,
      cancelText: 'Cancel',
    })
  }

  const handleMenuClick = (e, id) => {
    switch (e.key) {
      case 'undelete_soft':
        unDeleteSoft(id)
        break
      case 'delete_soft':
        deleteSoft(id)
        break
      case 'destroy':
        destroy(id)
        break
    }
  }
  
  const columns = [
    { title: 'Name', width: 200, dataIndex: 'name', key: 'name' },
    { title: 'Description', textWrap: 'ellipsis', dataIndex: 'desc', key: 'description' },
    { title: 'Private', dataIndex: 'isPrivate', key: 'private', 
      render: text => <Tag className="ant-custom" color={!text ? '#1e90ff' : '#f9ca24'}>{text ? 'PRIVATE' : 'PUBLIC'}</Tag> },
    { key: 'status', width: 140, align: 'center', title: 'Status', dataIndex: 'isDeleted',
      render: text => <Badge status={text ? 'error' : 'success'} text={text ? 'Deleted' : 'Active'}/> },
    { key: 'updatedAt', width: 140, align: 'center', title: 'Last Modified', dataIndex: 'updatedAt',
      render: text => <Typography.Text>{moment(text).fromNow()}</Typography.Text> },
    { key: 'operation', 
      render: (text, record) => (
      <Dropdown overlay={
        <Menu onClick={key => handleMenuClick(key, record.id)}>
          {record.isDeleted && <Menu.Item key="undelete_soft">Recovery</Menu.Item>}
          {!record.isDeleted && <Menu.Item key="delete_soft">Delete</Menu.Item>}
          <Menu.Item key="destroy">Destroy</Menu.Item>
        </Menu>}>
        <Button>
          Actions <Icon type="down" />
        </Button>
      </Dropdown>
    )},
  ]

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

  const ExpandedComponent = record => {
    const config = record.configUI
    const user = record.user
    return (
      <Descriptions title="Model Information" bordered>
        <Descriptions.Item span={3} label="Author">{`${user.firstname} ${user.lastname}`}</Descriptions.Item>
        <Descriptions.Item span={3} label="Name">{record.name}</Descriptions.Item>
        <Descriptions.Item span={3} label="Description">
          <Typography.Paragraph ellipsis={{rows: 3}}>{record.desc}</Typography.Paragraph>
        </Descriptions.Item>
        <Descriptions.Item span={3} label="Labels">
          {record.label.map((item, key) => (
            <Tag key={key} className="ant-custom" color="#1e90ff">{item}</Tag>
          ))}
        </Descriptions.Item>
        <Descriptions.Item label="Type">{record.isPrivate ? 'PRIVATE' : 'PUBLIC'}</Descriptions.Item>
        <Descriptions.Item label="Annotator">{record.annotator.toUpperCase()}</Descriptions.Item>
        <Descriptions.Item label="Created Date">{moment(record.createdAt).fromNow()}</Descriptions.Item>
        <Descriptions.Item span={3} label="Status">
          <Badge status={config.isDeleted ? 'error' : 'success'} text={config.isDeleted ? 'Offline' : 'Online'} />
        </Descriptions.Item>
        <Descriptions.Item label="UI Stats">
          <Badge status={config.UIStats ? 'error' : 'success'} text={config.UIStats ? 'Not Active' : 'Active'} />
        </Descriptions.Item>
        <Descriptions.Item label="UI Run">
          <Badge status={config.UIRun ? 'error' : 'success'} text={config.UIRun ? 'Not Active' : 'Active'} />
        </Descriptions.Item>
        <Descriptions.Item label="UI Annotation">
          <Badge status={config.UIAnnotation ? 'error' : 'success'} text={config.UIAnnotation ? 'Not Active' : 'Active'} />
        </Descriptions.Item>
      </Descriptions>
    )
  }

  return (
    <AdminLayout {...props}>
      <Row>
        <Head>
          <title>Admin Model - Sistem Anotasi Named Entity</title>
        </Head>
        <Card 
          bordered={false}
          title="Model Data"
          extra={
            <Input.Search value={search} onChange={e => setSearch(e.target.value)}/>
          }>
          <Table
            rowKey="id"
            columns={columns}
            dataSource={searchAll(model)}
            expandedRowRender={ExpandedComponent}
          />
        </Card>
      </Row>
    </AdminLayout>
  )
}

AdminModel.getInitialProps = async ({apiUrl, token}) => {
  const apiModel = `${apiUrl}/admin/model`

  const fetchModel = () => {
    return axios({
      method: 'GET',
      url: `${apiUrl}/admin/model`,
      headers: {authorization: token}
    })
  }

  const [model] = await axios.all([fetchModel()])

  return {
    apiModel,
    model: model.data
  }
}

export default withAuthSync(AdminModel, 1)
