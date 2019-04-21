import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Unidentified () {
  return (
    <div style={
      {
        textAlign: 'center',
      }
    }>
      <p>The page you are looking for doesn't exist.</p>
      <NavLink to='/login'>
        Login
      </NavLink>
    </div>
  )
}
