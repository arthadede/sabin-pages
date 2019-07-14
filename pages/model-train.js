import { Badge, Row, Col, Card, message, Button, Empty, Input, Typography, Table, Dropdown, Menu, Icon, Modal, Tag, Descriptions } from 'antd'
import React, {useRef, useState, useEffect} from 'react'
import Head from 'next/head'
import Error from 'next/error'
import axios from 'axios'
import moment from 'moment'
import _ from 'lodash'

import Highlighter from 'react-highlight-words'
import ModelSider from '../components/ModelSider'
import UserLayout from '../components/UserLayout'
import {withAuthSync} from '../utils/auth'


function ModelTrain(props) {
  if (props.errorCode) 
    return <Error statusCode={props.errorCode}/>

  const selectedKeys = props.route.parsedUrl.pathname
  const searchInput = useRef(null)
  const [windowSize, setWindowSize] = useState(null)
  const [state, setState] = useState(props.train)
  const [selected, setSelected] = useState([])
  const [searchText, setSearchText] = useState(null)
  const [filteredInfo, setFilteredInfo] = useState({})
  const [triggerExpand, setTriggerExpand] = useState(false)
  const [expandSelected, setExpandSelected] = useState(null)


  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return (() => window.addEventListener("resize", null))
  }, [])

  const handleResize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight
    })
  }

  const createScriptItem = (pos, data) => {
    const label = _(props.model.label).find(item => item.name === data.label)
    const element = document.createElement('span')
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const scrollLeft = document.documentElement.scrollLeft || document.body.scrollLeft;
    element.className = 'annotation-script-item'
    element.style.position = 'absolute'
    element.style.top = `${pos.top + scrollTop}px`
    element.style.left = `${pos.left + scrollLeft}px`
    element.style.width = `${pos.width}px`
    element.style.height = `${pos.height}px`
    element.style.background = data.hasOwnProperty('label') 
      ? label ? (label.color + '70') : '#bfbfbf'
      : '#e6f7ff'
    element.style.zIndex = 5
    document.body.appendChild(element)
  }
  
  const createLabelItem = (pos, data) => {
    const label = _(props.model.label).find(item => item.name === data.label)
    const element = document.createElement('span')
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const scrollLeft = document.documentElement.scrollLeft || document.body.scrollLeft;
    element.className = 'annotation-script-item'
    element.style.position = 'absolute'
    element.style.color = '#fff'
    element.style.background = label ? label.color : '#595959'
    element.style.padding = '0px 6px'
    element.style.top = `${(pos.top + scrollTop) - 15}px`
    element.style.left = `${pos.left + scrollLeft}px`
    element.innerText = data.label
    element.style.zIndex = 25
    document.body.appendChild(element)
  }

  const recursiveDefineLabel = (data, node) => {
    _.forEach(data, item => {
      let pos, range
      range = document.createRange();
      range.setStart(node, item.startOffset);
      range.setEnd(node, item.endOffset);
      pos = range.getClientRects()


      if (pos.length !== 0) {
        if (item.label) {
          createLabelItem(pos[0], item)
          _.forEach(pos, n => {
            createScriptItem(n, item)
          })
        } else {
          _.forEach(pos, n => {
            createScriptItem(n, item)
          })
        }
        item.script && recursiveDefineLabel(item.script, node)
      }

    })
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
    } else if (props.model.annotator === 'pattern-extractor') {
      let elementsScript = document.querySelectorAll(".annotation-script")

      _.forEach(elementsScript, item => {
        const trainIndex = _.findIndex(state, record => record.id == item.dataset.source)
        const dataTrain = state[trainIndex]
        const elementText = item.childNodes[0]
        
        recursiveDefineLabel(dataTrain.patternExtractor, elementText)
      })

    }
    
    return (() => {
      let elementScriptItem = document.querySelectorAll('.annotation-script-item')
      elementScriptItem.forEach(n => document.body.removeChild(n))
    })

  }, [triggerExpand, expandSelected, windowSize, state])

  const handleRemove = ids => {
    const handleOk = async () => {
      const response = await axios({
        method: "DELETE",
        url: `${props.modelApi}/train`,
        headers: {authorization: props.token},
        data: {ids: _.flattenDeep([ids])}
      })
  
      if (response.status === 200) {
        message.success('Training removed successfully.')
        setState(response.data)
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

  const expandedRowRender = record => {
    if (props.model.annotator === 'classifier') {
      return (
        <div style={{marginBottom: 16}}>
          <Descriptions title="Result Annotation" bordered border>
            <Descriptions.Item span={3} label="Created date">{moment(record.createdAt).fromNow()}</Descriptions.Item>
            <Descriptions.Item span={3} label="Status">
              {record.confirm
              ? <Badge color='green' text='Verified' />
              : <Badge color='warning' text='Unverified' />}
            </Descriptions.Item>
            <Descriptions.Item span={3} label="Tags">
              {record[props.model.annotator].map((item, key) => <Tag key={key} className="ant-custom" color="#108ee9" style={{marginBottom: 8}}>{item}</Tag>)}
            </Descriptions.Item>
            <Descriptions.Item span={3} label="Text">{record.source}</Descriptions.Item>
          </Descriptions>
        </div>
      )
    }

    return (
      <div style={{marginBottom: 16}}>
        <Descriptions title="Result Annotation" bordered border>
          <Descriptions.Item span={3} label="Created date">{moment(record.createdAt).fromNow()}</Descriptions.Item>
          <Descriptions.Item span={3} label="Status">
            {record.confirm
            ? <Badge color='green' text='Verified' />
            : <Badge color='warning' text='Unverified' />}
          </Descriptions.Item>
          <Descriptions.Item span={3} label="Text">
            <Typography.Paragraph className="annotation-script" data-source={record.id}>
              {record.source}
            </Typography.Paragraph>
          </Descriptions.Item>
        </Descriptions>
      </div>
    )
  }

  const getColumnSearchProps = dataIndex => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys, confirm)}
          style={{ width: 188, marginBottom: 8, display: 'block' }}
        />
        <Button
          type="primary"
          onClick={() => handleSearch(selectedKeys, confirm)}
          icon="search"
          size="small"
          style={{ width: 90, marginRight: 8 }}
        >
          Search
        </Button>
        <Button onClick={() => handleReset(clearFilters)} size="small" style={{ width: 90 }}>
          Reset
        </Button>
      </div>
    ),
    filterIcon: filtered => (
      <Icon type="search" style={{ color: filtered ? '#1890ff' : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex]
        .toString()
        .toLowerCase()
        .includes(value.toLowerCase()),
    onFilterDropdownVisibleChange: visible => {
      if (visible) {
        setTimeout(() => searchInput.current.select());
      }
    },
    render: text => (
      <Typography.Paragraph style={{minWidth: 0}} ellipsis={{rows: 3}}>{text}</Typography.Paragraph>
    ),
  })

  const handleSearch = (selectedKeys, confirm) => {
    confirm();
    setSearchText(selectedKeys[0]);
  };

  const handleReset = clearFilters => {
    clearFilters();
    setSearchText('');
  };

  const columns = [
    {
      key: 'text',
      title: 'Source',
      dataIndex: 'source',
      ...getColumnSearchProps('source')
    }, 
    {
      title: 'Status',
      dataIndex: 'confirm',
      width: 200,
      sorter: (a, b) => a.confirm - b.confirm,
      filters: [{ text: 'Verified', value: true }, { text: 'Unverified', value: false }],
      filteredValue: filteredInfo.confirm || null,
      onFilter: (value, record) => record.confirm === value,
      render: (text, record) => text ? <Badge status="success" text="Verified" /> : <Badge status="warning" text="Unverified" />
    },
    {
      key: 'operation',
      width: 200,
      render: (text, record) => {
        const menu = (
          <Menu>
            {!record.confirm && <Menu.Item key="2"><a onClick={() => handleRemove(record.id)}>Remove</a></Menu.Item>}
          </Menu>
        )

        return (
          <Dropdown overlay={menu} disabled={record.confirm}>
            <Button >
              Action <Icon type="down" />
            </Button>
          </Dropdown>
        )
      }
    }
  ]

  const tableTrain = {
    rowKey: "id",
    columns: columns,
    dataSource: state,
    rowSelection: {
      selectedRowKeys: selected,
      onChange: selectedRowKeys => setSelected(selectedRowKeys),
      getCheckboxProps: record => ({
        disabled: record.confirm,
        name: record.name
      }),
    },
    expandedRowRender,
    onExpand: (expanded, record) => {
      setTriggerExpand(expanded)
      setExpandSelected(record)
    }
  }

  const ComponentCardExtra = () => {
    const menu = (
      <Menu>
        <Menu.Item key="2"><a onClick={() => handleRemove(selected)}>Remove</a></Menu.Item>
      </Menu>
    )
  
    return (
      <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
        <Typography style={{marginRight: 16}}>Selected: </Typography>
        <Dropdown overlay={menu}>
          <Button>
            Action <Icon type="down" />
          </Button>
        </Dropdown>
      </div>
    )
  }

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
            config={props.model.config}
            current={selectedKeys}/>
        </Col>
        <Col md={18}>
          <Card 
            title="Training Data"
            extra={<ComponentCardExtra/>}
            style={{minHeight: '100%'}}>
            {state.length !== 0
            ? <Table {...tableTrain}/>
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


    const train = await axios({
      method: "GET",
      url: `${modelApi}/train/me`,
      headers: {authorization: token}
    }).then(res => res.data)

    return {model, train, modelApi}
  } catch (error) {
    return {errorCode: error.response.status}
  }
}

export default withAuthSync(ModelTrain)