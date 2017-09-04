import React from 'react'
// component
import AppDrawerNavItem from './AppDrawerNavItem'
// material ui
import List from 'material-ui/List'
import Drawer from 'material-ui/Drawer'
import Toolbar from 'material-ui/Toolbar'
import Divider from 'material-ui/Divider'
import Typography from 'material-ui/Typography'
import {
  withStyles,
  createStyleSheet
} from 'material-ui/styles'

import { adminRoutes } from '../routes'

const styleSheet = createStyleSheet('AppDrawer', theme => ({
  paper: {
    width: 250,
    backgroundColor: theme.palette.background.paper
  },
  nav: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
  },
  grow: {
    flex: '1 1 auto',
  },
}))

const renderNavItems = (props, routes) => {
  let navItems = null

  if (routes && routes.length) {
    navItems = routes.reduce(reduceSubRoutes.bind(null, props), [])
  }

  return (
    <List>
      {navItems}
    </List>
  )
}

const reduceSubRoutes = (props, items, route, index) => {
  if (route.routes && route.routes.length) {
    const openImmediately = props.location.pathname.indexOf(route.path) !== -1 || false

    items.push(
      <AppDrawerNavItem
        key={index}
        openImmediately={openImmediately}
        title={route.title}
        icon={route.icon}>
        {renderNavItems(props, route.routes)}
      </AppDrawerNavItem>
    )
  } else {
    items.push(
      <AppDrawerNavItem
        key={index}
        title={route.title}
        to={route.path}
        onClick={props.onRequestClose}
      />
    )
  }

  return items
}

const AppDrawer = (props) => (
  <Drawer
    className={props.className}
    classes={{
      paper: props.classes.paper,
    }}
    open={props.open}
    onRequestClose={props.onRequestClose}
    docked={props.docked}
  >
    <div className={props.classes.nav}>
      <Toolbar className={props.classes.toolbar}>
        <Typography type="title" gutterBottom color="inherit">
          Rhema Store
        </Typography>
      </Toolbar>
      {renderNavItems(props, adminRoutes)}
      <div className={props.classes.grow} />
      <Typography type="title" gutterBottom color="inherit">
        Footer
      </Typography>
    </div>
  </Drawer>
)

export default withStyles(styleSheet)(AppDrawer)