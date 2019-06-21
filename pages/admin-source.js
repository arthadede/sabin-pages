import { Row, Col, Typography, Table, Tag, Dropdown, Menu, Button, Icon, Card, Input, Modal, message } from 'antd'
import AdminLayout from "../components/AdminLayout"
import Head from 'next/head'
import axios from 'axios'
import moment from 'moment'
import _ from 'lodash'
import React, {useState} from 'react'
import {withAuthSync} from '../utils/auth'


function AdminSource(props) {
  const [source, setSource] = useState(props.source)
  const [search, setSearch] = useState('')

  const destroy = id => {
    const handleOk = async () => {
      const response = await axios({
        method: 'DELETE',
        url: `${props.apiSource}/${id}`,
        headers: {authorization: props.token}
      })
      
      if (response.status === 200) {
        message.success("Source berhasil dihapus.")
        setSource(source.filter(item => {
          if (item.id === id) return false
          return true
        }))
      }
    }

    Modal.confirm({
      title: 'Are you sure?',
      content: 'You will not be able to recover this source.',
      okText: 'Yes',
      onOk: handleOk,
      cancelText: 'Cancel',
    })
  }

  const handleMenuClick = (e, id) => {
    switch (e.key) {
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
    { title: 'Text', key: 'text', dataIndex: 'text',
      render: text => <Typography.Paragraph ellipsis={{rows: 3}}>{text}</Typography.Paragraph> },
    { key: 'createdAt', width: 140, align: 'center', title: 'Created date', dataIndex: 'createdAt',
      render: text => <Typography.Text>{moment(text).fromNow()}</Typography.Text> },
    { key: 'operation', 
      render: (text, record) => (
      <Dropdown overlay={
        <Menu onClick={e => handleMenuClick(e, record.id)}>
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
          <title>Admin Source - Sistem Anotasi Named Entity</title>
        </Head>
        <Card 
          bordered={false}
          title="Source Data"
          extra={
            <Input.Search value={search} onChange={e => setSearch(e.target.value)}/>
          }>
          <Table
            rowKey="id"
            columns={columns}
            dataSource={searchAll(source)}
            expandedRowRender={record => <p style={{ margin: 0 }}>{record.text}</p>}
          />
        </Card>
      </Row>
    </AdminLayout>
  )
}

AdminSource.Layout = AdminLayout
AdminSource.getInitialProps = async ({apiUrl, token}) => {
  const apiSource = `${apiUrl}/admin/source`
  
  const fetchSource = () => {
    return axios({
      method: 'GET',
      url: apiSource,
      headers: {authorization: token}
    })
  }

  const [source] = await axios.all([fetchSource()])

  return {
    apiSource,
    source: source.data
  }
}

export default withAuthSync(AdminSource, 1)
