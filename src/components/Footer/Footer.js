import React from 'react';
import Radium from 'radium';
import {
  FontIcon,
  Divider,
  ListItem,
  Avatar,
  Toolbar,
  ToolbarGroup,
  ToolbarTitle,
  IconMenu,
  FlatButton
} from 'material-ui';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const Footer = () => (
  <MuiThemeProvider>
    <div>
        <FlatButton label="Home" href="/" />
        <FlatButton label="About" href="/about" />
    </div>
  </MuiThemeProvider>
);

export default Footer;