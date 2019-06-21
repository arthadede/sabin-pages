import Head from 'next/head'
import Error from 'next/error'
import axios from 'axios'
import moment from 'moment'
import _ from 'lodash'
import React, {useState, useEffect} from 'react'
import { Badge, Row, Col, Card, message, Button, Empty, Popconfirm, Typography, Table, Dropdown, Menu, Icon, Modal, Tag, Descriptions, Select } from 'antd'
import ModelSider from '../components/ModelSider'
import UserLayout from '../components/UserLayout'
import {withAuthSync} from '../utils/auth'

const colorUI = ['#36A2EB', '#FFCE56', '#2ecc71', '#9b59b6', '#7ed6df', '#686de0']

function ModelTrain(props) {
  if (props.errorCode) 
    return <Error statusCode={props.errorCode}/>

  const selectedKeys = props.route.parsedUrl.pathname
  const [windowSize, setWindowSize] = useState(null)
  const [state, setState] = useState(props.train)
  const [triggerExpand, setTriggerExpand] = useState(false)
  const [expandSelected, setExpandSelected] = useState(null)
  const [filterState, setFilterState] = useState('all')


  const handleResize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight
    })
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    
    return (() => {
      window.addEventListener("resize", null);
    })
  }, [])

  const getStateByFilter = () => {
    switch (filterState) {
      case 'all':
        return state
      case 'verified':
        return state.filter(item => item.confirm === true)
      case 'not_verified':
        return state.filter(item => item.confirm === false)
    }
  }

  const createScriptItem = (pos, data) => {
    const element = document.createElement('span')
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const scrollLeft = document.documentElement.scrollLeft || document.body.scrollLeft;
    element.className = 'annotation-script-item'
    element.style.position = 'absolute'
    element.style.top = `${pos.top + scrollTop}px`
    element.style.left = `${pos.left + scrollLeft}px`
    element.style.width = `${pos.width}px`
    element.style.height = `${pos.height}px`
    element.style.background = `${colorUI[_.indexOf(props.model.label, data.label)]}a1`
    element.style.zIndex = 5
    document.body.appendChild(element)
  }
  
  const createLabelItem = (pos, data) => {
    const element = document.createElement('span')
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const scrollLeft = document.documentElement.scrollLeft || document.body.scrollLeft;
    element.className = 'annotation-script-item'
    element.style.position = 'absolute'
    element.style.color = '#fff'
    element.style.background = colorUI[_.indexOf(props.model.label, data.label)]
    element.style.padding = '0px 6px'
    element.style.top = `${(pos.top + scrollTop) - 15}px`
    element.style.left = `${pos.left + scrollLeft}px`
    element.innerText = data.label
    element.style.zIndex = 25
    document.body.appendChild(element)
  }

  useEffect(() => {
    if (props.model.annotator === 'extractor') {
      let elementsScript = document.querySelectorAll(".annotation-script")
    
      _.forEach(elementsScript, item => {
        const trainIndex = _.findIndex(state, record => record.id == item.dataset.source)
        const dataTrain = state[trainIndex]
        const elementText = item.childNodes[0]
        

        dataTrain.extractor.forEach(item => {
          let pos, range
          range = document.createRange();
          range.setStart(elementText, item.startOffset);
          range.setEnd(elementText, item.endOffset);
          pos = range.getClientRects()
          if (pos.length !== 0) {
            createLabelItem(pos[0], item)
            _.forEach(pos, n => {
              createScriptItem(n, item)
            })
          }
        })
      })
    } 
    
    return (() => {
      let elementScriptItem = document.querySelectorAll('.annotation-script-item')
      elementScriptItem.forEach(n => document.body.removeChild(n))
    })
  }, [triggerExpand, expandSelected, windowSize, state])

  const expandedRowRender = record => {
    if (props.model.annotator === 'classifier') {
      return (
        <div style={{marginBottom: 16}}>
          <Descriptions title="Training Information" bordered border>
            <Descriptions.Item span={3} label="Created date">{moment(record.createdAt).fromNow()}</Descriptions.Item>
            <Descriptions.Item span={3} label="Status">
              {record.confirm
              ? <Badge color='green' text='Verified' />
              : <Badge color='red' text='Unverified' />}
            </Descriptions.Item>
            {/* <Descriptions.Item span={2} label="User">{`${record.user.firstname} ${record.user.lastname}`}</Descriptions.Item> */}
            {/* <Descriptions.Item span={1} label="Email">{record.user.email}</Descriptions.Item> */}
            <Descriptions.Item span={3} label="Tags">
              {record[props.model.annotator].map((item, key) => <Tag key={key} className="ant-custom" color="#108ee9" style={{marginBottom: 8}}>{item}</Tag>)}
            </Descriptions.Item>
            <Descriptions.Item span={3} label="Text">{record.text}</Descriptions.Item>
          </Descriptions>
        </div>
      )
    }

    const labels = props.model.label.map((item, key) => ({
      color: colorUI[key],
      text: item
    }))

    return (
      <div style={{marginBottom: 16}}>
        <Descriptions title="Training Information" bordered border>
          <Descriptions.Item span={3} label="Created date">{moment(record.createdAt).fromNow()}</Descriptions.Item>
          <Descriptions.Item span={3} label="Status">
            {record.confirm
            ? <Badge color='green' text='Verified' />
            : <Badge color='red' text='Unverified' />}
          </Descriptions.Item>
          <Descriptions.Item span={3} label="Tags">
            {labels.map((item, key) => <Tag key={key} className="ant-custom" color={item.color} style={{marginBottom: 8}}>{item.text}</Tag>)}
          </Descriptions.Item>
          <Descriptions.Item span={3} label="Text">
            <Typography.Paragraph className="annotation-script" data-source={record.id}>
              {record.text}
            </Typography.Paragraph>
          </Descriptions.Item>
        </Descriptions>
      </div>
    )
  }

  const tableTrain = {
    rowKey: "id",
    showHeader: false,
    expandedRowRender,
    onExpand: (expanded, record) => {
      setTriggerExpand(expanded)
      setExpandSelected(record)
    }
  }


  const handleDecline = id => {
    const handleOk = async () => {
      const response = await axios({
        method: "DELETE",
        url: `${props.modelApi}/train/${id}/decline`,
        headers: {authorization: props.token}
      })
  
      if (response.status === 200) {
        message.success('Decline successful')
        setState(state => state.filter(item => {
          if (item.id === id) return false
          return item
        }))
      }
    }

    Modal.confirm({
      title: 'Are you sure?',
      content: 'You will not be able to recover this train.',
      okText: 'Yes',
      onOk: handleOk,
      cancelText: 'Cancel',
    })
  }

  const columns = [
    {
      title: 'Text',
      key: 'text',
      filtered: true,
      render: (text, record) => (
        <Typography.Paragraph ellipsis={{rows: 3}}>
          {record.text}
        </Typography.Paragraph>
      )
    }, {
      title: 'Action',
      key: 'operation',
      width: 200,
      align: 'right',
      render: (text, record) => {
        if (record.confirm) {
          return <Tag className="ant-custom" style={{fontSize: 14}} color="#27ae60">Confirmed</Tag>
        }
        return <Button onClick={() => handleDecline(record.id)} className="btn-danger">Remove</Button>
      },
    }
  ]


  return (
    <UserLayout {...props}>
      <Row 
        type="flex"
        gutter={16}>
        <Head>
          <title>Model Stats - Sistem Anotasi Named Entity</title>
        </Head>
        <Col md={6}>
          <ModelSider
            id={props.model.id}
            config={props.config}
            current={selectedKeys}/>
        </Col>
        <Col md={18}>
          <Card 
            title="Training Data"
            extra={
              <Select
                size="large"
                defaultValue="all"
                onChange={val => setFilterState(val)}
                style={{ width: 150 }}
                >
                <Select.Option value="all">All</Select.Option>
                <Select.Option value="verified">Verified</Select.Option>
                <Select.Option value="not_verified">Not Verified</Select.Option>
              </Select>
            }
            style={{minHeight: '100%'}}>
            {state.length !== 0
            ? <Table {...tableTrain} columns={columns} dataSource={getStateByFilter()}/>
            : <Empty image={Empty.PRESENTED_IMAGE_SIMPLE}/>}
          </Card>
        </Col>
      </Row>
    </UserLayout>
  )
}

ModelTrain.getInitialProps = async ({res, apiUrl, token, query}) => {
  const id = query.id
  const modelApi = `${apiUrl}/model/${id}`

  try {
    const model = await axios({
      method: "GET",
      url: modelApi,
      headers: {authorization: token}
    }).then(res => res.data)

    const config = await axios({
      method: "GET",
      url: `${modelApi}/config`,
      headers: {authorization: token}
    }).then(res => res.data)

    if (!config.UIAnnotation) throw {response: {status: 404}}

    const train = await axios({
      method: "GET",
      url: `${modelApi}/train/me`,
      headers: {authorization: token}
    }).then(res => res.data)

    return {model, config, train}
  } catch (error) {
    return {errorCode: error.response.status}
  }
}

export default withAuthSync(ModelTrain)