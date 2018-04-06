import React, { Component } from 'react'
import { RouteData } from 'react-static'
import Intro from '../components/Intro/index'
import Work from '../components/Work/index'
import Contact from '../components/Contact/index'

class Home extends Component {
  render () {
    return (
      <RouteData render={({ allPosts, About }) => (
        <div>
          <Intro content={About} />
          <Work posts={allPosts} />
          <Contact />
        </div>
      )} />
    )
  }
}

export default Home
