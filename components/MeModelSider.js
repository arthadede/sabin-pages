import React from 'react'
import {Menu} from 'antd'
import {Router} from '../routes'

const MenuItemGroup = Menu.ItemGroup;


function ModelSider({dataSource, current, ...rest}) {
  const handleMenu = n => Router.pushRoute(n.key)

  return (
    <Menu
      {...rest}
      onClick={handleMenu}
      selectedKeys={[current]}
      style={{minHeight: '100%'}}
      mode="inline"
    >
      <Menu.Item key={`/me/model/${dataSource.id}`}>Info</Menu.Item>
      <Menu.Item key={`/me/model/${dataSource.id}/stats`}>Stats</Menu.Item>
      <MenuItemGroup key="g2" title="Build">
        <Menu.Item key={`/me/model/${dataSource.id}/source`}>Source</Menu.Item>
        <Menu.Item key={`/me/model/${dataSource.id}/anno`}>Annotation</Menu.Item>
        <Menu.Item key={`/me/model/${dataSource.id}/train`}>Confirmation</Menu.Item>
      </MenuItemGroup>
    </Menu>
  )
}

export default ModelSider