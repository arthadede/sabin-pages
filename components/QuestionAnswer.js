import _ from 'lodash'
import React, {useState, useEffect} from 'react'
import {Typography, Row, Col, Input, Button, Icon} from 'antd'

const testImage = (url, callback, timeout) => {
  timeout = timeout || 5000;
  var timedOut = false, timer;
  var img = new Image();
  img.onerror = img.onabort = function() {
      if (!timedOut) {
          clearTimeout(timer);
          callback("error");
      }
  };
  img.onload = function() {
      if (!timedOut) {
          clearTimeout(timer);
          callback("success");
      }
  };
  img.src = url;
  timer = setTimeout(function() {
      timedOut = true;
      callback("timeout");
  }, timeout); 
}

function QuestionAnswer(props) {
  const [isImage, setIsImage] = useState(null)
  const [state, setState] = useState(props.dataSource.answer)
  
  testImage(props.dataSource.question, val => setIsImage(val))


  const ComponentQuestion = isImage 
    ? <img src={props.dataSource.question} style={{maxWidth: '100%'}} alt={props.dataSource.question}/>
    : <Typography.Paragraph>{props.dataSource.question}</Typography.Paragraph>

  const submitAnnotation = () => {
    const data = {
      question: props.dataSource.question,
      answer: state
    }
 
    props.onSubmit(data)
  }

  return (
    <>
      <div style={{
        minHeight: 500,
        display: 'flex',
        flexDirection: 'column'
      }}>
        <div>
          <Typography.Title level={4}>Question</Typography.Title>
          {ComponentQuestion}
        </div>
        <div style={{marginTop: 24}}>
          <Typography.Title level={4}>Answer</Typography.Title>
          <Input.TextArea 
            autosize={{minRows: 6}} 
            value={state}
            onChange={e => setState(e.target.value)}/>
        </div>
      </div>
      <div 
        style={{marginTop: 24}}
        className="d-flex 
        align-items-center 
        justify-content-flex-end">
        <Button
          icon="reload"
          onClick={props.onSkip}
          style={{marginLeft: 16}}>
        </Button>
        <Button
          type="primary"
          onClick={submitAnnotation}
          style={{marginLeft: 16}}>
          Confirm
        </Button>
      </div>
    </>
  )
}

export default QuestionAnswer
