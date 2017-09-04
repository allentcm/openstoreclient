import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import classNames from 'classnames'
// components
import LightbulbOutline from 'material-ui-icons/LightbulbOutline'
// material ui
import Button from 'material-ui/Button'
import InboxIcon from 'material-ui-icons/Inbox'
import Collapse from 'material-ui/transitions/Collapse'
import {
  ListItem,
  ListItemIcon
} from 'material-ui/List'
import {
  withStyles,
  createStyleSheet
} from 'material-ui/styles'

const styleSheet = createStyleSheet('AppDrawerNavItem', theme => ({
  button: theme.mixins.gutters({
    borderRadius: 0,
    justifyContent: 'flex-start',
    textTransform: 'none',
    width: '100%',
    transition: theme.transitions.create('background-color', {
      duration: theme.transitions.duration.shortest,
    }),
    '&:hover': {
      textDecoration: 'none',
    },
  }),
  navItem: {
    ...theme.typography.body2,
    display: 'block',
    paddingTop: 0,
    paddingBottom: 0,
  },
  navLink: {
    fontWeight: theme.typography.fontWeightRegular,
    display: 'flex',
    paddingTop: 0,
    paddingBottom: 0,
  },
  navLinkButton: {
    color: theme.palette.text.secondary,
    textIndent: 32,
    fontSize: 13,
  },
  activeButton: {
    color: theme.palette.accent[500],
  },
}))

class AppDrawerNavItem extends Component {
  static defaultProps = {
    openImmediately: false,
  }

  state = {
    open: false,
  }

  componentWillMount() {
    if (this.props.openImmediately) {
      this.setState({ open: true })
    }
  }

  handleClick = () => {
    this.setState({ open: !this.state.open })
  }

  render() {
    const { children, classes, icon, title, to } = this.props

    if (to) {
      return (
        <ListItem className={classes.navLink} disableGutters>
          <Button
            component={NavLink}
            to={to}
            className={classNames(classes.button, classes.navLinkButton)}
            activeClassName={classes.activeButton}
            disableRipple
            onClick={this.props.onClick}
          >
            {title}
          </Button>
        </ListItem>
      )
    }

    return (
      <ListItem className={classes.navItem} disableGutters>
        <Button className={classes.button} onClick={this.handleClick}>
          {icon}&nbsp;&nbsp;{title}
        </Button>
        <Collapse in={this.state.open} transitionDuration="auto" unmountOnExit>
          {children}
        </Collapse>
      </ListItem>
    )
  }
}

export default withStyles(styleSheet)(AppDrawerNavItem)