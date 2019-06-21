import React from 'react'
import App, {Container} from 'next/app'
import NProgress from 'nprogress'
import routes, {Router} from '../routes'
import nextCookie from 'next-cookies'

Router.events.on('routeChangeStart', url => {
  console.log(`Loading: ${url}`)
  NProgress.start()
})
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

export default class SabinApp extends App {
  static async getInitialProps({Component, ctx}) {

    // const protocol = process.env.NODE_ENV === 'production' ? 'https' : 'http'
    const protocol = 'http'
    const baseUrl = process.browser ? `${protocol}://${window.location.host}`: `${protocol}://${ctx.req.hostname}`
    const apiUrl = process.env.API_HOST || `${protocol}://localhost:3000`
    const route = routes.match(ctx.asPath)
    const {token} = nextCookie(ctx)

    ctx.apiUrl = apiUrl
    ctx.route = route
    ctx.token = token
    const pageProps = Component.getInitialProps && (await Component.getInitialProps(ctx))

    return {...pageProps, apiUrl, route, token, baseUrl}
  }

  render() {
    const {Component, ...rest} = this.props

    return (
      <Container>
        <Component  {...rest}/>
      </Container>
    )
  }
}