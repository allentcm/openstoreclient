import React, { Component } from 'react';
import Axios from 'axios'
import { Link } from 'react-router-dom'
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

const styleSheet = createStyleSheet('Customers', theme => ({
  wrapContent: {
    whiteSpace: 'normal',
    wordWrap: 'break-word'
  },
  itemImage: {
    width: '40px',
    height: '40px'
  },
}))

class Customers extends Component {
  static defaultProps = {
    openImmediately: false,
  }

  state = {
    open: false,
    data: []
  }

  componentWillMount() {
    // this.getCustomers()
  }

  updateData = (result) => {
    this.setState({ data: result })
  }

  getCustomers = () => {
    return Axios.get('http://0.0.0.0:3000/api/Members')
        .then(response => {
          this.updateData(response.data)
        })
        .catch(error => {
          if (error.response) {
            const errorData = error.response.data.error.details
            // error messages
            const messages = errorData.messages
          }
        })
  }

  render() {
    const { classes } = this.props

    return (
      <div>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Image</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Price (SGD)</TableCell>
              <TableCell>Inventory</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.data.map(n => {
              return (
                <TableRow key={n.id}>
                  <TableCell>
                    <img src={n.images} alt={n.name} className={classes.itemImage} />
                  </TableCell>
                  <TableCell className={classes.wrapContent}>
                    <Link to={`/admin/products/${n.id}`}>{n.name}</Link>
                  </TableCell>
                  <TableCell numeric>
                    {n.price}
                  </TableCell>
                  <TableCell numeric>
                    {n.carbs}
                  </TableCell>
                  <TableCell numeric>
                    {n.protein}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    )
  }
}

export default withStyles(styleSheet)(Customers);