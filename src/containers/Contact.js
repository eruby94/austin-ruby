import React, { Component } from 'react'
import { RouteData } from 'react-static'
import ContactForm from '../components/Contact/index'

class Contact extends Component {
  render () {
    return (
      <RouteData render={({ Contact }) => (
        <div>
          <ContactForm {...Contact} />
        </div>
      )} />
    )
  }
}

export default Contact
