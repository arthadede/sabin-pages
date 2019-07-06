import _ from 'lodash'
import axios from 'axios'
import React from 'react'
import Head from 'next/head'
import {Bar, Line } from 'react-chartjs-2'
import {withAuthSync} from '../utils/auth'
import {Row, Col, Card, Statistic, List, Avatar, Tag, Typography} from 'antd'
import AdminLayout from "../components/AdminLayout";


const initMonth = ['Jan', 'Febr', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Des']

function AdminDashboard(props) {
  const logAnno = {
    labels: initMonth,
    datasets: [
      {
        data: props.training.logTraining.values,
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
      },
    ],
  }

  const logUser = {
    labels: initMonth,
    datasets:  [
      {
        data: props.user.logUser.values,
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
      },
    ],
  }

  const transformAnnotator = annotator => {
    return annotator === 'classifier'
    ? {text: 'Classifier', color: '#3498db'}
    : annotator === 'extractor'
    ? {text: 'Extractor', color: '#f1c40f'}
    : {text: 'Pattern Extractor', color: '#e74c3c'}
  }


  return (
    <AdminLayout {...props}>
      <Card title="Dashboard" bordered={false}>
        <Head>
          <title>Admin Dashboard - Sistem Anotasi Named Entity</title>
        </Head>
        <Row gutter={16}>
          <Col md={10}>
            <Col md={12} style={{marginBottom: 24}}>
              <Card>
                <Statistic title="Model" value={props.model.countModel} />
              </Card>
            </Col>
            <Col md={12} style={{marginBottom: 24}}>
              <Card>
                <Statistic title="User" value={props.user.countUser} />
              </Card>
            </Col>
            <Col md={12} style={{marginBottom: 24}}>
              <Card>
                <Statistic title="Source" value={props.model.countSource} />
              </Card>
            </Col>
            <Col md={12} style={{marginBottom: 24}}>
              <Card>
                <Statistic title="Source Used" value={props.training.countTraining} />
              </Card>
            </Col>
            <Col md={12} style={{marginBottom: 24}}>
              <Card>
                <Statistic title="Training Verified" value={props.training.countTrainingVerified} />
              </Card>
            </Col>
            <Col md={12} style={{marginBottom: 24}}>
              <Card>
                <Statistic title="Training Unverified" value={props.training.countTrainingUnverified} />
              </Card>
            </Col>
            <Col md={24} style={{marginBottom: 24}}>
              <Card>
                <Card.Meta title="Top user" style={{marginBottom: 16}}/>
                <List
                  itemLayout="horizontal"
                  dataSource={props.user.fiveBestUserTraining}
                  renderItem={(item, key) => {
                    const fullName = [item.firstname, item.lastname].join(" ")
                    const avatar = [item.firstname[0], item.lastname[0]].join("")

                    return (
                      <List.Item key={item.id}>
                        <List.Item.Meta
                          avatar={<Avatar style={{backgroundColor: item.avatar}}>{avatar}</Avatar>}
                          title={<Typography.Text ellipsis strong>{fullName}</Typography.Text>}
                          description={item.email}
                        />
                        <div>{item.sumTraining} Contributed</div>
                      </List.Item>
                    )
                  }}
                />
              </Card>
            </Col>
            <Col md={24} style={{marginBottom: 24}}>
              <Card>
                <Card.Meta title="Top model" style={{marginBottom: 16}}/>
                <List
                  itemLayout="horizontal"
                  dataSource={props.model.fiveBestModelTraining}
                  renderItem={(item, key) => (
                    <List.Item key={item.id}>
                      <List.Item.Meta
                        avatar={<Avatar src={item.avatar.path}/>}
                        title={<Typography.Text ellipsis strong>{item.name}</Typography.Text>}
                        description={
                          <Tag color={transformAnnotator(item.annotator).color}>
                          {transformAnnotator(item.annotator).text}
                          </Tag>
                        }
                      />
                      <div>{`${item.sumTraining} Training`}</div>
                    </List.Item>
                  )}
                />
              </Card>
            </Col>
          </Col>
          <Col md={14}>
            <Col md={24} style={{marginBottom: 24}}>
              <Card>
                <Card.Meta title="Log Annotation" style={{marginBottom: 16}}/>
                <div><Line data={logAnno}/></div>
              </Card>
            </Col>
            <Col md={24} style={{marginBottom: 24}}>
              <Card>
                <Card.Meta title="Log User" style={{marginBottom: 16}}/>
                <div>
                  <Bar
                    data={logUser}
                    width={100}
                    height={390}
                    options={{
                      maintainAspectRatio: false
                    }}
                  />
                </div>
              </Card>
            </Col>
          </Col>
        </Row>
      </Card>
    </AdminLayout>
  )
}

AdminDashboard.getInitialProps = async ({apiUrl, token}) => {
  const apiModel = `${apiUrl}/admin/model/stats`
  const apiUser = `${apiUrl}/admin/user/stats`
  const apiTrain = `${apiUrl}/admin/training/stats`

  const fetchModelStats = () => {
    return axios({
      method: 'GET',
      url: apiModel,
      headers: {authorization: token}
    })
  }

  const fetchUserStats = () => {
    return axios({
      method: 'GET',
      url: apiUser,
      headers: {authorization: token}
    })
  }

  const fetchTrainingStats = () => {
    return axios({
      method: 'GET',
      url: apiTrain,
      headers: {authorization: token}
    })
  }

  const [model, user, training] = await axios.all([fetchModelStats(), fetchUserStats(), fetchTrainingStats()])

  return {
    model: model.data, 
    user: user.data, 
    training: training.data
  }
}

export default withAuthSync(AdminDashboard, 1)
