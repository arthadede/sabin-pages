import _ from 'lodash'
import {Typography, Button, Affix, message} from 'antd'
import React, {useState, useEffect} from 'react'

function Extractor(props) {
  const [windowSize, setWindowSize] = useState(null)

  const createScriptItem = (pos, data) => {
    const element = document.createElement('span')
    const label = _(props.dataLabel).find(item => item.name === data.label)
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const scrollLeft = document.documentElement.scrollLeft || document.body.scrollLeft;
    element.className = 'annotation-script-item annotation-script-item-mark'
    element.style.position = 'absolute'
    element.style.top = `${pos.top + scrollTop}px`
    element.style.left = `${pos.left + scrollLeft}px`
    element.style.width = `${pos.width}px`
    element.style.height = `${pos.height}px`
    element.style.background = data.hasOwnProperty('label') ? (label.color + '70') : '#e6f7ff'
    element.style.zIndex = 5
    document.body.appendChild(element)
  }
  
  const createLabelItem = (pos, data) => {
    let element = document.createElement('span')
    const label = _(props.dataLabel).find(item => item.name === data.label)
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const scrollLeft = document.documentElement.scrollLeft || document.body.scrollLeft;
    element.className = 'annotation-script-item annotation-script-item-label'
    element.style.position = 'absolute'
    element.style.color = '#fff'
    element.style.background = label.color
    element.style.padding = '0px 6px'
    element.style.top = `${(pos.top + scrollTop) - 15}px`
    element.style.left = `${pos.left+ scrollLeft}px`
    element.innerText = data.label
    element.style.zIndex = 25
    element.style.cursor = 'pointer'
    element.addEventListener('click', e => {
      props.onChange(state => 
        state.filter(item => 
          item.startOffset !== data.startOffset
          && item.endOffset !== data.endOffset
        )
      )
    })
    document.body.appendChild(element)
  }

  const handleResize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight
    })
  }
  
  useEffect(() => {
    let keyWork = []
      
    for (let i = 0; i < props.dataLabel.length; i++) { keyWork.push(49 + i) }

    window.addEventListener("resize", handleResize);
    window.addEventListener("keypress", e => {
      var key = e.which || e.keyCode;
      
      if (keyWork.includes(key)) {
        const idx = key - 49
        const labelSelected = props.dataLabel[idx]
        handleAddSource(labelSelected)
      }
    })


    return (() => {
      window.addEventListener("resize", null);
    })
  }, [])

  useEffect(() => {
    let elementScript = document.getElementById("annotation-script").childNodes[0];
    props.value.forEach(item => {
      let pos, range, color
      range = document.createRange();
      range.setStart(elementScript, item.startOffset);
      range.setEnd(elementScript, item.endOffset);
      pos = range.getClientRects()

      createLabelItem(pos[0], item)
      _.forEach(pos, n => {
        createScriptItem(n, item)
      })
    })

    return () => {
      let elementScriptItem = document.querySelectorAll('.annotation-script-item')
      elementScriptItem.forEach(n => document.body.removeChild(n))
    }
  }, [props.value, windowSize])

  const handleAddSource = item => {
    if (window.getSelection().anchorNode !== null && window.getSelection().anchorNode.wholeText === props.dataSource) {
      let pos = window.getSelection().getRangeAt(0)
      props.onChange(state => [
        ...state, 
        {
          startOffset: pos.startOffset, 
          endOffset: pos.endOffset, 
          label: item.name
        }
      ])
      window.getSelection().removeAllRanges()
    }
  }
  
  return (
    <div
      style={{minHeight: 500}}>
      <div style={{marginBottom: 16}}>
        <Affix offsetTop={10} style={{zIndex: 50}}>
          {props.dataLabel.map((item, index) => (
            <Button 
              key={index}
              className="ant-custom ant-tag"
              style={{
                marginBottom: 8,
                background: item.color,
                border: item.color,
                color: '#fff',
                cursor: 'pointer'
              }}
              onClick={() => handleAddSource(item)}>{item.name}</Button>
          ))}
        </Affix>
      </div>
      <div>
        <Typography.Paragraph 
          id="annotation-script">
          {props.dataSource}
        </Typography.Paragraph>
      </div>
    </div>
  )
}

export default Extractor
