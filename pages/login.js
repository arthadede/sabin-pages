import React, {useState} from 'react'
import Head from 'next/head'
import {Row, Card, Form, Input, Button, Icon, message} from "antd";
import {Router} from '../routes'
import axios from 'axios'
import {login} from '../utils/auth'

function LoginForm(props) {
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
            url: `${props.apiUrl}/login`,
            data: values
          })
  
          if (response.status === 200) {
            login({token: response.data})
          }
        } catch (error) {
          switch (error.response.status) {
            case 404:
              message.error('Invalid email or password.')
              break;
            case 400:
              message.error('Something wrong.')
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
        <title>Login - Sistem Anotasi Named Entity</title>
      </Head>
      <Row 
      type="flex"
      align="middle"
      justify="center"
    >
      <Card 
        title="Login" 
        extra={<a onClick={() => Router.pushRoute("/")}>Back <Icon type="right" /></a>}
        style={{minWidth: 400}}>
        <Form onSubmit={handleSubmit} style={{marginBottom: 8}}>
          <Form.Item>
            {getFieldDecorator('email', {
              rules: [
                {required: true, message: `This field is required.`},
                {type: 'email', message: `Please provide a valid email address.`}
              ]
            })(<Input placeholder="Email"/>)}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('password', {
              rules: [
                {required: true, message: `This field is required.`}
              ]
            })(<Input type="password" placeholder="Password"/>)}
          </Form.Item>
          <Form.Item style={{margin: 0, textAlign: "center"}}>
            <Button type="primary" htmlType="submit" loading={loading} block>
              Log in
            </Button>
          </Form.Item>
        </Form>
        <div style={{display: 'flex', flexDirection: 'column', textAlign: 'center'}}>
          <a onClick={() => Router.pushRoute("/forget-password")} style={{ paddingTop: 4, paddingBottom: 4}}>Forget your password?</a>
          <span style={{ paddingTop: 4, paddingBottom: 4}}>Don't have an account? <a onClick={() => Router.pushRoute("/register")}>Sign up</a></span>
        </div>
      </Card>
    </Row>
    </div>
  )
}

const WrappedLoginForm = Form.create({name: "login-form"})(LoginForm)

export default WrappedLoginForm