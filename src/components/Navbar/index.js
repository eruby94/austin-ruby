import React, { Component } from 'react'
import { Link, withRouter } from 'react-static'

const navItems = [
  {
    title: 'About',
    href: '/',
  },
  {
    title: 'Work',
    href: '/#work',
  },
  {
    title: 'Contact',
    href: '/#contact',
  },
]

class Navbar extends Component {
  state = {
    activeLink: '/',
  }
  componentWillMount () {
    if (typeof window !== 'undefined') {
      this.setState({
        activeLink: `/${window.location.hash}`,
      })
    }
  }
  componentDidMount () {
    this.props.history.listen(location => {
      this.setState({
        activeLink: `/${location.hash}`,
      })
    })
  }
  render () {
    return (
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
        <style jsx>{`
          nav {
            width: 100%;
            background: var(--maroon);
            padding: .75rem 0;
            position: fixed;
            top: 0;
            left: 0;
            z-index: 100;
          }
        `}</style>
        <style jsx global>{`
          nav a {
            color: #ffffff;
            margin: 0 1rem;
            padding: .25rem 0;
            font-weight: bold;
            text-decoration: none;
            display: inline-block;
          }
          nav a.active-link {
            border-bottom: 2px solid #cfcfcf;
          }
        `}</style>
      </nav>
    )
  }
}

export default withRouter(Navbar)
