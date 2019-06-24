import { Typography, Row, Col, Avatar, Statistic, List, Card, Icon } from "antd"
import Head from 'next/head'
import Error from 'next/error'
import _ from 'lodash'
import axios from "axios"
import moment from 'moment'
import React, {useState} from 'react'
import {Line, Doughnut} from 'react-chartjs-2'
import UserLayout from "../components/UserLayout"
import ModelSider from "../components/MeModelSider"
import {withAuthSync} from '../utils/auth'


const getRandomInt = () => {
  const colorArr = ['#FF6384', '#36A2EB', '#FFCE56', '#2ecc71', '#686de0']
  let min=0, max=colorArr.length-1
  min = Math.ceil(min)
  max = Math.floor(max)
  let randomInt = Math.floor(Math.random() * (max - min + 1)) + min
  return colorArr[randomInt]
}

function ModelStats(props) {
  if (props.errorCode) 
    return <Error statusCode={props.errorCode}/>

  const selectedKeys = props.route.parsedUrl.pathname
  const [state, setState] = useState(props.stats)
  const [logTrain, setLogTrain] = useState(props.logTrain)
  const [logLabel, setLogLabel] = useState(props.logLabel)
  const [logMonth, setLogMonth] = useState(props.logMonth)


  const getLogLabel = () => {
    const init = _.reduce(props.model.label, (result, item) => {
      result[item] = 0
      return result
    }, {})

    const compareLabel = {...init, ...logLabel}
    const result = _.values(compareLabel)
    return result
  }

  const doughnutData = {
    labels: props.model.label,
    datasets: [
      {
        data: getLogLabel(),
        backgroundColor: ['#36A2EB', '#FFCE56', '#2ecc71', '#9b59b6', '#7ed6df', '#686de0'],
        hoverBackgroundColor: ['#36A2EB', '#FFCE56', '#2ecc71', '#9b59b6', '#7ed6df', '#686de0'],
      },
    ],
  }

  const lineData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'Desember'],
    datasets: [
      {
        label: new Date().getFullYear(),
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: logMonth,
      },
    ],
  }

  return (
    <UserLayout {...props}>

      <Row 
        type="flex"
        gutter={32}>
        <Head>
          <title>My Model Stats - Sistem Anotasi Named Entity</title>
        </Head>
        <Col md={6}>
          <ModelSider 
            current={selectedKeys}
            dataSource={props.model}/>
        </Col>
        <Col md={18}>
          <Card style={{padding: 24}}>
            <Typography.Title level={4} style={{ marginBottom: 32 }}>
              Statistic Model
            </Typography.Title>
            <Row gutter={32}>
              <Col md={12} style={{ marginBottom: 60 }}>
                <Statistic
                  title="Verified"
                  value={state.verified}
                  prefix={<Icon type="database" />}
                />
              </Col>
              <Col md={12} style={{ marginBottom: 60 }}>
                <Statistic 
                  title="Not Verified"
                  value={state.notVerified}
                  prefix={<Icon type="container" />}
                />
              </Col>
              <Col md={12} style={{ marginBottom: 60 }}>
                <Statistic
                  title="Source processed"
                  value={state.sourceProcessed}
                  prefix={<Icon type="file-done" />}
                  suffix={`/ ${state.sourceNotProcessed}`}
                />
              </Col>
              <Col md={12} style={{ marginBottom: 60 }}>
                <Statistic title="Contributed"
                  prefix={<Icon type="team" />}
                  value={state.contributed}
                />
              </Col>
              <Col md={24} style={{ marginBottom: 60 }}>
                <Typography.Title level={4}>Lasts Contributed</Typography.Title>
                <List
                  className="ant-custom"
                  style={{maxHeight: 300, overflow: 'auto'}}
                  dataSource={logTrain}
                  renderItem={item => (
                    <List.Item>
                      <List.Item.Meta
                        avatar={<Avatar style={{ backgroundColor: getRandomInt()}}>{`${item.firstname[0]}${item.lastname[0]}`}</Avatar>}
                        style={{maxHeight: 300, overflow: 'auto'}}
                        title={`${item.firstname} ${item.lastname}`}
                        description={item.email}/>
                        <div>{moment(item.activityDate).fromNow()}</div>
                    </List.Item>
                  )}
                />
              </Col>
              <Col md={24} style={{ marginBottom: 60 }}>
                <Typography.Title level={4}>Labels statistic</Typography.Title>
                <Doughnut data={doughnutData} />
              </Col>
              <Col xs={24}>
                <Typography.Title level={4}>Activity model</Typography.Title>
                <Line data={lineData} />
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </UserLayout>
  )
}

ModelStats.getInitialProps = async ({apiUrl, token, query}) => {
  const id = query.id
  const modelApi = `${apiUrl}/model/${id}`

  try {
    const model = await axios({
      method: "GET",
      url: modelApi,
      headers: {authorization: token}
    }).then(res => res.data)

    const stats = await axios({
      method: "GET",
      url: `${modelApi}/stats`,
      headers: {authorization: token}
    }).then(res => res.data)

    const logTrain = await axios({
      method: "GET",
      url: `${modelApi}/stats/train`,
      headers: {authorization: token}
    }).then(res => res.data)

    const logLabel = await axios({
      method: "GET",
      url: `${modelApi}/stats/label`,
      headers: {authorization: token}
    }).then(res => res.data)


    const logMonth = await axios({
      method: "GET",
      url: `${modelApi}/stats/month`,
      headers: {authorization: token}
    }).then(res => res.data)

    
    return {model, stats, logTrain, logLabel, logMonth}
  } catch (error) {
    return {errorCode: error.response.status}
  }
}

export default withAuthSync(ModelStats)