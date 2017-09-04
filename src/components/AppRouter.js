import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
// components

// container
import PrivateRouteContainer from '../containers/PrivateRouteContainer'

import routes from '../routes'

const renderRoutes = (routes) => {
  let flatRoutes = []

  routes.map((route, index) => {
    if (route.private) {
      flatRoutes.push(
        <Route
          key={index}
          path={route.path}
          exact={route.exact}
          nav={route.nav}
          blank={route.blank}
          component={route.component}
        />
      )
    } else {
      flatRoutes.push(
        <Route
          key={index}
          path={route.path}
          exact={route.exact}
          nav={route.nav}
          blank={route.blank}
          component={route.component}
        />
      )
    }

    if (route.routes && route.routes.length) {
      flatRoutes.push(renderRoutes(route.routes))
    }
  })

  return flatRoutes
}

class AppRouter extends React.Component {
  render() {
    return (
      <Router>
        <div>
          {renderRoutes(routes)}
        </div>
      </Router>
    )
  }
}

export default AppRouter