import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
// components
import RegisterForm from '../components/RegisterForm'
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

const RegisterFormContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(RegisterForm))

export default RegisterFormContainer