import React, { Component } from 'react'
import { RouteData } from 'react-static'
import Posts from '../components/Work/index'

class Work extends Component {
  render () {
    return (
      <RouteData render={({ categorizedPosts, page }) => (
        <div>
          <h1>{page.title}</h1>
          {categorizedPosts.map(category => (
            <div key={category.name}>
              <h2>{category.name.replace(/_/g, ' ')}</h2>
              <Posts posts={category.posts} />
            </div>
          ))}
          <style jsx>{`
            h1 {
              padding-top: 2rem;
              text-align: center;
            }
            h2 {
              margin-left: 15px;
            }
          `}</style>
        </div>
      )} />
    )
  }
}

export default Work
