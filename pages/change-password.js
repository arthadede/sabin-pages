import { Row, Col, Card, Form, Input, Button, Icon, message } from "antd";
import {Router} from '../routes'
import Head from 'next/head'
import axios from 'axios'

const containerProps = {
  style: {
    height: "inherit",
    display: 'flex',
    alignItems: "center",
    justifyContent: "center"
  }
}

function ChangePassword(props) {
  const { getFieldDecorator, getFieldValue } = props.form;


  const handleSubmit = e => {
    e.preventDefault()
    props.form.validateFields(async (err, values) => {
      if (!err) {
        try {
          const password = values.newPassword
          const response = await axios({
            method: "POST",
            url: `${props.apiUrl}/change-password/${props.clientToken}`,
            data: {password}
          })

          if (response.status === 200) {
            message.success("Password berhasil diubah.")
            Router.pushRoute("/login")
          }
        } catch (err) {
          switch (err.response.status) {
            case 400:
              message.error(err.response.data.message && err.response.statusText)
              break;
            case 500:
              message.error(err.response.statusText)
              break;
          }
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
        <title>Change Password - Sistem Anotasi Named Entity</title>
      </Head>
      <Row 
      type="flex"
      align="middle"
      justify="center"
    >
      <Card 
        title="Change Password"
        extra={<a onClick={() => Router.pushRoute("/")}>Back <Icon type="right"/></a>}
        style={{minWidth: 400}}>
        <Form onSubmit={handleSubmit}>
          <Form.Item>
            {getFieldDecorator('newPassword', {
              rules: [
                {required: true, message: `This field is required.`},
                {min: 6, message: `Minimum length is 6 characters.`},
                {max: 20, message: `Minimum length is 20 characters.`}
              ]
            })(<Input type="password" placeholder="New password"/>)}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('confirmPassword', {
              rules: [
                {required: true, message: 'Please input your confirm password!'},
                {validator: (rule, value, cb) => {
                  if (value !== getFieldValue('newPassword')) {
                    cb("Password doesn't match")
                  }
                  cb()
                }}
              ]
            })(<Input type="password" placeholder="Confirmation password"/>)}
          </Form.Item>
          <Form.Item style={{margin: 0, textAlign: "center"}}>
            <Button type="primary" htmlType="submit" block>
              Change password
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </Row>
    </div>
  )
}

ChangePassword.getInitialProps = async ({query, res}) => {
  const token = query.token
  if (!token) {
    process.browser ? Router.push('/') : res.redirect('/', 302).end()
  }
  
  return {
    clientToken: query.token
  }
}

const WrappedChangePassword = Form.create({name: "forget-password-form"})(ChangePassword)

export default WrappedChangePassword