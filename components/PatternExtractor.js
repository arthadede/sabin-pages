import {Typography, Button, Drawer, Row, Col, message} from 'antd'
import React, {useState, useEffect} from 'react'
import Highlight from 'react-highlight'
import _ from 'lodash'


function PatternExtractor(props) {
  const [windowSize, setWindowSize] = useState(null)
  const [drawer, setDrawer] = useState(false)
  const [selected, setSelected] = useState(null)
  const [selectedNested, setSelectedNested] = useState({})


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
    const label = _(props.dataLabel).find(item => item.name === data.label)
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const scrollLeft = document.documentElement.scrollLeft || document.body.scrollLeft;
    element.className = `${classname} annotation-script-item annotation-script-item-mark`
    element.style.position = 'absolute'
    element.style.top = `${pos.top + scrollTop}px`
    element.style.left = `${pos.left + scrollLeft}px`
    element.style.width = `${pos.width}px`
    element.style.height = `${pos.height}px`
    element.style.background = data.hasOwnProperty('label') ? (label.color + '70') : '#e6f7ff'
    element.style.zIndex = zIndex
    document.body.appendChild(element)
  }
  
  const createLabelItem = (pos, data, zIndex, classname) => {
    let element = document.createElement('span')
    const label = _(props.dataLabel).find(item => item.name === data.label)
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const scrollLeft = document.documentElement.scrollLeft || document.body.scrollLeft;
    element.className = `${classname} annotation-script-item annotation-script-item-label`
    element.style.position = 'absolute'
    element.style.color = '#fff'
    element.style.background = label.color
    element.style.padding = '0px 6px'
    element.style.top = `${(pos.top + scrollTop) - 15}px`
    element.style.left = `${pos.left+ scrollLeft}px`
    element.innerText = data.label
    element.style.zIndex = zIndex
    element.style.cursor = 'pointer'
    element.addEventListener('click', e => handleRemoveLabel(data))
    document.body.appendChild(element)
  }

  const handleRemoveLabel = data => {
    if (selected) {
      setSelectedNested(state => {
        let result = {} 

        for (const key in state) {
          if (state[key].startOffset !== data.startOffset) {
            if (state[key].endOffset !== data.endOffset) {
              result[key] = state[key]
            }
          }
        }
        return result
      })
    } else {
      let result = _.filter(props.value, item => {
        if (data.startOffset >= item.startOffset && data.endOffset <= item.endOffset) {
          return false
        }

        return true
      })

      props.onChange(result)
    }
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

    if (current === el) {
      handleAddSource()
    }
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
        _.forEach(pos, n => createScriptItem(n, item, zIndex[0], 'annotation-contianer'))
      } else _.forEach(pos, n => createScriptItem(n, item, zIndex[0], 'annotation-contianer'))

      item.script && recursiveDefineLabel(item.script, node, zIndex)
    })
  }

  useEffect(() => {
    let node = document.getElementById("annotation-script").childNodes[0];

    selected
    ? recursiveDefineLabel([...props.value, selected], node, [5, 100])
    : recursiveDefineLabel(props.value, node, [5, 100])

    return () => {
      let elementScriptItem = document.querySelectorAll('.annotation-script-item')
      elementScriptItem.forEach(n => document.body.removeChild(n))
    }
  }, [props.value, selected, windowSize])

  useEffect(() => {
    let node = document.getElementById("annotation-script-drawer");

    if (node) {
      let pos, range
      let elementScript = node.childNodes[0]
  
      for (const item in selectedNested) {
        if (selectedNested.hasOwnProperty(item) && elementScript) {
          range = document.createRange();
          range.setStart(elementScript, selectedNested[item].startOffset);
          range.setEnd(elementScript, selectedNested[item].endOffset);
          pos = range.getClientRects()
  
          createLabelItem(pos[0], selectedNested[item], 1500, 'annotation-drawer')
          _.forEach(pos, n => createScriptItem(n, selectedNested[item], 1000, 'annotation-drawer'))
        }
      }
  
      return () => {
        let elementScriptItem = document.querySelectorAll('.annotation-drawer.annotation-script-item')
        elementScriptItem.forEach(n => document.body.removeChild(n))
      }
    }
  }, [selectedNested, windowSize])

  const handleAddSource = () => {
    if (window.getSelection().anchorNode !== null) {
      if (window.getSelection().anchorNode.wholeText === props.dataSource) {
        let pos = window.getSelection().getRangeAt(0)
        if (pos.startOffset !== pos.endOffset) {
          setDrawer(true)
          setSelected({
            startOffset: pos.startOffset, 
            endOffset: (pos.endOffset - pos.startOffset) + pos.startOffset, 
            // color: '#bae7ff',
            // text: props.dataSource.substr(pos.startOffset, pos.endOffset - pos.startOffset),
          })
        }
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
        let pos = window.getSelection().getRangeAt(0)
        setSelectedNested(state => ({
          ...state,
          [label.name]: {
            startOffset: pos.startOffset, 
            endOffset: pos.endOffset, 
            label: label.name,
            // color: label.color,
            // text: current.substr(pos.startOffset, pos.endOffset),
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
    if (Object.keys(selectedNested).length === 0) {
      message.warning("Label is not defined.")
      return
    }

    // Konversi dari obj key ke object array
    const convert = _.values(selectedNested)
    const script = _.map(convert, item => ({
      ...item,
      startOffset: selected.startOffset + item.startOffset,
      endOffset: selected.startOffset + item.endOffset,
    }))

    const transform = { ...selected, script }

    props.onChange(state => [
      ...state,
      transform
    ])

    setDrawer(false)
    setSelected(null)
    setSelectedNested({})
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
        placement="left"
        visible={drawer}
        closable={false}
        maskClosable={false}>
        <Row>
          <Col md={24}>
            <Typography.Title 
              strong
              level={4} 
              style={{marginBottom: 16}} 
              >
                Select text and press the label for annotation
            </Typography.Title>
            <div
              style={{
                minHeight: 300,
                border: '1px dashed #d2d2d2',
                padding: '20px 16px',
                marginBottom: 16
              }}>
              <div style={{paddingBottom: 16}}>
                {props.dataLabel.map((item, index) => (
                  <Button 
                    key={index}
                    className="ant-custom ant-tag"
                    style={{background: item.color, color: '#fff'}}
                    onClick={() => handleAddScript(item)}>{item.name}</Button>
                ))}
              </div>
              <div id="annotation-script-drawer">
                {selected && props.dataSource.substr(selected.startOffset, selected.endOffset - selected.startOffset)}
              </div>
            </div>
          </Col>
          <Col md={24}>
            <Typography.Title level={4}>Result Annotation:</Typography.Title>
            <Highlight style={{height: 300}}>
              {JSON.stringify(selectedNested, null, 2)}
            </Highlight>
          </Col>
          <Col md={24}>
            <Button 
              block 
              type="primary" 
              style={{marginBottom: 16}}
              onClick={handleSubmitDrawer} 
              disabled={_.keys(selectedNested).length === 0}
              >
                Submit
            </Button>
            <Button 
              type="default" 
              block 
              style={{marginBottom: 16}}
              onClick={() => {
                setDrawer(false)
                setTimeout(() => {
                  setSelected(null)
                  setSelectedNested({})
                }, 500)
              }}
              >
                Cancel
            </Button>
          </Col>
        </Row>
      </Drawer>
    </div>
  )
}

export default PatternExtractor
