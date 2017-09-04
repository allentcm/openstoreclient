import React from 'react'
import classNames from 'classnames'
// material ui
import {
  withStyles,
  createStyleSheet
} from 'material-ui/styles'

const styleSheet = createStyleSheet('AppContent', theme => ({
  content: theme.mixins.gutters({
    paddingTop: 80,
    flex: '1 1 100%',
    maxWidth: '100%',
    margin: '0 auto',
    backgroundColor: theme.palette.background.paper,
  }),
  [theme.breakpoints.up(948)]: {
    content: {
      maxWidth: 900,
    },
  },
}))

const AppContent = (props) => {
  const { className, classes, children: childrenProp } = props

  let children = childrenProp

  return (
    <div className={classNames(classes.content, className)}>
      {children}
    </div>
  )
}

export default withStyles(styleSheet)(AppContent)