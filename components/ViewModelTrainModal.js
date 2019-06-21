import React from 'react'
import { Modal, Typography } from 'antd';

function ViewModelTrainModal(props) {
  if (!props.dataSource) return null
  return (
    <Modal 
      visible={props.visible}
      onCancel={props.onCancel}>
      <Typography.Paragraph>{props.dataSource.text}</Typography.Paragraph>
    </Modal>
  )
}

export default ViewModelTrainModal
