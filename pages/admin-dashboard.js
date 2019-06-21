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

  const compareDatasetLine = props => {
    let dataset = []
    let colorIndex = 0
    _.forIn(props, (value, key) => {
      dataset.push({
        label: key,
        backgroundColor: colorPallet[colorIndex],
        borderColor: colorPalletBorder[colorIndex],
        borderCapStyle: 'butt',
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBackgroundColor: '#fff',
        data: _.values(value)
      })
      colorIndex++
    })
    return dataset
  }

  const logAnno = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Des'],
    datasets: compareDatasetLine(props.stats.sortAnnoByMonth)
  }

  const logUser = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Des'],
    datasets: compareDatasetLine(props.stats.sortUserByMonth)
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
                <Statistic title="Model" value={props.stats.countModel} />
              </Card>
            </Col>
            <Col md={12} style={{marginBottom: 24}}>
              <Card>
                <Statistic title="Label" value={props.stats.countLabel} />
              </Card>  
            </Col>
            <Col md={12} style={{marginBottom: 24}}>
              <Card>
                <Statistic title="User" value={props.stats.countUser} />
              </Card>
            </Col>
            <Col md={12} style={{marginBottom: 24}}>
              <Card>
                <Statistic title="Source" value={props.stats.countSource} />
              </Card>
            </Col>
            <Col md={12} style={{marginBottom: 24}}>
              <Card>
                <Statistic title="Source Used" value={props.stats.countSourceUsed} />
              </Card>
            </Col>
            <Col md={12} style={{marginBottom: 24}}>
              <Card>
                <Statistic title="Training Verified" value={props.stats.countAnnoVerify} />
              </Card>
            </Col>
            <Col md={12} style={{marginBottom: 24}}>
              <Card>
                <Statistic title="Training Unverified" value={props.stats.countAnnoUnverify} />
              </Card>
            </Col>
            <Col md={24} style={{marginBottom: 24}}>
              <Card>
                <Card.Meta title="Top user" style={{marginBottom: 16}}/>
                <List
                  itemLayout="horizontal"
                  dataSource={props.stats.countUserTrain}
                  renderItem={(item, key) => (
                    <List.Item key={item.id}>
                      <List.Item.Meta
                        avatar={<Avatar style={{backgroundColor: colorPallet[key]}}>{[item.firstname[0], item.lastname[0]].join("")}</Avatar>}
                        title={[item.firstname, item.lastname].join(" ")}
                        description={item.email}
                      />
                      <div>{item.countTrain} Contributed</div>
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
                  dataSource={props.stats.orderModelTrain}
                  renderItem={(item, key) => (
                    <List.Item key={item.id}>
                      <List.Item.Meta
                        avatar={<Avatar src={item.avatar.path}/>}
                        title={item.name}
                        description={
                          <Tag 
                          color={item.annotator !== 'extractor' ? colorPallet[0] : colorPallet[1]}>
                          {item.annotator}
                          </Tag>
                        }
                      />
                      <div>{`${item.countTrain} Training`}</div>
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
  const apiStats = `${apiUrl}/admin/stats`

  const fetchStats = () => {
    return axios({
      method: 'GET',
      url: apiStats,
      headers: {authorization: token}
    })
  }

  const [stats] = await axios.all([fetchStats()])

  return {
    stats: stats.data
  }
}

export default withAuthSync(AdminDashboard, 1)
