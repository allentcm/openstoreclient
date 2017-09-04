import React, { Component } from 'react'
import Axios from 'axios'
import {
  Field,
  SubmissionError,
  reduxForm
} from 'redux-form'
import Dropzone from 'react-dropzone'
// material ui
import Grid from 'material-ui/Grid'
import Paper from 'material-ui/Paper'
import Button from 'material-ui/Button'
import Hidden from 'material-ui/Hidden'
import Divider from 'material-ui/Divider'
import TextField from 'material-ui/TextField'
import Typography from 'material-ui/Typography'
import Subheader from 'material-ui/List/ListSubheader';
import IconButton from 'material-ui/IconButton';
import Delete from 'material-ui-icons/Delete';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog'
import {
  GridList,
  GridListTile,
  GridListTileBar
} from 'material-ui/GridList'
import {
  withStyles,
  createStyleSheet
} from 'material-ui/styles'

const styleSheet = createStyleSheet('ProductForm', theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  buttonLink: {
    margin: theme.spacing.unit,
    textTransform: 'none',
  },
  blockField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    display: 'flex',
  },
  field: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    display: 'inline-flex',
  },
  dropzone: {
    width: '100%',
    height: '300px',
    borderWidth: '4px',
    borderColor: '#DDD',
    borderStyle: 'dashed',
    borderRadius: '2px',
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  dropzoneTable: {
    width: '100%',
    height: '100%',
    borderWidth: '4px'
  },
  dropzoneTR: {
    width: '100%',
    height: '100%',
    verticalAlign: 'middle'
  },
  dropzoneTD: {
    width: '100%',
    textAlign: 'center',
    position: 'relative'
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    background: theme.palette.background.paper,
  },
  gridList: {
    width: '100%',
    height: '100%',
  },
}))

const renderTextField = (
  { input, label, meta: { touched, error }, ...custom },
) => (
  <TextField
    label={label}
    error={touched && error}
    helperText={touched && error}
    {...input}
    {...custom}
  />
)


class ProductForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      files: [],
      open: false,
      dialog: {
        title: '',
        message: ''
      }
    }
  }

  onDrop = (files) => {
    this.setState({ files })
  }

  handleRequestOpen = () => {
    this.setState({ open: true })
  }

  handleRequestClose = () => {
    this.setState({ open: false })
  }

  removeFile = (index) => {
    let files = this.state.files
    files.splice(index, 1)
    this.setState({ files: files })
  }

  updateDialog = (title, message) => {
    this.setState({
      title: title,
      message: message
   })
  }

  createProduct = (values) => {
    const data = {
      name: values.name,
      description: values.description,
      sku: values.sku,
      price: values.price,
      file: this.state.files[0]
    }
    return Axios.post('http://0.0.0.0:3000/api/Products', data)
        .then(response => {
          this.updateDialog('', 'Product added successfully!')
          this.props.history.push('/admin/products/index')
        })
        .catch(error => {
          if (error.response) {
            const errorData = error.response.data.error.details
            // error messages
            const messages = errorData.messages

            throw new SubmissionError(messages)
          }
        })
  }

  render() {
    const {
      handleSubmit,
      error,
      pristine,
      submitting,
      user,
      location,
      history,
      classes,
      updateUser
    } = this.props

    let dropzoneRef

    const dropzoneTextColor = {
      color: '#CCC'
    }

    const dropzoneImg = {
      width: '100px',
      height: '100px'
    }

    return (
      <form onSubmit={handleSubmit(this.createProduct)}>
        {error &&
          <strong>
            {error}
          </strong>}
        <Typography type="headline" component="h3">
          Add a Product
        </Typography>
        <br/><br/><br/><br/>
        <Typography type="subheading" component="p">
          Product Details
        </Typography>
        <Field
          required
          id="name"
          name="name"
          label="Name"
          margin="normal"
          component={renderTextField}
          className={classes.blockField}
        />
        <Field
          multiline
          id="description"
          name="description"
          label="Description"
          margin="normal"
          component={renderTextField}
          className={classes.blockField}
        />
        <Grid container spacing={24}>
          <Grid item xs={12} sm={6}>
            <Field
              id="sku"
              name="sku"
              label="Product Code/SKU"
              margin="normal"
              component={renderTextField}
              className={classes.blockField}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Field
              id="barcode"
              name="barcode"
              label="Barcode (ISBN, UPC, GTIN, etc.)"
              margin="normal"
              component={renderTextField}
              className={classes.blockField}
            />
          </Grid>
        </Grid>
        <Grid container spacing={24}>
          <Grid item xs={6}>
            <Field
              id="price"
              name="price"
              label="Price (SGD)"
              type="number"
              margin="normal"
              component={renderTextField}
              className={classes.blockField}
            />
          </Grid>
          <Grid item xs={6}>
            <Field
              id="tax"
              name="tax"
              label="Tax (%)"
              type="number"
              margin="normal"
              component={renderTextField}
              className={classes.blockField}
            />
          </Grid>
        </Grid>
        <br/><br/>
        <Typography type="subheading" component="p">
          Product Images
        </Typography>
        <br/>
        <Dropzone
          accept="image/*"
          className={classes.dropzone}
          ref={(node) => { dropzoneRef = node }}
          onDrop={this.onDrop}
          disableClick
        >
        <table
          className={classes.dropzoneTable}
        >
          <tbody>
            <tr className={classes.dropzoneTR}>
              <td className={classes.dropzoneTD}>
                {!(this.state.files && this.state.files.length > 0) &&
                  <div>
                    <Typography type="headline" component="h2" style={dropzoneTextColor}>
                      Drag an image here
                    </Typography>
                    <br/><br/>
                    <Typography component="p" style={dropzoneTextColor}>
                      or click the button below...
                    </Typography>
                    <Button
                      raised color="default"
                      className={classes.button}
                      onClick={() => { dropzoneRef.open() }}
                      disableRipple>
                      Choose an image
                    </Button>
                  </div>
                }
                {this.state.files && this.state.files.length > 0 &&
                  <GridList cellHeight={180} className={classes.gridList} cols={4}>
                    {this.state.files.map((file, index) =>
                      <GridListTile key={file.name}>
                        <img src={file.preview} alt={file.name} />
                        <GridListTileBar
                          title={file.name}
                          subtitle={
                            <span>
                              {file.size} bytes
                            </span>
                          }
                          actionIcon={
                            <IconButton
                              onClick={this.removeFile}
                            >
                              <Delete color="rgba(255, 255, 255, 0.54)" />
                            </IconButton>
                          }
                        />
                      </GridListTile>,
                    )}
                  </GridList>
                }

                {({ isDragActive, isDragReject, acceptedFiles, rejectedFiles }) => {
                  if (isDragActive) {
                    return "This file is authorized";
                  }
                  if (isDragReject) {
                    return "This file is not authorized";
                  }
                  return acceptedFiles.length || rejectedFiles.length
                    ? `Accepted ${acceptedFiles.length}, rejected ${rejectedFiles.length} files`
                    : "Try dropping some files.";
                }}
              </td>
            </tr>
          </tbody>
        </table>
        </Dropzone>
        <br/><br/>
        <Button
          type="submit"
          raised color="primary"
          className={classes.button}
          disabled={pristine || submitting}>
          Save
        </Button>

        {/* Error message dialog */}
        <Dialog open={this.state.open} onRequestClose={this.handleRequestClose}>
          <DialogContent>
            <DialogContentText>
              {this.state.dialog.message}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleRequestClose} color="primary">
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </form>
    )
  }
}

export default reduxForm({
  form: 'ProductForm'
})(withStyles(styleSheet)(ProductForm))