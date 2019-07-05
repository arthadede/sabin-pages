import { Row, Input, Typography, Table, Badge, Dropdown, Menu, Button, Icon, Card, message, Modal } from 'antd'
import AdminLayout from "../components/AdminLayout";
import Head from 'next/head'
import axios from 'axios';
import moment from 'moment'
import _ from 'lodash'
import Highlighter from 'react-highlight-words'
import React, {useRef, useState} from 'react'
import {withAuthSync} from '../utils/auth'

function AdminUser(props) {
  const [user, setUser] = useState(props.user)
  const searchInput = useRef(null)
  const [selected, setSelected] = useState([])
  const [filteredInfo, setFilteredInfo] = useState({})
  const [sortedInfo, setSortedInfo] = useState({})
  const [searchText, setSearchText] = useState(null)


  const handleDeleteSoft = async (ids, isDeleted) => {
    const response = await axios({
      method: 'PATCH',
      url: `${props.apiUser}`,
      data: { ids, isDeleted},
      headers: {authorization: props.token}
    })
    
    if (response.status === 200) {
      message.success("Update user successfully.")
      setUser(response.data)
    }
  }

  const handleDestroy = ids => {
    const handleOk = async () => {
      const response = await axios({
        method: 'DELETE',
        url: `${props.apiUser}`,
        data: {ids},
        headers: {authorization: props.token}
      })
      
      if (response.status === 200) {
        message.success("Delete user successfully.")
        setUser(response.data)
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

  const handleRemoves = () => {
    if (selected.length === 0) {
      message.warning("Nothing was selected.")
      return
    }

    handleDestroy(selected)
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
      <Highlighter
        className="table-text"
        highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
        searchWords={[searchText]}
        autoEscape
        textToHighlight={text.toString()}
      />
    ),
  })

  const handleSearch = (selectedKeys, confirm) => {
    confirm()
    setSearchText(selectedKeys[0])
  }

  const handleReset = clearFilters => {
    clearFilters()
    setSearchText('')
  }

  const handleTable = (pagination, filters, sorter) => {
    setFilteredInfo(filters)
    setSortedInfo(sorter)
  }

  const handleMenuClick = (e, id) => {
    switch (e.key) {
      case 'recovery':
        handleDeleteSoft(id, false)
        break
      case 'delete':
        handleDeleteSoft(id, true)
        break
      case 'destroy':
        handleDestroy(id)
        break
    }
  }

  const columns = [
    { 
      title: 'Email', 
      dataIndex: 'email',
      ...getColumnSearchProps('email') 
    },
    { 
      key: 'firstname', 
      title: 'Name', 
      width: 200,
      align: 'left',
      render: (text, record) => `${record.firstname} ${record.lastname}` 
    },
    { 
      title: 'Role', 
      dataIndex: 'role.name',
      width: 150,
      align: 'center',
      sortOrder: sortedInfo.columnKey === 'role.name' && sortedInfo.order,
    },
    { 
      title: 'Status', 
      dataIndex: 'isDeleted',
      width: 150,
      align: 'center',
      render: text => <Badge status={text ? 'error' : 'success'} text={text ? 'Disable' : 'Active'}/> 
    },
    { 
      title: 'Register date',
      dataIndex: 'createdAt',
      width: 200,
      align: 'center',
      render: text => <Typography.Text>{moment(text).fromNow()}</Typography.Text> 
    },
    { 
      key: 'operation',
      width: 180,
      align: 'right',
      render: (text, record) => (
      <Dropdown overlay={
        <Menu onClick={e => handleMenuClick(e, record.id)}>
          {record.isDeleted && <Menu.Item key="recovery">Recovery</Menu.Item>}
          {!record.isDeleted && <Menu.Item key="delete">Disable</Menu.Item>}
          <Menu.Item key="destroy">Delete</Menu.Item>
        </Menu>}>
        <Button>
          Actions <Icon type="down" />
        </Button>
      </Dropdown>
    )},
  ]

  const CardExtra = [
    <Button key="0" type="danger" onClick={handleRemoves}>Delete Selected</Button>
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
          extra={CardExtra}>
          <Table
            rowKey="id"
            scroll={{x: 1100}}
            columns={columns}
            dataSource={user}
            onChange={handleTable}
            rowSelection={{
              selectedRowKeys: selected,
              onChange: selectedRowKeys => {
                setSelected(selectedRowKeys)
              }
            }}
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
