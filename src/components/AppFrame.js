import React, { Component } from 'react'
import compose from 'recompose/compose'
// components

// containers
import AppBarContainer from '../containers/AppBarContainer'
import AppDrawerContainer from '../containers/AppDrawerContainer'
// material ui
import withWidth, { isWidthUp } from 'material-ui/utils/withWidth'
import {
  withStyles,
  createStyleSheet
} from 'material-ui/styles'

const styleSheet = createStyleSheet('AppFrame', theme => ({
  '@global': {
    html: {
      boxSizing: 'border-box',
    },
    '*, *:before, *:after': {
      boxSizing: 'inherit',
    },
    body: {
      margin: 0,
      background: theme.palette.background.default,
      color: theme.palette.text.primary,
      lineHeight: '1.2',
      overflowX: 'hidden',
      WebkitFontSmoothing: 'antialiased', // Antialiasing.
      MozOsxFontSmoothing: 'grayscale', // Antialiasing.
    },
    img: {
      maxWidth: '100%',
      height: 'auto',
      width: 'auto',
    },
  },
  appFrame: {
    display: 'flex',
    alignItems: 'stretch',
    minHeight: '100vh',
    width: '100%',
  },
  appBar: {
    transition: theme.transitions.create('width'),
  },
  [theme.breakpoints.up('lg')]: {
    drawer: {
      width: '250px',
    },
  },
}))

class AppFrame extends Component {
  constructor(props) {
    super(props)
  }

  state = {
    drawerOpen: false,
  }

  handleDrawerClose = () => {
    this.setState({ drawerOpen: false })
  }

  handleDrawerToggle = () => {
    this.setState({ drawerOpen: !this.state.drawerOpen })
  }

  handleToggleShade = () => {
    this.props.dispatch({ type: 'TOGGLE_THEME_SHADE' })
  }

  render() {
    const { classes, children, routes, width } = this.props
    let drawerDocked = isWidthUp('lg', width)

    return (
      <div className={classes.appFrame}>
        <AppDrawerContainer
          className={classes.drawer}
          docked={drawerDocked}
          onRequestClose={this.handleDrawerClose}
          open={drawerDocked || this.state.drawerOpen}
        />
        <AppBarContainer
          onRequestToggle={this.handleDrawerToggle}
        />
        {children}
      </div>
    )
  }
}

export default compose(withStyles(styleSheet), withWidth())(AppFrame)