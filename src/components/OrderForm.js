import React from 'react'
import Axios from 'axios'
import { Redirect } from 'react-router-dom'
import {
  Field,
  SubmissionError,
  reduxForm
} from 'redux-form'
// material ui
import Paper from 'material-ui/Paper'
import Button from 'material-ui/Button'
import Hidden from 'material-ui/Hidden'
import Divider from 'material-ui/Divider'
import TextField from 'material-ui/TextField'
import Typography from 'material-ui/Typography'
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog'
import {
  withStyles,
  createStyleSheet
} from 'material-ui/styles'

const styleSheet = createStyleSheet('OrderForm', theme => ({
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
  }
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


const OrderForm = (props, state) => {
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
  } = props

  state = {
    open: false,
    error: {}
  }

  const handleRequestClose = () => {
    this.setState({ open: false })
  }

  const loginUser = (values) => {
    const data = {
      email: values.email,
      password: values.password
    }
    return Axios.post('http://0.0.0.0:3000/api/Reviewers/login', data)
        .then(response => {
          const user = response.data
          updateUser(user)
          const path = (location.state && location.state.from) ? location.state.from.pathname : '/'
          history.push(path)
        })
        .catch(error => {
          if (error.response) {
            const errorData = error.response.data.error
            let formatedError = {}
            formatedError[errorData.name] = errorData.message;

            throw new SubmissionError(formatedError)
          }
        })
  }

  const resetPassword = () => {
    history.push('/reset-password')
  }

  const register = () => {
    history.push('/register')
  }

  return (
    <form onSubmit={handleSubmit(loginUser)}>
      {error &&
        <strong>
          {error}
        </strong>}
      <Typography type="headline" component="h3">
        Add an Order
      </Typography>
      <br/><br/><br/><br/>
      <Typography type="subheading" component="p">
        Customer Information
      </Typography>
      <Field
        required
        id="email"
        name="email"
        label="Email"
        margin="normal"
        component={renderTextField}
        className={classes.blockField}
      />
      <Field
        required
        id="password"
        name="password"
        label="Password"
        type="password"
        autoComplete="current-password"
        margin="normal"
        component={renderTextField}
        className={classes.blockField}
      />
      <Field
        required
        id="confirmPassword"
        name="confirmPassword"
        label="Confirm Password"
        type="password"
        autoComplete="current-password"
        margin="normal"
        component={renderTextField}
        className={classes.blockField}
      />
      <br/><br/><br/><br/>
      <Typography type="subheading" component="p">
        Billing Information
      </Typography>
      <Field
        required
        id="firstName"
        name="firstName"
        label="First Name"
        margin="normal"
        component={renderTextField}
        className={classes.field}
      />
      <Field
        required
        id="lastName"
        name="lastName"
        label="Last Name"
        margin="normal"
        component={renderTextField}
        className={classes.field}
      />
      <br/>
      <Field
        id="company"
        name="company"
        label="Company"
        margin="normal"
        component={renderTextField}
        className={classes.blockField}
      />
      <Field
        id="phone"
        name="phone"
        label="Phone Number"
        margin="normal"
        component={renderTextField}
        className={classes.blockField}
      />
      <Field
        required
        id="address1"
        name="address1"
        label="Address Line 1"
        margin="normal"
        component={renderTextField}
        className={classes.blockField}
      />
      <Field
        id="address2"
        name="address2"
        label="Address Line 2"
        margin="normal"
        component={renderTextField}
        className={classes.blockField}
      />
      <Field
        required
        id="city"
        name="city"
        label="City"
        margin="normal"
        component={renderTextField}
        className={classes.blockField}
      />
      <Field
        required
        id="zip"
        name="zip"
        label="Zip/Postcode"
        margin="normal"
        component={renderTextField}
        className={classes.blockField}
      />
      <Field
        required
        id="country"
        name="country"
        label="Country"
        margin="normal"
        component={renderTextField}
        className={classes.blockField}
      />
      <br/><br/>
      <Button
        type="submit"
        raised color="primary"
        className={classes.button}
        disabled={pristine || submitting}>
        Next
      </Button>
    </form>
  );
}

export default reduxForm({
  form: 'OrderForm'
})(withStyles(styleSheet)(OrderForm))