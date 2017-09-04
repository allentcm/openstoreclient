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

const styleSheet = createStyleSheet('ResetPasswordForm', theme => ({
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


const ResetPasswordForm = (props, state) => {
  const {
    handleSubmit,
    error,
    pristine,
    submitting,
    history,
    classes
  } = props

  state = {
    open: false,
    error: {}
  }

  const handleRequestClose = () => {
    this.setState({ open: false })
  }

  const resetPassword = (values) => {
    const data = {
      email: values.email,
      password: values.password
    }
    return Axios.post('http://0.0.0.0:3000/api/Reviewers/reset', data)
        .then(response => {
          const user = response.data
          history.push('/login')
        })
        .catch(error => {
          if (error.response) {
            const errorData = error.response.data.error
            let formatedError = {}
            formatedError[errorData.name] = errorData.message

            throw new SubmissionError(formatedError)
          }
        })
  }

  const login = () => {
    history.push('/login')
  }

  return (
    <form onSubmit={handleSubmit(resetPassword)}>
      {error &&
        <strong>
          {error}
        </strong>}
      <Typography type="headline" component="h3">
        Reset Password
      </Typography>
      <Typography type="body1" component="p">
        to send a password reset link to your email
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
      <Button
        type="submit"
        raised color="primary"
        className={classes.button}
        disabled={pristine || submitting}>
        Reset
      </Button>
      <br/><br/><br/><br/>
      <Typography type="body1" component="p">
        Found your login password?
        <Button
          color="primary"
          className={classes.buttonLink}
          onClick={login}>
          Login
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
  )
}

export default reduxForm({
  form: 'ResetPasswordForm'
})(withStyles(styleSheet)(ResetPasswordForm))