import React, { Component } from 'react'
import { RouteData } from 'react-static'
import Posts from '../components/Work/index'

class Work extends Component {
  render () {
    return (
      <RouteData render={({ allPosts, page }) => (
        <div>
          <h1>{page.title}</h1>
          <Posts posts={allPosts} />
          <style jsx>{`
            h1 {
              padding-top: 2rem;
              text-align: center;
            }
          `}</style>
        </div>
      )} />
    )
  }
}

export default Work
