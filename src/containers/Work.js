import React, { Component } from 'react'
import { RouteData } from 'react-static'
import Posts from '../components/Work/index'

class Work extends Component {
  render () {
    return (
      <RouteData render={({ categorizedPosts, page }) => (
        <div>
          <h1>{page.title}</h1>
          <p>{page.bodyCopy}</p>
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
            p {
              padding: 0 20%;
              text-align: center;
            }
            h2 {
              margin-left: 15px;
            }
            @media screen and (max-width: 1024px) {
              h1 {
                text-align: left;
                padding-left: 15px;
              }
              p {
                text-align: left;
                padding: 0 30px;
              }
            }
            @media screen and (max-width: 640px) {
              h1 {
                text-align: left;
                padding-left: 15px;
              }
              p {
                padding: 0 15px 0 30px;
                text-align: left;
              }
            }
          `}</style>
        </div>
      )} />
    )
  }
}

export default Work
