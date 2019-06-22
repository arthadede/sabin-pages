import React, {useState} from 'react'
import { Row, Col, Card, Form, Input, Button, Icon, message } from "antd";
import {Router} from '../routes'
import Head from 'next/head'
import axios from 'axios'

function RegisterForm(props) {
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
            url: `${props.apiUrl}/register`,
            data: values
          })
          
          if (response.status === 200) {
            message.success("You have successfully registered.")
            message.success("Please check your email.")
            Router.pushRoute("/login")
          }
        } catch (err) {
          console.log(err.response)
          switch (err.response.status) {
            case 400:
              message.error(err.response.data.message)
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
        <title>Register - Sistem Anotasi Named Entity</title>
      </Head>
      <Row 
      type="flex"
      align="middle"
      justify="center"
    >
      <Card 
        title="Register"
        extra={<a onClick={() => Router.pushRoute("/")}>Back <Icon type="right"/></a>}
        style={{minWidth: 400}}>
        <Form onSubmit={handleSubmit}>
          <Form.Item>
            {getFieldDecorator('firstname', {
              rules: [
                {required: true, message: `This field is required.`},
                {min: 4, message: `Minimum length is 4 characters.`},
                {max: 20, message: `Minimum length is 20 characters.`}
              ]
            })(<Input placeholder="First name"/>)}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('lastname', {
              rules: [
                {required: true, message: `This field is required.`},
                {min: 4, message: `Minimum length is 4 characters.`},
                {max: 20, message: `Minimum length is 20 characters.`}
              ]
            })(<Input placeholder="Last name"/>)}
          </Form.Item>
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
                {required: true, message: `This field is required.`},
                {min: 6, message: `Minimum length is 6 characters.`},
                {max: 20, message: `Minimum length is 20 characters.`}
              ]
            })(<Input type="password" placeholder="Password"/>)}
          </Form.Item>
          <Form.Item style={{margin: 0, textAlign: "center"}}>
            <Button type="primary" htmlType="submit" loading={loading} block>
              Register
            </Button>
            Already have an account? <a onClick={() => Router.pushRoute("/login")}>Sign in</a>
          </Form.Item>
        </Form>
      </Card>
    </Row>
    </div>
  )
}


const WrappedRegisterForm = Form.create({name: "register-form"})(RegisterForm)

export default WrappedRegisterForm