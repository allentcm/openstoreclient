import React from 'react';
import Radium from 'radium';
import Gravatar from 'gravatar';
import { Link } from 'react-router-dom'
import {
  Badge,
  ListItem,
  Avatar,
  Toolbar,
  ToolbarGroup,
  ToolbarTitle,
  IconButton,
  FlatButton
} from 'material-ui';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import NotificationsIcon from 'material-ui/svg-icons/social/notifications';

const Header = () => (
  <MuiThemeProvider>
    <Toolbar>
      <ToolbarGroup>
        <ToolbarTitle text="Options" />
      </ToolbarGroup>
      <ToolbarGroup>
        <Badge
          badgeContent={4}
          primary={true}
          style={{
            padding: 0,
          }}
          badgeStyle={{
            top: 2,
            left: 22,
            width: 22,
            height: 22,
            zIndex: 2
          }}
        >
          <IconButton>
            <NotificationsIcon />
          </IconButton>
        </Badge>
        <IconButton>
          <NotificationsIcon />
        </IconButton>
      </ToolbarGroup>
    </Toolbar>
  </MuiThemeProvider>
);

export default Header;