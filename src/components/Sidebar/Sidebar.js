import React from 'react';
import Radium from 'radium';
import Gravatar from 'gravatar';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';

import { Link } from 'react-router-dom'

import {
  Toolbar,
  ToolbarGroup,
  ToolbarTitle,
  FontIcon,
  Divider,
  List,
  ListItem,
  Avatar,
  Drawer,
  Menu,
  MenuItem,
  IconMenu,
  FlatButton
} from 'material-ui';

import {
  blue300,
  indigo900,
  orange200,
  deepOrange300,
  pink400,
  purple500,
  grey900,
} from 'material-ui/styles/colors';

import RemoveRedEye from 'material-ui/svg-icons/image/remove-red-eye';


const Sidebar = (props) => (
  <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
    <Drawer
      open={props.open}
      docked={props.docked}
    >
      <Toolbar
        style={{
          backgroundColor: grey900
        }}
      >
        <ToolbarGroup>
          <ToolbarTitle text="Rhema SG" />
        </ToolbarGroup>
      </Toolbar>

      <List>
        <ListItem
          disabled={true}
        >
          <img src={require('./logo.png')} />
        </ListItem>
        <ListItem
          disabled={true}
          leftAvatar={
            <Avatar
              backgroundColor={purple500}
            >
              AT
            </Avatar>
          }
        >Allen Tuh</ListItem>
        <Divider />
        <ListItem primaryText="Sent mail" leftIcon={<RemoveRedEye />} />
        <ListItem primaryText="Sent mail" leftIcon={<RemoveRedEye />} />
      </List>
    </Drawer>
  </MuiThemeProvider>
);

export default Sidebar;