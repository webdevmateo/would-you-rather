import React, { Component } from 'react';
import NavList from './NavList';
import ShowAuthedUser from './ShowAuthedUser'
import Logout from './Logout'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

class Nav extends Component {

  componentDidMount() {
    const { displayNavLoaded } = this.props

    displayNavLoaded()
  }

  toggleDrawer = () => {
    const { toggleDrawer } = this.props

    toggleDrawer()
  }

  render() {
    const { navClass } = this.props

    return (
      <div className='navContainer'>
        <FontAwesomeIcon
          icon={faBars}
          size='2x'
          className='bars'
          onClick={this.toggleDrawer}
        />
        <nav className={navClass}>
          <NavList />
          <div className='authed-logout'>
            <ShowAuthedUser />
            <Logout />
          </div>
        </nav>
      </div>
    )
  }
}

export default Nav
