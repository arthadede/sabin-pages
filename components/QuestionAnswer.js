import _ from "lodash";
import React, { useState, useEffect } from "react";
import { Typography, Row, Col, Input, Button } from "antd";
import { isImage as checkImage } from "../utils/checkImage";

function QuestionAnswer(props) {
  const [isImage, setIsImage] = useState(null);
  const [state, setState] = useState(props.dataSource.answer);

  useEffect(() => {
    checkImage(props.dataSource.question)
      .then(() => setIsImage(true))
      .catch(() => setIsImage(false));

    return () => {};
  }, []);

  const submitAnnotation = () => {
    const data = {
      question: props.dataSource.question,
      answer: state
    };

    props.onSubmit(data);
  };

  return (
    <>
      <div
        style={{
          minHeight: 500,
          display: "flex",
          flexDirection: "column"
        }}
      >
        <div>
          <Typography.Title level={4}>Question</Typography.Title>
          {isImage && (
            <img
              src={props.dataSource.question}
              style={{ maxWidth: "100%" }}
              alt={props.dataSource.question}
            />
          )}
          {!isImage && (
            <Typography.Paragraph>
              {props.dataSource.question}
            </Typography.Paragraph>
          )}
        </div>
        <div style={{ marginTop: 24 }}>
          <Typography.Title level={4}>Answer</Typography.Title>
          <Input.TextArea
            autosize={{ minRows: 6 }}
            value={state}
            onChange={e => setState(e.target.value)}
          />
        </div>
      </div>
      <div
        style={{ marginTop: 24 }}
        className="d-flex 
        align-items-center 
        justify-content-flex-end"
      >
        <Button
          icon="reload"
          onClick={props.onSkip}
          style={{ marginLeft: 16 }}
        ></Button>
        <Button
          type="primary"
          onClick={submitAnnotation}
          style={{ marginLeft: 16 }}
        >
          Confirm
        </Button>
      </div>
    </>
  );
}

export default QuestionAnswer;
