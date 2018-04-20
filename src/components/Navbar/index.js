import React, { Component } from 'react'
import { Link, withRouter } from 'react-static'

const navItems = [
  {
    title: 'About',
    href: '/',
  },
  {
    title: 'Work',
    href: '/work',
  },
]

class Navbar extends Component {
  state = {
    activeLink: '/',
  }
  componentWillMount () {
    if (typeof window !== 'undefined') {
      this.setState({
        activeLink: `${window.location.pathname}`,
      })
    }
  }
  componentDidMount () {
    this.props.history.listen(location => {
      this.setState({
        activeLink: `${location.pathname}`,
      })
    })
  }
  render () {
    return (
      <div id="nav-container">
        <Link to="/"><h1>Austin Ruby</h1></Link>
        <nav>
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={item.href}
              className={this.state.activeLink === item.href ? 'active-link' : ''}
            >
              {item.title}
            </Link>
          ))}
        </nav>
        <style jsx>{`
          #nav-container {
            width: calc(100% - 2rem);
            background: var(--maroon);
            padding: .75rem 1rem;
            position: fixed;
            display: flex;
            justify-content: space-between;
            top: 0;
            left: 0;
            z-index: 100;
            color: #ffffff;
          }
          h1 {
            margin: 0;
          }
          @media screen and (max-width: 640px) {
            nav {
              background: var(--maroon);
              width: 100%;
              display: flex;
              justify-content: space-around;
              padding: 0.5rem 0 0.5rem;
              position: fixed;
              bottom: 0;
              left: 0;
              z-index: 100;
            }
          }
        `}</style>
        <style jsx global>{`
          #nav-container a {
            color: #ffffff;
            text-decoration: none;
          }
          nav a {
            color: #ffffff;
            margin: 0 1rem;
            padding: 0.5rem 0 0;
            font-weight: bold;
            text-decoration: none;
            display: inline-block;
          }
          nav a.active-link {
            border-bottom: 2px solid #cfcfcf;
          }
          @media screen and (max-width: 640px) {
            nav a {
              padding: 0;
            }
          }
        `}</style>
      </div>
    )
  }
}

export default withRouter(Navbar)
