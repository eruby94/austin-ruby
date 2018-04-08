import React, { Component } from 'react'
import flush from 'styled-jsx/server'
import { request } from 'graphql-request'

const GRAPHCMS_ENDPOINT = 'https://api.graphcms.com/simple/v1/austinruby'

const query = `{
  allPosts(orderBy: order_ASC) {
    title
    href
    image {
      url
    }
  }
  About(id:"cjfly8irs773f0128t6cxy1lu") {
    avatarImage {
      url
      alt
    }
    paragraphs
  }
}`

export default {
  getRoutes: async () => {
    const { allPosts, About } = await request(GRAPHCMS_ENDPOINT, query)
    return [
      {
        path: '/',
        component: 'src/containers/Home',
        getData: () => ({
          About,
          allPosts,
        }),
      },
      {
        path: '/work',
        component: 'src/containers/Work',
        getData: () => ({
          allPosts,
        }),
      },
      {
        path: '/contact',
        component: 'src/containers/Contact',
      },
    ]
  },
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
            <title>Austin Ruby</title>
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
