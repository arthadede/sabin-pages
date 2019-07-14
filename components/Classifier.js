import _ from 'lodash'
import React from 'react'
import {Typography, Tag, Affix} from 'antd'

function Classifier(props) {
  const dataLabel = props.dataLabel.map((item) => ({
    ...item,
    selected: props.value.find(n => n === item.name) ? true : false,
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
      <Affix offsetTop={10}>
        <div style={{marginBottom: 16, zIndex: 50}}>
          <Typography.Text type="secondary" style={{marginRight: 16}}>Tags: </Typography.Text>
          {dataLabel.map((item, index) => (
            <Tag 
              key={index} 
              className="ant-custom" 
              color={item.selected && item.color} 
              style={{marginBottom: 8, cursor: 'pointer'}}
              onClick={() => handleSet(item.name)}>
                {item.name}
              </Tag>
          ))}
        </div>
      </Affix>
      <div>
        <Typography.Paragraph id="annotation-script">
          {props.dataSource}
        </Typography.Paragraph>
      </div>
    </div>
  )
}

export default Classifier
