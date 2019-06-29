import _ from 'lodash'
import React from 'react'
import {Typography, Tag} from 'antd'

const colorUI =  ['#36A2EB', '#FFCE56', '#2ecc71', '#9b59b6', '#7ed6df', '#686de0']

function Classifier(props) {
  const dataLabel = props.dataLabel.map((item) => ({
    selected: props.value.find(n => n === item) ? true : false,
    text: item
  }))

  const handleSet = text => {
    if (_.includes(props.value, text)) {
      props.onChange(state => 
        props.value.filter(item => item !== text)
      )
    } else {
      props.onChange(state => [
        ...state,
        text
      ])
    }
  }

  return (
    <div style={{
      minHeight: 500,
      display: 'flex',
      flexDirection: 'column'
    }}>
      <div style={{marginBottom: 16}}>
        <Typography.Text type="secondary" style={{marginRight: 16}}>Tags: </Typography.Text>
        {dataLabel.map((item, index) => (
          <Tag 
            key={item.text}
            className="ant-custom"
            color={item.selected ? colorUI[index] : 'blue'}
            style={{
              marginBottom: 8,
              cursor: 'pointer'
            }}
            onClick={() => handleSet(item.text)}>{item.text}</Tag>
        ))}
      </div>
      <div>
        <Typography.Paragraph id="annotation-script">
          {props.dataSource}
        </Typography.Paragraph>
      </div>
    </div>
  )
}

export default Classifier
