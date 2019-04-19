import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = ({ component: Component, ...rest }) => {
  console.log(rest)
  return (

    <Route {...rest} render={(props) => (
      rest.authedUser !== null
      ? <Component {...props} />
      : <Redirect to={{
          pathname: '/login',
          state: { from: props.location }
        }} />

        )} />
  )
}

export default PrivateRoute
