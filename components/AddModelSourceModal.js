import {Modal, Row, Col, Card, Icon, Breadcrumb, Transfer, Upload, Input, List, Button, Typography, Table, message, Empty} from 'antd'
import React, {useState, useEffect} from 'react'
import axios from 'axios'
import xlsx from 'xlsx'
import _ from 'lodash'

const { TextArea } = Input;

function AddModelSourceModal(props) {
  const [currentStep, setCurrentStep] = useState(0)
  const [method, setMethod] = useState(null)
  const [resultData, setResultData] = useState([])

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep(state => state + 1)
    }
  }

  const handleOnClose = async () => {
    await props.onCancel()
    setCurrentStep(0)
  }

  /* COMPONENTS */
  

  const TransferSource = () => {
    const [targetKeys, setTargetKeys] = useState([])
    const sources = _.differenceWith(props.resources, props.sources, _.isEqual)

    const handleConfirm =  () => {
      setResultData(props.resources.filter(item => _.includes(targetKeys, item.key)))
      handleNext()
    }

    return (
      <>
        <Transfer
          rowKey={record => record.id}
          dataSource={sources}
          targetKeys={targetKeys}
          onChange={val => setTargetKeys(val)}
          titles={['Sources', 'Selected']}
          listStyle={{
            width: 400,
            height: 360
          }}
          style={{
            marginBottom: 16
          }}
          render={item => item.text}
        />
        <div className="d-flex justify-content-flex-end">
          <Button type="primary" onClick={handleConfirm} disabled={targetKeys.length === 0}>Confirm</Button>
        </div>
      </>
    )
  }
  
  
  
  const UploudSource = () => {
    const [state, setState] = useState([])
    const [countFiles, setCountFiles] = useState(0)

    const getRecord = () => {
      const dataArr = []

      _.forEach(state, item => { dataArr.push(...item.sheets) })

      const result = mergeAllSheet(dataArr)

      return result
    }

    const readerXLSX = file => {
      return new Promise((resolve, reject) => {

        let reader = new FileReader()

        reader.onload = function(e) {
          let data = new Uint8Array(e.target.result)
          let result = xlsx.read(data, {type: 'array'})
          resolve(result)
        }
        
        reader.onerror = reject
        reader.readAsArrayBuffer(file)
      })
    }


    const getSheet = ({Sheets}) => {
      const result = []
      _.forIn(Sheets, sheet => {
        const sheetTransform = _.transform(sheet, (result, value, key) => {
          if (key.indexOf('!') === -1) {
            let keyCol = key.match(/[A-Z]+/g)[0]
            if (!result.hasOwnProperty(keyCol)) 
              result[keyCol] = []
            result[keyCol].push(value['w'])
            return result
          }
        }, {})
        result.push(sheetTransform)
      })

      return result
    }


    const mergeAllSheet = sheets => {
      const result = {}
      _.forEach(sheets, sheet => {
        _.forIn(sheet, (value, key) => {
          (result[key] || (result[key] = [])).push(...value)
        })
      })
      
      return result
    }
    

    const handleUploud = async info => {
      switch (info.file.status) {
        case 'uploading':
          break;
          case 'done':
            try {
              const bufferData = await readerXLSX(info.file.originFileObj)
              const sheets = getSheet(bufferData)
              setState(state => [...state, { name: info.file.name, sheets }])
              setCountFiles(state => state += 1)
          } catch (error) {
            console.log("ERROR")
          }
          break;
        case 'error':
          
          break;
      }
    }

    const handleRemove = async file => {
      setState(state.filter(sheet => sheet.name !== file.name))
      setCountFiles(state => state -= 1)
    }

    const handleConfirm =  () => {
      const data = []
      _.forIn(getRecord(), (value, key) => {
        let newData = value.map(text => ({
          id: _.uniqueId(),
          text: text,
          new: true
        }))
        data.push(...newData)
      })

      setResultData(data)
      handleNext()
    }

    const beforeUpload = (file) => {
      
      const fileType = file.type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
      if (!fileType) {
        message.error('We only support XLS, or XLSX spreadsheet.');
      }

      const fileSize = file.size / 1024 / 1024 < 500;
      if (!fileSize) {
        message.error('Please upload a file smaller than 500 MB.');
      }
  
      return fileSize
    }
    
    const propsDagger = {
      accept: '.xls,.xlsx,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      action: '//jsonplaceholder.typicode.com/posts/',
      listType: 'picture',
      beforeUpload: beforeUpload,
      onChange: handleUploud,
      onRemove: handleRemove
    }

    return (
      <Row>
        <Card bordered={false}>
          <Row gutter={16} type="flex">
            <Col md={16}>
            <Upload {...propsDagger}>
              <Button>
                <Icon type="upload" /> Upload
              </Button>
            </Upload>
            {countFiles <= 0 && <Empty image={Empty.PRESENTED_IMAGE_SIMPLE}/>}
            </Col>
            <Col md={8}>
              <Card style={{minHeight: '100%'}}>
                <Card.Meta 
                  title="Rules"
                  description="Data yang diambil"/>
              </Card>
            </Col>
          </Row>
        </Card>
        <div className="d-flex justify-content-flex-end">
          <Button type="primary" onClick={handleConfirm} disabled={state.length === 0}>Confirm</Button>
        </div>
      </Row>
    )
  }
  
  const ManualTextInput = () => {
    const [state, setState] = useState([])
    const [input, setInput] = useState(null)

    const handlePushSource = async text => {
      if (_.isEmpty(text)) {
        message.error(`This field is empty.`)
        return
      }

      setState(state => [
        ...state,
        {
          id: Date.now(),
          text: text,
          new: true
        }
      ])
      setInput(null)
    }

    const handleRemoveSource = idx => {
      setState(state => state.filter((item, i) => i !== idx))
    }
    
    const handleEditSource = async idx => {
      await setInput(state[idx].text)
      handleRemoveSource(idx)
    }

    const handleConfirm =  async () => {
      setResultData(state)
      handleNext()
    }

    return (
      <>
        <Row gutter={16} type="flex">
          <Col md={16}>
            <TextArea 
              rows={15}
              value={input} 
              onChange={e => setInput(e.target.value)}
              style={{marginBottom: 16}}
              autosize={false}
              onPressEnter={e => handlePushSource(e.target.value)}
            />
            <div className="d-flex justify-content-flex-end">
              <Button onClick={() => handlePushSource(input)}>Push</Button>
            </div>
          </Col>
          <Col md={8}>
            <List
              bordered
              style={{height: 325, marginBottom: 16, overflow: 'auto'}}
              className="pl-0"
              itemLayout="vertical"
              dataSource={state}
              header={(
                <Typography.Text>{state.length} Items</Typography.Text>
              )}
              renderItem={(item, i) => (
                <List.Item 
                  actions={[
                  <Button size="small" onClick={() => handleEditSource(i)}>Change</Button>,
                  <Button type="danger" size="small" onClick={() => handleRemoveSource(i)}>Pop</Button>]}>
                  <Typography.Paragraph ellipsis={{rows: 3}}>{item.text}</Typography.Paragraph>
                </List.Item>
              )}/>
            <div className="d-flex justify-content-flex-end">
              <Button type="primary" onClick={handleConfirm} disabled={state.length === 0}>Confirm</Button>
            </div>
          </Col>
        </Row>
      </>
    )
  }

  const ConfirmSource = () => {
    const handleRemove = key => {
      setResultData(state => state.filter(item => item.id !== key))
    }

    const columns =[
      {title: 'Text', key: 'text', render: (text, record) => <Typography.Paragraph ellipsis={{rows: 3}}>{record.text}</Typography.Paragraph>},
      {key: 'operation', width: 120, align: 'center', render: (text, record) => <Button size="small" onClick={() => handleRemove(record.id)}>Remove</Button>},
    ]
    

    const handleSubmit = async () => {
      let sources = props.sources.map(item => item.id)
      
      if (resultData[0].new) {
        const input = resultData.map(item => item.text)
        const response = await axios({
          method: "POST",
          url: `${props.apiUrl}/source`,
          data: { text: input },
          headers: {authorization: props.token}
        })
        if (response.status === 200) {
          const result = response.data.map(item => item.id)
          sources = [...sources, ...result]
        }
      } else {
        const result = resultData.map(item => item.id)
        sources = [...sources, ...result]
      }
      
      const response = await axios({
        method: "POST",
        url: `${props.modelApi}/source`,
        data: {sourceIds: sources},
        headers: {authorization: props.token}
      })
      
      
      if (response.status === 200) {
        props.onOk(response.data)
        setCurrentStep(0)
        message.success("Source berhasil ditambahkan")
      }
    }

    return (
      <Row>
        <Table
          rowKey="id"
          style={{marginBottom: 16}}
          columns={columns}
          dataSource={resultData}
        />
        <div className="d-flex justify-content-flex-end">
          <Button type="primary" onClick={handleSubmit} disabled={resultData.length === 0}>Confirm</Button>
        </div>
      </Row>
    )
  }


  /* HANDLE MODAL */


  const SelectingMethod = () => {
    const handleMethod = key => {
      setMethod(key)
      handleNext()
    }
    
    return (
      <Row>
        <Card 
          hoverable
          onClick={() => handleMethod(0)}
          style={{marginBottom: 16}}>
          <Card.Meta 
            title="Get Data From Resource"
            description="Lorem Ipsum adalah contoh teks atau dummy dalam industri percetakan dan penataan huruf atau typesetting." />
        </Card>
        <Card 
          hoverable
          onClick={() => handleMethod(1)}
          style={{marginBottom: 16}}>
          <Card.Meta 
            title="File Uploud"
            description="Lorem Ipsum adalah contoh teks atau dummy dalam industri percetakan dan penataan huruf atau typesetting." />
        </Card>
        <Card 
          hoverable
          onClick={() => handleMethod(2)}
          style={{marginBottom: 16}}>
          <Card.Meta 
            title="Manual Text Input"
            description="Lorem Ipsum adalah contoh teks atau dummy dalam industri percetakan dan penataan huruf atau typesetting. Lorem Ipsum telah menjadi standar contoh teks sejak tahun 1500an, saat seorang tukang cetak yang tidak dikenal mengambil sebuah kumpulan teks dan mengacaknya untuk menjadi sebuah buku contoh huruf." />
        </Card>
      </Row>
    )
  }

  const SelectingSource = () => {
    return (
      <Row>
        <div style={{marginBottom: 16}}>
          {method === 0 ? <TransferSource />
          :method === 1 ? <UploudSource />
          :<ManualTextInput />}
        </div>
      </Row>
    )
  }

  const steps = [{
    key: 0,
    title: "Select Method",
    content: <SelectingMethod/>
  }, {
    key: 1,
    title: "Set Source",
    content: <SelectingSource/>
  }, {
    key: 2,
    title: "Confirm",
    content: <ConfirmSource/>
  }]

  const handleToRoute = key => {
    setCurrentStep(key)
  }


  return (
    <Modal
      centered
      title="Add Source"
      width={900}
      visible={props.visible}
      maskClosable={false}
      onCancel={handleOnClose}
      footer={null}>
      <Breadcrumb>
        {steps
          .filter(item => item.key <= currentStep)
          .map(item => currentStep === item.key
          ? <Breadcrumb.Item key={item.key}>{item.title}</Breadcrumb.Item>
          : <Breadcrumb.Item key={item.key} href="#" onClick={() => handleToRoute(item.key)}>{item.title}</Breadcrumb.Item>
        )}
      </Breadcrumb>
      <div className="steps-content" style={{marginTop: 16}}>{steps[currentStep].content}</div>
    </Modal>
  )
}

export default AddModelSourceModal
