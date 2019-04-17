import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Nav () {
  return (
    <nav className='nav'>
      <ul>
        <li>
          <NavLink to='/' exact>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to='/add'>
            New Poll
          </NavLink>
        </li>
        <li>
          <NavLink to='/leaderboard'>
            Leader Board
          </NavLink>  
        </li>
      </ul>
    </nav>
  )
}
