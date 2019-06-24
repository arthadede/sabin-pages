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
          <link rel="icon" type="image/x-icon" href="/static/favicon.ico" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="utf-8" />
          <style>{`
            #__next {
              height: inherit;
            }
          `}</style>
          <link rel="stylesheet" type="text/css" href="/static/nprogress.css"/>
          <link rel="stylesheet" href="/static/antd.min.css"/>
          <link rel="stylesheet/less" type="text/css" href="/static/sabin.less"/>
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