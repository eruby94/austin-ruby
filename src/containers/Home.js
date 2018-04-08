import React, { Component } from 'react'
import { RouteData } from 'react-static'
import Intro from '../components/Home/index'
import Work from '../components/Work/index'

class Home extends Component {
  render () {
    return (
      <RouteData render={({ allPosts, About }) => (
        <div>
          <Intro content={About} />
          <div id="hidden">
            <Work posts={allPosts} />
          </div>
          <style jsx>{`
            #hidden {
              display: none;
            }
          `}</style>
        </div>
      )} />
    )
  }
}

export default Home
