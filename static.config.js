import React, { Component } from 'react'
// import axios from 'axios'
import flush from 'styled-jsx/server'

export default {
  getRoutes: () => [
    {
      path: '/',
      component: 'src/containers/Home',
    },
  ],
  renderToHtml: (render, Comp, meta) => {
    const html = render(<Comp />)
    const styles = flush()
    meta.styleTags = styles
    return html
  },
  Document: class CustomHtml extends Component {
    render () {
      const {
        Html, Head, Body, children, renderMeta,
      } = this.props

      return (
        <Html>
          <Head>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            {renderMeta.styleTags}
            <link href="https://fonts.googleapis.com/css?family=Fjord+One" rel="stylesheet" />
          </Head>
          <Body>{children}</Body>
        </Html>
      )
    }
  },
}
