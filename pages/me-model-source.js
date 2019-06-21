import React, {useState, useEffect} from 'react'
import Head from 'next/head'
import Error from 'next/error'
import axios from 'axios'
import moment from 'moment'
import {Router} from '../routes'
import { Row, Col, Card, Table, Button, Modal, message, Typography, Empty, Menu, Dropdown, Icon } from 'antd'
import ModelSider from '../components/MeModelSider'
import UserLayout from '../components/UserLayout'
import AddModelSourceModal from '../components/AddModelSourceModal'
import {withAuthSync} from '../utils/auth'


function ModelSource(props) {
  if (props.errorCode) 
    return <Error statusCode={props.errorCode}/>
  const selectedKeys = props.route.parsedUrl.pathname
  const [source, setSource] = useState(props.sourceWithoutTrain)
  const [modalVisible, setModalVisible] = useState(false)

  const handleInsert = record => {
    setModalVisible(false)
    setSource(record)
  }

  async function handleDelete({id, text}) {
    const handleOk = async () => {
      const response = await axios({
        method: "DELETE",
        url: `${props.modelApi}/source/${id}`,
        headers: {authorization: props.token}
      })

      if (response.status === 200) {
        message.success('Source berhasil dihapus.');
        setSource(state => state.filter(item => {
          return item.id !== id ? true : false
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
  
  const columns = [
    { title: 'Text', dataIndex: 'text', 
      render: text => <Typography.Paragraph ellipsis={{rows: 3}}>{text}</Typography.Paragraph>}, 
    { title: 'Date', key: 'createdAt', width: 150, align: 'center', 
      render: (text, record) => <span>{moment(record.createdAt).fromNow()}</span>},
    { title: 'Action', key: 'operation', width: 100, 
      render: (text, record) => <Button className="btn-danger" onClick={() => handleDelete(record)}>Delete</Button>}
  ]

  const CardBody = () => {
    if (source.length === 0) return <Empty image={Empty.PRESENTED_IMAGE_SIMPLE}/>
    return (
      <div style={{}}>
        <Table rowKey="id" showHeader={false} columns={columns} dataSource={source} scroll={{ y: 500 }}/>
      </div>
    )
  }

  return (
    <UserLayout {...props}>
      <Row 
        type="flex"
        gutter={16}>
        <Head>
          <title>My Model Source - Sistem Anotasi Named Entity</title>
        </Head>
        <Col xs={24} md={6}>
          <ModelSider
            current={selectedKeys}
            dataSource={props.model}/>
        </Col>
        <Col xs={24} md={18}>
          <Card
            title="Sources"
            extra={<Button 
              className="ml-4" 
              type="primary" 
              onClick={() => setModalVisible(true)}>
              Add Source</Button>}>
            <CardBody/>
          </Card>
        </Col>
        <AddModelSourceModal 
          {...props}
          visible={modalVisible}
          onOk={handleInsert}
          onCancel={() => setModalVisible(false)}/>
        
      </Row>
    </UserLayout>
  )
}

ModelSource.Layout = UserLayout
ModelSource.getInitialProps = async ({apiUrl, token, query}) => {
  const id = query.id
  const modelApi = `${apiUrl}/model/${id}`

  try {
    const model = await axios({
      method: "GET",
      url: modelApi,
      headers: {authorization: token}
    }).then(res => res.data)

    const sources = await axios({
      method: "GET",
      url: `${modelApi}/source`,
      headers: {authorization: token}
    }).then(res => res.data)

    const resources = await axios({
      method: "GET",
      url: `${apiUrl}/source`,
      headers: {authorization: token}
    }).then(res => res.data)

    const sourceWithoutTrain = await axios({
      method: "GET",
      url: `${modelApi}/source/no_process`,
      headers: {authorization: token}
    }).then(res => res.data)

    return {modelApi, model, sources, resources, sourceWithoutTrain}
  } catch (error) {
    return {errorCode: error.response.status}
  }
}

export default withAuthSync(ModelSource)