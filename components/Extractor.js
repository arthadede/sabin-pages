import _ from 'lodash'
import {Typography, Button, Affix, message} from 'antd'
import React, {useState, useEffect} from 'react'


const colorUI =  ['#36A2EB', '#FFCE56', '#2ecc71', '#9b59b6', '#7ed6df', '#686de0']

function Extractor(props) {
  const [windowSize, setWindowSize] = useState(null)
  const createScriptItem = (pos, data) => {
    const element = document.createElement('span')
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const scrollLeft = document.documentElement.scrollLeft || document.body.scrollLeft;
    element.className = 'annotation-script-item annotation-script-item-mark'
    element.style.position = 'absolute'
    element.style.top = `${pos.top + scrollTop}px`
    element.style.left = `${pos.left + scrollLeft}px`
    element.style.width = `${pos.width}px`
    element.style.height = `${pos.height}px`
    element.style.background = `${data.color}a1`
    element.style.zIndex = 5
    document.body.appendChild(element)
  }
  
  const createLabelItem = (pos, data) => {
    let element = document.createElement('span')
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const scrollLeft = document.documentElement.scrollLeft || document.body.scrollLeft;
    element.className = 'annotation-script-item annotation-script-item-label'
    element.style.position = 'absolute'
    element.style.color = '#fff'
    element.style.background = data.color
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
    window.addEventListener("resize", handleResize);
    
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

      color = colorUI[_.indexOf(props.dataLabel, item.label)]
      createLabelItem(pos[0], {...item, color})
      _.forEach(pos, n => {
        createScriptItem(n, {color})
      })
    })

    return () => {
      let elementScriptItem = document.querySelectorAll('.annotation-script-item')
      elementScriptItem.forEach(n => document.body.removeChild(n))
    }
  }, [props.value, windowSize])

  const handleAddSource = item => {
    if (window.getSelection().anchorNode !== null) {
      if (window.getSelection().anchorNode.wholeText === props.dataSource) {
        let pos = window.getSelection().getRangeAt(0)
        props.onChange(state => [
          ...state, 
          {
            startOffset: pos.startOffset, 
            endOffset: pos.endOffset, 
            label: item
          }
        ])
        window.getSelection().removeAllRanges()
      } else {
        message.warning("Text yang ditandai tidak valid.")
      }
    } else {
      message.warning("Tidak ada yang ditandai.")
    }
  }
  
  return (
    <div
      style={{minHeight: 500}}>
      <div style={{marginBottom: 16}}>
        <Affix offsetTop={10}>
          {props.dataLabel.map((item, index) => (
            <Button 
              key={item}
              className="ant-custom ant-tag"
              style={{
                marginBottom: 8,
                background: colorUI[index],
                border: colorUI[index],
                color: '#fff',
                cursor: 'pointer'
              }}
              onClick={() => handleAddSource(item)}>{item}</Button>
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
