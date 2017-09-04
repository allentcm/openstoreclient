import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
// components
import ResetPasswordForm from '../components/ResetPasswordForm'
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

const ResetPasswordFormContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(ResetPasswordForm))

export default ResetPasswordFormContainer