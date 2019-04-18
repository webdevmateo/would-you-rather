import React from 'react';
import { NavLink } from 'react-router-dom';
import ShowAuthedUser from './ShowAuthedUser'
import Logout from './Logout'

export default function Nav () {
  return (
    <nav className='nav'>
      <ul className='nav-list'>
        <li className='nav-list-item'>
          <NavLink className='nav-link' to='/' exact>
            Home
          </NavLink>
        </li>
        <li className='nav-list-item'>
          <NavLink className='nav-link' to='/add'>
            New Poll
          </NavLink>
        </li>
        <li className='nav-list-item'>
          <NavLink className='nav-link' to='/leaderboard'>
            Leader Board
          </NavLink>
        </li>
      </ul>
      <div className='authed-logout'>
        <ShowAuthedUser />
        <Logout />
      </div>
    </nav>
  )
}
