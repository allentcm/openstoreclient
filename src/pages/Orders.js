import React, { Component } from 'react'
// material ui
import Paper from 'material-ui/Paper'
import Tabs, { Tab } from 'material-ui/Tabs'
import Table, {
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
} from 'material-ui/Table'
import {
  withStyles,
  createStyleSheet
} from 'material-ui/styles'

const styleSheet = createStyleSheet('Orders', theme => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing.unit * 3,
  },
}))

const TabContainer = (props) => {
  return (
    <div style={{ padding: 20 }}>
      {props.children}
    </div>
  )
}

class Orders extends Component {
  state = {
    value: 0,
  }

  handleChange = (event, value) => {
    this.setState({ value })
  }

  render() {
    const { classes } = this.props
    const { value } = this.state

    return (
      <div>
        <Tabs
          index={value}
          onChange={this.handleChange}
          indicatorColor="accent"
          textColor="accent"
          fullWidth
        >
          <Tab label="All Orders" />
          <Tab label="Awaiting Payment" />
          <Tab label="Awaiting Fulfillment" />
          <Tab label="Awaiting Shipment" />
          <Tab label="Incomplete" />
        </Tabs>
        <Paper className={classes.root}>
        </Paper>
        {value === 0 &&
          <TabContainer>
            {'Item One'}
          </TabContainer>}
        {value === 1 &&
          <TabContainer>
            {'Item Two'}
          </TabContainer>}
        {value === 2 &&
          <TabContainer>
            {'Item Three'}
          </TabContainer>}
      </div>
    )
  }
}

export default withStyles(styleSheet)(Orders);