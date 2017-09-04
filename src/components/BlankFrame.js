import React from 'react'
import compose from 'recompose/compose'

import { withStyles, createStyleSheet } from 'material-ui/styles'
import withWidth, { isWidthUp } from 'material-ui/utils/withWidth'

const styleSheet = createStyleSheet('BlankFrame', theme => ({
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
    justifyContent: 'center',
    minHeight: '100vh',
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      alignItems: 'center',
    },
    [theme.breakpoints.down('sm')]: {
      alignItems: 'stretch',
    },
  }
}))

const BlankFrame = (props) => (
  <div className={props.classes.appFrame}>
    {props.children}
  </div>
)

export default compose(withStyles(styleSheet), withWidth())(BlankFrame);