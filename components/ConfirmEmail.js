import React from 'react'
import { Row, Card, Typography } from 'antd';
import {Router} from '../routes'

function ConfirmEmail(props) {
  return (
    <div style={{
      height: "inherit",
      display: 'flex',
      alignItems: "center",
      justifyContent: "center"
    }}>
      <Row 
        type="flex"
        align="middle"
        justify="center">
        <Card 
          style={{minWidth: 400}}>
          <Card.Meta 
            title="Check your email!"
            description={(
              <>
                <Typography.Paragraph>We've emailed a special link to <b>{props.email}</b>. Click the link to confirm your address and get started.</Typography.Paragraph>
                <a onClick={() => Router.pushRoute('/')}>Go To Homepage</a>
              </>
            )}/>
        </Card>
      </Row>
    </div>
  )
}

export default ConfirmEmail
