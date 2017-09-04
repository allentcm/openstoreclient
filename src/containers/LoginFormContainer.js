import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
// components
import LoginForm from '../components/LoginForm'
// redux
import { updateUser } from '../actions/index'

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateUser: (user) => {
      dispatch(updateUser(user))
    }
  }
}

const LoginFormContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginForm))

export default LoginFormContainer