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

const styleSheet = createStyleSheet('LoginForm', theme => ({
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


const LoginForm = (props, state) => {
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
        Login
      </Typography>
      <Typography type="body1" component="p">
        to enter store Administration
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
      <Button
        type="submit"
        raised color="primary"
        className={classes.button}
        disabled={pristine || submitting}>
        Login
      </Button>
      <Button
        color="accent"
        className={classes.buttonLink}
        onClick={resetPassword}>
        Forgot password?
      </Button>
      <br/><br/><br/><br/>
      <Typography type="body1" component="p">
        Don't have an account?
        <Button
          color="primary"
          className={classes.buttonLink}
          onClick={register}>
          Register
        </Button>
      </Typography>

      {/* Error message dialog */}
      <Dialog open={state.open} onRequestClose={handleRequestClose}>
        <DialogContent>
          <DialogContentText>
            {state.error.message}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleRequestClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </form>
  );
}

export default reduxForm({
  form: 'LoginForm'
})(withStyles(styleSheet)(LoginForm))