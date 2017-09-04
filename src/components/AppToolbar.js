import React, { Component } from 'react'
// material ui
import Badge from 'material-ui/Badge'
import AppBar from 'material-ui/AppBar'
import Avatar from 'material-ui/Avatar'
import Toolbar from 'material-ui/Toolbar'
import MenuIcon from 'material-ui-icons/Menu'
import Typography from 'material-ui/Typography'
import IconButton from 'material-ui/IconButton'
import Menu, { MenuItem } from 'material-ui/Menu'
import Notifications from 'material-ui-icons/Notifications'
import {
  withStyles,
  createStyleSheet
} from 'material-ui/styles'

const styleSheet = createStyleSheet('AppBar', theme => ({
  badge: {
    margin: `0 ${theme.spacing.unit * 2}px`,
  },
  grow: {
    flex: '1 1 auto',
  },
  menu: {
    top: '56px',
  },
}))


class AppToolbar extends Component {
  state = {
    anchorEl: undefined,
    open: false,
  }

  getMemberInitial = () => {
    return 'AT'
  }

  handleClick = event => {
    this.setState({
      open: true,
      anchorEl: event.currentTarget
    })
  }

  handleRequestClose = () => {
    this.setState({ open: false })
  }

  render() {
    return (
      <AppBar>
        <Toolbar>
          <IconButton
            color="contrast"
            onClick={this.props.onRequestToggle}
          >
            <MenuIcon />
          </IconButton>
          <div className={this.props.classes.grow} />
          <IconButton
            component="a"
            title="GitHub"
            color="contrast"
            href="https://github.com/callemall/material-ui/tree/v1-beta"
          >
            <Notifications />
          </IconButton>
          <Badge
            className={this.props.classes.badge}
            badgeContent={4}
            color="accent"
          >
            <IconButton
              onClick={this.handleClick}
            >
              <Notifications />
            </IconButton>
            <Menu
              id="simple-menu"
              classes={{
                root: this.props.classes.menu
              }}
              anchorEl={this.state.anchorEl}
              open={this.state.open}
              onRequestClose={this.handleRequestClose}
            >
              <MenuItem onClick={this.handleRequestClose}>Profile</MenuItem>
              <MenuItem onClick={this.handleRequestClose}>My account</MenuItem>
              <MenuItem onClick={this.handleRequestClose}>Logout</MenuItem>
            </Menu>
          </Badge>
          <IconButton
            onClick={this.handleClick}
          >
            <Avatar>
              {this.getMemberInitial()}
            </Avatar>
          </IconButton>
          <Menu
            id="simple-menu"
            classes={{
              root: this.props.classes.menu
            }}
            anchorEl={this.state.anchorEl}
            open={this.state.open}
            onRequestClose={this.handleRequestClose}
          >
            <MenuItem onClick={this.handleRequestClose}>Profile</MenuItem>
            <MenuItem onClick={this.handleRequestClose}>My account</MenuItem>
            <MenuItem onClick={this.handleRequestClose}>Logout</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    )
  }
}

export default withStyles(styleSheet)(AppToolbar)