import React from 'react'
import App, {Container} from 'next/app'
import NProgress from 'nprogress'
import routes, {Router} from '../routes'
import nextCookie from 'next-cookies'
import jwt from 'jsonwebtoken'


Router.events.on('routeChangeStart', url => {
  NProgress.start()
})
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

export default class SabinApp extends App {
  static async getInitialProps({Component, ctx}) {
    const apiUrl = process.env.API_HOST
    const route = routes.match(ctx.asPath)
    const {token} = nextCookie(ctx)
    const auth = token && jwt.verify(token, 'SECRET')

    ctx.apiUrl = apiUrl
    ctx.route = route
    ctx.token = token
    const pageProps = Component.getInitialProps && (await Component.getInitialProps(ctx))

    return {...pageProps, apiUrl, route, token, auth}
  }

  componentDidMount() {
    window.addEventListener('appinstalled', (evt) => { console.log('PWA installed') })

    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
    })
  }

  render() {
    const {Component, ...rest} = this.props

    return (
      <Container>
        <Component {...rest} />
      </Container>
    )
  }
}