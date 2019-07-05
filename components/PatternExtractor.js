import {Typography, Button, Drawer, Row, Col, message} from 'antd'
import React, {useState, useEffect} from 'react'
import Highlight from 'react-highlight'
import _ from 'lodash'


function PatternExtractor(props) {
  const [windowSize, setWindowSize] = useState(null)
  const [selected, setSelected] = useState(null)
  const [onProcess, setOnProcess] = useState({})


  useEffect(() => {
    window.addEventListener("resize", handleResize);
    window.addEventListener("mouseup", handleOnKeyDown);
    
    return (() => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mouseup", handleOnKeyDown);
    })
  }, [])

  const createScriptItem = (pos, data, zIndex, classname) => {
    const element = document.createElement('span')
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const scrollLeft = document.documentElement.scrollLeft || document.body.scrollLeft;
    element.className = `${classname} annotation-script-item annotation-script-item-mark`
    element.style.position = 'absolute'
    element.style.top = `${pos.top + scrollTop}px`
    element.style.left = `${pos.left + scrollLeft}px`
    element.style.width = `${pos.width}px`
    element.style.height = `${pos.height}px`
    element.style.background = data.color
    element.style.zIndex = zIndex
    document.body.appendChild(element)
  }
  
  const createLabelItem = (pos, data, zIndex, classname) => {
    let element = document.createElement('span')
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const scrollLeft = document.documentElement.scrollLeft || document.body.scrollLeft;
    element.className = `${classname} annotation-script-item annotation-script-item-label`
    element.style.position = 'absolute'
    element.style.color = '#fff'
    element.style.background = data.color
    element.style.padding = '0px 6px'
    element.style.top = `${(pos.top + scrollTop) - 15}px`
    element.style.left = `${pos.left+ scrollLeft}px`
    element.innerText = data.label
    element.style.zIndex = zIndex
    element.style.cursor = 'pointer'
    element.addEventListener('click', e => props.onChange(state => state.filter(item => item.startOffset !== data.startOffset && item.endOffset !== data.endOffset)))
    document.body.appendChild(element)
  }

  const handleResize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight
    })
  }

  const handleOnKeyDown = e => {
    const current = e.target.childNodes[0]
    const el = document.getElementById("annotation-script").childNodes[0];

    if (current === el) handleAddSource()
  }

  const recursiveDefineLabel = (data, node, zIndex) => {
    _.forEach(data, item => {
      let pos, range
      range = document.createRange();
      range.setStart(node, item.startOffset);
      range.setEnd(node, item.endOffset);
      pos = range.getClientRects()

      if (item.label) {
        createLabelItem(pos[0], item, zIndex[1])
        _.forEach(pos, n => createScriptItem(n, {color: `${item.color}a1`}, zIndex[0], 'annotation-contianer'))
      } else _.forEach(pos, n => createScriptItem(n, {color: item.color}, zIndex[0], 'annotation-contianer'))

      item.script && recursiveDefineLabel(item.script, node, zIndex)
    })
  }

  useEffect(() => {
    let node = document.getElementById("annotation-script").childNodes[0];

    recursiveDefineLabel(props.value, node, [5, 100])

    return () => {
      let elementScriptItem = document.querySelectorAll('.annotation-script-item')
      elementScriptItem.forEach(n => document.body.removeChild(n))
    }
  }, [props.value, windowSize])

  useEffect(() => {
    let node = document.getElementById("annotation-script-drawer");

    if (node) {
      let pos, range
      let elementScript = node.childNodes[0]
  
      for (const item in onProcess) {
        if (onProcess.hasOwnProperty(item) && elementScript) {
          range = document.createRange();
          range.setStart(elementScript, onProcess[item].startOffset);
          range.setEnd(elementScript, onProcess[item].endOffset);
          pos = range.getClientRects()
  
          createLabelItem(pos[0], onProcess[item], 1500, 'annotation-drawer')
          _.forEach(pos, n => createScriptItem(n, {color: `${onProcess[item].color}a1`}, 1000, 'annotation-drawer'))
        }
      }
  
      return () => {
        let elementScriptItem = document.querySelectorAll('.annotation-drawer.annotation-script-item')
        elementScriptItem.forEach(n => document.body.removeChild(n))
      }
    }
  }, [onProcess, windowSize])

  const handleAddSource = () => {
    if (window.getSelection().anchorNode !== null) {
      if (window.getSelection().anchorNode.wholeText === props.dataSource) {
        let pos = window.getSelection().getRangeAt(0)
        setSelected({
          startOffset: pos.startOffset, 
          endOffset: (pos.endOffset - pos.startOffset) + pos.startOffset, 
          color: '#1e90ff3b',
          text: props.dataSource.substr(pos.startOffset, pos.endOffset - pos.startOffset),
        })
        window.getSelection().removeAllRanges()
      } else {
        message.warning("Element invalid.")
      }
    } else {
      message.warning("Please mark your text.")
    }
  }

  const handleAddScript = label => {
    
    const current = document.getElementById("annotation-script-drawer").childNodes[0].wholeText;
    
    if (window.getSelection().anchorNode !== null) {
      if (window.getSelection().anchorNode.wholeText === current) {
        console.log(window.getSelection().toString())
        let pos = window.getSelection().getRangeAt(0)
        setOnProcess(state => ({
          ...state,
          [label.name]: {
            startOffset: pos.startOffset, 
            endOffset: pos.endOffset, 
            color: label.color,
            label: label.name,
            text: current.substr(pos.startOffset, pos.endOffset),
          }
        }))
        window.getSelection().removeAllRanges()
      } else {
        message.warning("Element invalid.")
      }
    } else {
      message.warning("Please mark your text.")
    }
  }

  const handleSubmitDrawer = () => {
    if (Object.keys(onProcess).length === 0) {
      message.warning("Label is not defined.")
    }

    const convert = _.values(onProcess)
    const script = _.map(convert, item => ({
      ...item,
      startOffset: selected.startOffset + item.startOffset,
      endOffset: selected.startOffset + item.endOffset,
    }))

    const transform = {
      ...selected,
      script
    }

    props.onChange(state => [
      ...state,
      transform
    ])


    setSelected(null)
    setOnProcess({})
  }
  
  return (
    <div
      style={{minHeight: 500}}>
      <div>
        <Typography.Paragraph 
          id="annotation-script">
          {props.dataSource}
        </Typography.Paragraph>
      </div>
      <Drawer
        title="Pattern Extractor"
        width={700}
        placement="right"
        closable={false}
        onClose={() => {
          setSelected(null)
          setOnProcess({})
        }}
        visible={selected !== null}
      >
        <Row>
          <Col md={24}>
            <Typography.Text style={{marginBottom: 16, display: 'block'}} strong>Select text and press the label</Typography.Text>
            <div id="annotation-script-drawer">
              {selected && selected.text}
              {!selected && 'SANE TEXT'}
            </div>
            <div className="annotation-script-label">
              {props.dataLabel.map((item, index) => (
                <Button 
                  key={index}
                  className="ant-custom ant-tag"
                  style={{background: item.color, color: '#fff'}}
                  onClick={() => handleAddScript(item)}>{item.name}</Button>
              ))}
            </div>
          </Col>
          <Col md={24}>
            <Typography.Title level={4}>Result:</Typography.Title>
            <Highlight style={{height: 300}}>
              {JSON.stringify(onProcess, null, 2)}
            </Highlight>
          </Col>
          <Col md={24}>
            <Button type="primary" block onClick={handleSubmitDrawer} disabled={_.keys(onProcess).length === 0}>Submit</Button>
          </Col>
        </Row>
      </Drawer>
    </div>
  )
}

export default PatternExtractor
