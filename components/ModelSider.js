import React from 'react'
import {Menu} from 'antd'
import {Router} from '../routes'

const MenuItemGroup = Menu.ItemGroup;


function ModelSider({current, id, config, ...rest}) {
  const handleMenu = n => Router.pushRoute(n.key)
  return (
    <Menu
      {...rest}
      onClick={handleMenu}
      selectedKeys={[current]}
      style={{minHeight: '100%'}}
      mode="inline"
    >
      <Menu.Item key={`/model/${id}`}>Info</Menu.Item>
      {config.UIStats && <Menu.Item key={`/model/${id}/stats`}>Stats</Menu.Item>}
      {config.UIAnnotation && (
        <MenuItemGroup key="g2" title="Build">
          <Menu.Item key={`/model/${id}/anno`}>Annotation</Menu.Item>
          <Menu.Item key={`/model/${id}/train`}>Confirmation</Menu.Item>
        </MenuItemGroup>
      )}
    </Menu>
  )
}

export default ModelSider