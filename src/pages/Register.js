import React from 'react'
import Axios from 'axios'
// component
import BlankFrame from '../components/BlankFrame'
// containers
import RegisterFormContainer from '../containers/RegisterFormContainer'
// material ui
import Hidden from 'material-ui/Hidden'
import Paper from 'material-ui/Paper'
import {
  withStyles,
  createStyleSheet
} from 'material-ui/styles';

const styleSheet = createStyleSheet('Register', theme => ({
  root: {
    [theme.breakpoints.up('sm')]: {
      width: 400,
    },
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    }
  },
  box: {
    paddingTop: 64,
    paddingBottom: 32,
    paddingLeft: 32,
    paddingRight: 32
  },
  full: {
    paddingTop: 64,
    paddingBottom: 32,
    paddingLeft: 32,
    paddingRight: 32,
    backgroundColor: theme.palette.background.paper,
    width: '100%'
  }
}))


const Register = (props) => (
  <BlankFrame>
    <div className={props.classes.root}>
      <Hidden only="xs">
        <Paper className={props.classes.box} elevation={4}>
          <RegisterFormContainer />
        </Paper>
      </Hidden>
      <Hidden smUp>
        <div className={props.classes.full}>
          <RegisterFormContainer />
        </div>
      </Hidden>
    </div>
  </BlankFrame>
)

export default withStyles(styleSheet)(Register);