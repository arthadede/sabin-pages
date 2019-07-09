import { Component } from 'react'
import {Router} from '../routes'
import nextCookie from 'next-cookies'
import cookie from 'js-cookie'
import jwt from 'jsonwebtoken'

export const login = async ({ token }) => {
  cookie.set('token', token)
  Router.pushRoute('/dashboard')
}

export const logout = () => {
  cookie.remove('token')
  // to support logging out from all windows
  Router.push('/')
}

// Gets the display name of a JSX component for dev tools
const getDisplayName = Component =>
  Component.displayName || Component.name || 'Component'

export const withAuthSync = (WrappedComponent, roleId) =>
class extends Component {
  static Layout = WrappedComponent.Layout
  static displayName = `withAuthSync(${getDisplayName(WrappedComponent)})`

  static async getInitialProps (ctx) {
    const token = auth(ctx, roleId)

    ctx.token = token
    const componentProps = WrappedComponent.getInitialProps && (await WrappedComponent.getInitialProps(ctx))

    return { ...componentProps, token }
  }


  render () {
    return <WrappedComponent {...this.props} />
  }
}

export const auth = (ctx, roleId) => {
  const token  = ctx.token

  const user = token && jwt.verify(token, 'SECRET')

  if (roleId !== undefined && user && user.roleId !== roleId) {
    if (ctx.req) {
      ctx.res.writeHead(302, { Location: '/login' })
      ctx.res.end()
      return
    }

    Router.push('/login')
  }

  if (ctx.req && !token) {
    ctx.res.writeHead(302, { Location: '/login' })
    ctx.res.end()
    return
  }

  // We already checked for server. This should only happen on client.
  if (!token) {
    Router.push('/login')
  }

  return token
}