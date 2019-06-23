import React, { Component } from 'react'
import { Row, Card, Typography, message } from 'antd';
import {Router} from '../routes'
import axios from 'axios'

export class ConfirmAccount extends Component {

  componentDidMount() {
    axios({
      method: "POST",
      url: `${this.props.apiUrl}/confirm-account`,
      data: {token: this.props.route.query.token}
    })
    .then(res => {
      if (res.status === 200) {
        Router.pushRoute('/login')
      }
    })
    .catch(err => {
      Router.pushRoute('/')
    })
  }

  render() {
    return null
  }
}

export default ConfirmAccount

