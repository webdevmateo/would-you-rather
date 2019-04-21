import React from 'react';
import NavList from './NavList';
import ShowAuthedUser from './ShowAuthedUser'
import Logout from './Logout'

export default function Nav () {
  return (
    <nav className='nav'>
      <NavList />
      <div className='authed-logout'>
        <ShowAuthedUser />
        <Logout />
      </div>
    </nav>
  )
}
