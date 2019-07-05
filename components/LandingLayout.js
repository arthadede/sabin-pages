import React from 'react'
import {Layout} from 'antd'
import {Router} from '../routes'
import {logout} from '../utils/auth'
const {Header, Content, Footer} = Layout


export default (props) => {
  
  const HeaderComponent = (
    <Header>
      <ul className="menu-items">
        {!props.token &&( <li className="item" onClick={() => Router.pushRoute('/login')}>
          <a className="item-btn">Log in</a>
        </li>)}
        {props.token && (
          <>
            <li className="item" onClick={() => Router.pushRoute('/dashboard')}><a>Dashboard</a></li>
            <li className="item" onClick={logout}><a className="item-btn">Log out</a></li>
          </>
        )}
      </ul>
    </Header>
  )

  return (
    <div className="wrapper">
      <Layout>
        {HeaderComponent}
        <Content>{props.children}</Content>
        <Footer>
          <div className="text-center">Sistem Anotasi Named Entity ©2019</div>
        </Footer>
      </Layout>
    </div>
  )
}