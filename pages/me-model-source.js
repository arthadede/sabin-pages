import { Row, Col, Card, Button, Modal, message, Empty, Menu, Dropdown, Icon, Skeleton, List, Checkbox, Typography } from 'antd'
import Head from 'next/head'
import Error from 'next/error'
import axios from 'axios'
import React, {useState} from 'react'
import io from 'socket.io-client'

import ModelSider from '../components/MeModelSider'
import UserLayout from '../components/UserLayout'
import ModalAddSource from '../components/ModalAddSource'
import {withAuthSync} from '../utils/auth'


function ModelSource(props) {
  if (props.errorCode) 
    return <Error statusCode={props.errorCode}/>

  const [socket, setSocket] = useState(io.connect(process.env.API_HOST))
  const selectedKeys = props.route.parsedUrl.pathname
  const [state, setState] = useState(props.source.json)
  const [selected, setSelected] = useState([])
  const [modalVisible, setModalVisible] = useState(false)

  const selectedAll = state.length ===  selected.length && state.length !== 0

  const handleRemove = data => {
    return new Promise((resolve, reject) => {
      axios({
        method: "PATCH",
        url: `${props.modelApi}/source/remove`,
        headers: {authorization: props.token},
        data: {sourceIds: data}
      })
      .then(res => {
        if(res.status === 200) {
          socket.emit('remove', props.model.id)
          resolve(res.data)
        }
      })
      .catch(err => reject(err))
    })
  }

  const removeSource = id => {
    Modal.confirm({
      title: 'Are you sure?',
      content: 'You will not be able to recover this source.',
      okText: 'Yes',
      onOk: () => {
        handleRemove([id])
        .then(result => {
          setState(result.json)
          message.success("Source removed successfully.")
        }).catch(err => {
          message.error("Something wrong.")
        })
      },
      cancelText: 'Cancel',
    })
  }

  const removeSources = () => {
    if (selected.length === 0) {
      message.warning("Please select checkbox you want delete.")
      return
    }

    Modal.confirm({
      title: 'Are you sure?',
      content: 'You will not be able to recover this source.',
      okText: 'Yes',
      onOk: () => {
        handleRemove(selected)
        .then(result => {
          setState(result.json)
          setSelected([])
          message.success("Source removed successfully.")
        }).catch(err => {
          message.error("Something wrong.")
        })
      },
      cancelText: 'Cancel',
    })
  }

  const addModelProps = {
    ...props,
    visible: modalVisible,
    onOk: record => {
      setModalVisible(false)
      setState(record)
    },
    onCancel: () => {
      setModalVisible(false)
    }
  }

  const selectAll = () => {
    if (selectedAll) {
      setSelected([])
      return
    }
    setSelected(_.map(state, (item, index) => index))
  }

  const ComponentCardExtra = (
    <>
      <Button type={selectedAll ? "primary" : "default"}  style={{marginLeft: 8}} onClick={() => selectAll()}>Select All</Button>
      <Button type="primary" style={{marginLeft: 8}} onClick={() => setModalVisible(true)}>Add Source</Button>
      <Button type="danger" style={{marginLeft: 8}} onClick={removeSources}>Delete Selected</Button>
    </>
  )
  
  const ComponentList = () => {
    return (
      <Checkbox.Group 
        style={{width: '100%'}}
        value={selected}
        onChange={val => setSelected(val)}>
        <List
          pagination
          dataSource={state}
          renderItem={(item, index) => (
            <List.Item actions={[
              <Dropdown overlay={(
                <Menu>
                  <Menu.Item key="0">
                    <a onClick={() => removeSource(index)}>Remove</a>
                  </Menu.Item>
                </Menu>
              )}>
                <Button>
                  Action <Icon type="down" />
                </Button>
              </Dropdown>
            ]}>
              <Skeleton avatar title={false} loading={item.loading} active>
                <List.Item.Meta
                  style={{alignItems: 'center'}}
                  avatar={<Checkbox style={{marginLeft: 16, marginRight: 16}} value={index}/>}
                  description={<Typography.Paragraph style={{minWidth: 0}} ellipsis={{rows: 3}}>{item}</Typography.Paragraph>}/>
              </Skeleton>
            </List.Item>
          )}>
        </List>
      </Checkbox.Group>
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
          <ModelSider current={selectedKeys} dataSource={props.model}/>
        </Col>
        <Col xs={24} md={18}>
          <Card title="Sources" extra={ComponentCardExtra}>
            {state.length > 0
            ? <ComponentList/>
            : <Empty image={Empty.PRESENTED_IMAGE_SIMPLE}/>}
          </Card>
        </Col>
      </Row>
      <ModalAddSource {...addModelProps}/>
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

    const source = await axios({
      method: "GET",
      url: `${modelApi}/source`,
      headers: {authorization: token}
    }).then(res => res.data)

    return {modelApi, model, source}
  } catch (error) {
    return {errorCode: error.response.status}
  }
}

export default withAuthSync(ModelSource)