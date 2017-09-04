import React from 'react'
import Axios from 'axios'
import { Route } from 'react-router-dom'
// component
import AppFrame from '../components/AppFrame'
import AppContent from '../components/AppContent'
// containers

// material ui
import {
  withStyles,
  createStyleSheet
} from 'material-ui/styles'

import { adminRoutes } from '../routes'

const renderRoutes = (routes) => {
  let flatRoutes = []

  routes.map((route, index) => {
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

    if (route.routes && route.routes.length) {
      flatRoutes.push(renderRoutes(route.routes))
    }
  })

  return flatRoutes
}

const Admin = (props) => (
  <AppFrame>
    <AppContent>
      {renderRoutes(adminRoutes)}
    </AppContent>
  </AppFrame>
);

export default Admin