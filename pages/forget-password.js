import { Row, Col, Card, Form, Input, Button, Icon, message } from "antd";
import React, {useState} from 'react'
import {Router} from '../routes'
import Head from 'next/head'
import axios from 'axios'

function ChangePassword(props) {
  const { getFieldDecorator } = props.form;
  const [loading, setLoading] = useState(false)

  const handleSubmit = e => {
    e.preventDefault()
    props.form.validateFields(async (err, values) => {
      if (!err) {
        try {
          setLoading(true)
          const response = await axios({
            method: "POST",
            url: `${props.apiUrl}/forget-password`,
            data: values
          })
  
          if (response.status == 200) {
            message.success("Reset password account has been sent.")
            Router.pushRoute("/")
          }
        } catch (err) {
          switch (err.response.status) {
            case 404:
              message.error('No search results.')
              break;
            case 400:
              message.error(err.response.data.message && err.response.statusText)
              break;
          }
        } finally {
          setLoading(false)
        }
      }
    })
  }


  return (
    <div style={{
      height: "inherit",
      display: 'flex',
      alignItems: "center",
      justifyContent: "center"
    }}>
      <Head>
        <title>Forget Password - Sistem Anotasi Named Entity</title>
      </Head>
      <Row 
      type="flex"
      align="middle"
      justify="center"
    >
      <Card 
        title="Forget Password"
        extra={<a onClick={() => Router.pushRoute("/")}>Back <Icon type="right"/></a>}
        style={{minWidth: 400}}>
        <Form onSubmit={handleSubmit}>
          <Form.Item>
            {getFieldDecorator('email', {
              rules: [
                {required: true, message: `This field is required.`},
                {type: 'email', message: `Please provide a valid email address.`}
              ]
            })(<Input type="text" placeholder="Email"/>)}
          </Form.Item>
          <Form.Item style={{margin: 0, textAlign: "center"}}>
            <Button type="primary" htmlType="submit" loading={loading} block>
              Submit
            </Button>
            <span style={{ paddingTop: 4, paddingBottom: 4}}>Don't have an account? <a onClick={() => Router.pushRoute("/register")}>Sign up</a></span>
          </Form.Item>
        </Form>
      </Card>
    </Row>
    </div>
  )
}

ChangePassword.getInitialProps = ({query}) => {
  return {
    clientToken: query.token
  }
}

const WrappedChangePassword = Form.create({name: "forget-password-form"})(ChangePassword)

export default WrappedChangePassword