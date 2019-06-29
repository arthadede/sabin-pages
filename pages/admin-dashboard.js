import React from 'react'
import AdminLayout from "../components/AdminLayout";
import Head from 'next/head'
import _ from 'lodash'
import axios from 'axios'
import {withAuthSync} from '../utils/auth'
import {Row, Col, Card, Statistic, List, Avatar, Tag} from 'antd'
import {Bar, Polar, Line } from 'react-chartjs-2'

const colorPallet = ['#36A2EBa1', '#FF6384', '#FFCE56a1', '#2ecc71a1', '#9b59b6a1', '#7ed6dfa1', '#686de0a1']
const colorPalletBorder = ['#36A2EBbf', '#FF6384bf', '#FFCE56bf', '#2ecc71bf', '#9b59b6bf', '#7ed6dfbf', '#686de0bf']
function AdminDashboard(props) {


  const logAnno = {
    labels: ['Jan', 'Febr', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Des'],
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
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Des'],
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
                  renderItem={(item, key) => (
                    <List.Item key={item.id}>
                      <List.Item.Meta
                        avatar={<Avatar style={{backgroundColor: item.avatar}}>{[item.firstname[0], item.lastname[0]].join("")}</Avatar>}
                        title={[item.firstname, item.lastname].join(" ")}
                        description={item.email}
                      />
                      <div>{item.sumTraining} Contributed</div>
                    </List.Item>
                  )}
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
                        title={item.name}
                        description={
                          <Tag 
                          color={item.annotator !== 'extractor' ? '#74b9ff' : '#ff7675'}>
                          {item.annotator}
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
