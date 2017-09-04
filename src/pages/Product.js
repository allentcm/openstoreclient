import React, { Component } from 'react';
import Axios from 'axios'
// material ui
import Table, {
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from 'material-ui/Table';
import {
  withStyles,
  createStyleSheet
} from 'material-ui/styles'

const styleSheet = createStyleSheet('Product', theme => ({
  wrapContent: {
    whiteSpace: 'normal',
    wordWrap: 'break-word'
  },
  itemImage: {
    width: '40px',
    height: '40px'
  },
}))

class Product extends Component {
  static defaultProps = {
    openImmediately: false,
  }

  state = {
    open: false,
    data: []
  }

  componentWillMount() {

  }

  updateData = (result) => {
    this.setState({ data: result })
  }

  render() {
    const { match } = this.props

    return (
      <div>
        <h3>ID: {match.params.id}</h3>
      </div>
    )
  }
}

export default withStyles(styleSheet)(Product);