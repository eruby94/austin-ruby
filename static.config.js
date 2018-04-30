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
    category
  }
  postCategories: __type(name: "Category") {
    enumValues{
      name
    }
  }
  About(id:"cjfly8irs773f0128t6cxy1lu") {
    avatarImage {
      url
      alt
    }
    paragraphs
  }
  Work(id:"cjfsc6cq8ghz30107zcv9ercw") {
    title
    bodyCopy
  }
}`

export default {
  getRoutes: async () => {
    const {
      allPosts, postCategories, About, Work,
    } = await request(GRAPHCMS_ENDPOINT, query)
    const categorizedPosts = postCategories.enumValues.map(category => ({
      name: category.name,
      posts: [],
    }))
    allPosts.forEach(post => {
      categorizedPosts.forEach(category => {
        if (post.category === category.name) {
          category.posts.push(post)
        }
      })
    })
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
          page: Work,
          categorizedPosts,
        }),
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
            <meta name="description" content="I'm a freelance writer living in Brooklyn -- the more I write, the more I'm inspired to keep writing. I've helped create content for startups, manage a personal blog, and contribute regularly at OurBKSocial. Make sure to check out some of my work and connect with me on social media." />
            {renderMeta.styleTags}
            <link href="https://fonts.googleapis.com/css?family=Fjord+One" rel="stylesheet" />
            <link rel="shortcut icon" href="/favicon.ico" />
            <link
              rel="stylesheet"
              href="https://use.fontawesome.com/releases/v5.0.10/css/all.css"
              integrity="sha384-+d0P83n9kaQMCwj8F4RJB66tzIwOKmrdb46+porD/OvrJ+37WqIM7UoBtwHO6Nlg"
              crossOrigin="anonymous"
            />
          </Head>
          <Body>{children}</Body>
        </Html>
      )
    }
  },
}
