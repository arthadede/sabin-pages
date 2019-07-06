import {Modal, Descriptions, Spin, Checkbox, Upload, Button, Typography, Table, message} from 'antd'
import React, {useState} from 'react'
import axios from 'axios'
import _ from 'lodash'

function ModalAddSource(props) {
  const [state, setState] = useState(null)
  const [selected, setSelected] = useState(null)
  const [loading, setLoading] = useState(false)
  const [loadingText, setLoadingText] = useState("")

  const handleUpload = file => {
    setLoading(true)
    setLoadingText("Uploading...")
    const formData = new FormData();
    formData.append('file', file)

    axios({
      method: 'POST',
      url: '/source',
      data: formData
    }).then(res => {
      if (res.status === 200) {
        setState(res.data)
      }
    }).catch(err => {
      message.error(err)
    }).finally(() => {
      setLoading(false)
      setLoadingText("")
    })
  }

  const handleAdd = data => {
    return new Promise((resolve, reject) => {
      axios({
        method: "PATCH",
        url: `${props.modelApi}/source/add`,
        headers: {authorization: props.token},
        data: {json: data}
      })
      .then(res => res.status === 200 && resolve(res.data))
      .catch(err => reject(err))
    })
  }

  const handleSubmit = () => {
    if (!selected) {
      message.warning("Please select any check for submit to source.")
      return
    }

    setLoading(true)
    setLoadingText("Importing Data...")
    let data = []

    _.forEach(state.sheets, (item, key) => {
      var picked = _.pick(item, selected)
      var result = _.values(picked)
      data.push(...result)
    })

    handleAdd(data)
    .then(result => {
      message.success("Added source successfully.")
      props.onOk(result.json)
    })
    .catch(() => message.error("Something wrong."))
    .finally(() => { 
      setState(null)
      setSelected([])
      setLoading(false)
      setLoadingText("")
    })
  }

  const fileType = [
    '.csv',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    'application/vnd.ms-excel'
  ]

  const confUpload = {
    accept: fileType.join(','),
    showUploadList: false,
    beforeUpload: file => {
      if (!fileType.includes(file.type)) {
        message.error('We only support CSV, XLS, or XLSX spreadsheet.')
      } else if (file.size / 1024 / 1024 > 20) {
        message.error('Please upload a file smaller than 20 MB.')
      } else {
        handleUpload(file)
      }

      return false
    },
  }

  const ComponentSheet = () => {
    if (state === null) return null

    const columnsArr = _.filter(state.columns, n => n !== 'id')
    const columns = _.map(columnsArr, (item, key) => ({
      key: item,
      width: 200,
      title: <Checkbox value={item}>Select Column</Checkbox>,
      render: (text, record) => <div className="table-text">{record[item]}</div>
    }))
    
    const dataSource = _.slice(state.sheets, 0, 10)
    const propsTable = {
      rowKey: 'id',
      bordered: true,
      columns: columns,
      pagination: false,
      dataSource: dataSource,
    }

    return (
      <div className="table-sheet">
        <Typography.Title level={4}>Select Source</Typography.Title>
        <Descriptions>
          <Descriptions.Item label="Total rows">{state.sheets.length}</Descriptions.Item>
        </Descriptions>
        <Checkbox.Group 
          style={{display: 'block'}}
          value={selected}
          onChange={val => setSelected(val)}>
          <Table {...propsTable} className="ant-custom table-sheet-wrapper"/>
        </Checkbox.Group>
        <div className="d-flex justify-content-center" style={{marginTop: 16}}>
          <Button type="primary" onClick={handleSubmit} disabled={state.length === null}>Submit</Button>
        </div>
      </div>
    )
  }

  const ComponentUpload = () => {
    return (
      <Upload.Dragger {...confUpload}>
        <div style={{ 
          height: 400,
          width: 900,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'}}>
          <Typography.Title level={4} type="secondary">Click or drag file CSV or XLS</Typography.Title>
        </div>
      </Upload.Dragger>
    )
  }

  return (
    <Modal
      centered
      width="auto"
      visible={props.visible}
      closable={state !== null}
      maskClosable={state === null}
      onCancel={() => {
        setState(null)
        props.onCancel()
      }}
      footer={null}>
      <div>
        <Spin tip={loadingText} spinning={loading}>
          {state !== null && <ComponentSheet/>}
          {state === null && <ComponentUpload/>}
        </Spin>
      </div>
    </Modal>
  )
}

export default ModalAddSource
