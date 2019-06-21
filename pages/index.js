import React from 'react'
import Head from 'next/head'
import {Row, Col, Icon} from 'antd'
import LandingLayout from "../components/LandingLayout";
import {Router} from '../routes'


const LandingPage = (props) => {

  return (
    <LandingLayout {...props}>
      <Head>
        <title>Sistem Anotasi Named Entity</title>
      </Head>
      <Row type="flex" className="mb-3">
        <Col xs={24} md={8}>
          <div className="mb-3">
            <h3>Create new value from your data</h3>
            <p className="h4 text-secondary">Bring your data to train for your models with this tools you already love.</p>
          </div>
          <a onClick={() => Router.pushRoute('/register')} className="btn-link">Register Now</a>
        </Col>
        <Col xs={24} md={16}>
          <div className="img-landing">
            <img src="https://monkeylearn.com/static/img/img_video.png" alt=""/>
          </div>
        </Col>
      </Row>
      <div className="px-4">
        <h2 className="text-center">Train Fitures</h2>
        <Row type="flex" justify="center" gutter={32}>
          <Col xs={24} md={8}>
            <div className="card">
              <div className="d-flex flex-row align-items-center mb-5">
                <img className="icon block-inline" src="/static/icon/classifier.png"/>
                <h4 className="ml-4 mb-0 block-inline">Classifier</h4>
              </div>
              <p className="h5">Each sentence or paragraph have value can define with existing label in model your model.</p>
            </div>
          </Col>
          <Col xs={24} md={8}>
            <div className="card">
              <div className="d-flex flex-row align-items-center mb-5">
                <img className="icon block-inline" src="/static/icon/extractor.png"/>
                <h4 className="ml-4 mb-0 block-inline">Extractor</h4>
              </div>
              <p className="h5">Each word on your sentence or source which have different value can define with that for distinguish the label.</p>
            </div>
          </Col>
        </Row>
      </div>
      <div className="px-4">
        <h2 className="text-center">Model Features</h2>
        <Row gutter={32}>
          <Col xs={24} md={8}>
            <div className="card">
              <div className="d-flex flex-row align-items-center mb-5">
                <Icon className="icon" type="setting" theme="filled" style={{ fontSize: '19px', color: '#2ba35e' }}/>
                <h4 className="ml-4 mb-0 block-inline">Model Control</h4>
              </div>
              <p className="h5">If you want they see your model set to public, that make they can see your model otherwise set to private.</p>
            </div>
          </Col>
          <Col xs={24} md={8}>
            <div className="card">
              <div className="d-flex flex-row align-items-center mb-5">
                <Icon className="icon" type="area-chart" style={{ fontSize: '19px', color: '#ff5b4a' }}/>
                <h4 className="ml-4 mb-0 block-inline">Model Stats</h4>
              </div>
              <p className="h5">Each your model have a Statistics for help your to monitoring activities model, train, and contributing user.</p>
            </div>
          </Col>
          <Col xs={24} md={8}>
            <div className="card">
              <div className="d-flex flex-row align-items-center mb-5">
                <Icon className="icon" type="upload" style={{ fontSize: '19px', color: '#009aff' }}/>
                <h4 className="ml-4 mb-0 block-inline">File Upload</h4>
              </div>
              <p className="h5">To make easy add source, we give fiture file uploud if you have source in format file like a <code>xls</code> or <code>xlsx</code>.</p>
            </div>
          </Col>
        </Row>
      </div>
    </LandingLayout>
  )
}

export default LandingPage
