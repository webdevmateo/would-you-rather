import React, { Component } from 'react';
import NavList from './NavList';
import ShowAuthedUser from './ShowAuthedUser'
import Logout from './Logout'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

class Nav extends Component {
  state = {
    drawer: true,
  }

  toggleDrawer = () => {
    const { drawer } = this.state
    this.setState({
      drawer: !drawer,
    })
  }

  render() {
    const { drawer } = this.state

    return (
      <div className='navContainer'>
        <FontAwesomeIcon
          icon={faBars}
          size='2x'
          className='bars'
          onClick={this.toggleDrawer}
        />
        <nav className={drawer === true ? 'drawer' : 'open'}>
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
