import React from 'react'
import PropTypes from 'prop-types'
import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = ({ user, component: Component, ...rest }) => {
  let isAuthenticated = user.id ? true : false

  return (
    <Route {...rest} render={props => (
      isAuthenticated ? (
        <Component {...props}/>
      ) : (
        <Redirect to={{
          pathname: '/login',
          state: { from: props.location }
        }}/>
      )
    )}/>
  )
}

PrivateRoute.propTypes = {
  user: PropTypes.object.isRequired,
  component: PropTypes.any.isRequired
}

export default PrivateRoute