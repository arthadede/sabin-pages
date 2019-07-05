import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <meta name="theme-color" content="#0984e3" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" type="image/x-icon" href="/static/favicon.ico" />
          <link rel="manifest" href="/static/manifest.json" />
          <link rel="stylesheet" type="text/css" href="/static/nprogress.css"/>
          <link rel="stylesheet" type="text/css" href="/static/vs2015.css"/>
          <link rel="stylesheet" href="/static/antd.min.css"/>
          <link rel="stylesheet/less" type="text/css" href="/static/sabin.less"/>
          <style>{`#__next { height: inherit; }`}</style>
        </Head>
        <body>
          <Main />
          <NextScript />
          <script src="//cdnjs.cloudflare.com/ajax/libs/less.js/3.9.0/less.min.js" ></script>
        </body>
      </Html>
    )
  }
}