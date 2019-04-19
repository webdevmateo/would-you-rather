import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Unidentified () {
  return (
    <div>
      The page you are looking for doesn't exist.
      <NavLink to='/login'>
        Login
      </NavLink>
    </div>
  )
}
