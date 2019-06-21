import {Row, Col, Card, Button, Modal} from 'antd'
import React, {useState, useEffect} from 'react'
import Classifier from './Classifier';
import Extractor from './Extractor';

function Annotation(props) {
  const [source, setSource] = useState([
    {startOffset: 79, endOffset: 90, label: 'Positive'},
    {startOffset: 0, endOffset: 6, label: 'Negative'}
  ])
  const Annotator = props.annotator === 'classifier' ? Classifier : Extractor
  
  const handleOnSource = result => {
    setSource(result)
  }

  const handleSkip = () => {
    Modal.confirm({
      title: 'Confirm',
      content: 'Yakin untuk melewati',
      okText: '确认',
      cancelText: '取消',
    });
  }


  return (
    <Row gutter={16}>
      <Col md={16}>
        <Card 
          style={{marginBottom: 16}}
          title="Sources">
          <Annotator
            dataSource={props.dataSource}
            value={source}
            onChange={handleOnSource}
          />
        </Card>
        <div className="d-flex align-items-center justify-content-flex-end">
          <Button
            style={{marginLeft: 16}}
            onClick={handleSkip}>
            Lewati
          </Button>
          <Button
            style={{marginLeft: 16}} 
            type="primary">
            Confirm
          </Button>
        </div>
      </Col>
      <Col md={8}>
        <Card title="Labels">
          <Annotator.Label
            dataSource={props.dataLabel}
            value={source}
            onChange={handleOnSource}
          />
        </Card>
      </Col>
    </Row>
  )
}

export default Annotation
