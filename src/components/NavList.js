import React from 'react';
import { NavLink } from 'react-router-dom';

export default function NavList () {
  return (
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
  )
}
