import React from 'react'
import { Router } from 'react-static'
import Routes from 'react-static-routes'
import Navbar from './components/Navbar/index'

import './app.css'

export default () => (
  <Router>
    <div>
      <Navbar />
      <div className="content">
        <Routes />
      </div>
    </div>
  </Router>
)
