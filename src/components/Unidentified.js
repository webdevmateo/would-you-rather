import React from 'react'
import { Redirect } from 'react-router-dom'

export default function Unidentified (props) {
  const from = props.location.state
  ? props.location.state.from
  : undefined

  if (from !== '/login') {
    return <Redirect to={{
      pathname: '/login',
      state: {
        from: '/404'
      }
    }} />
  }

  return (
    <div style={
      {
        textAlign: 'center',
      }
    }>

    <p>The page you are looking for doesn't exist.</p>
    </div>
  )
}
