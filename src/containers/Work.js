import React, { Component } from 'react'
import { RouteData } from 'react-static'
import Posts from '../components/Work/index'

class Work extends Component {
  render () {
    return (
      <RouteData render={({ allPosts }) => (
        <div>
          <Posts posts={allPosts} />
        </div>
      )} />
    )
  }
}

export default Work
