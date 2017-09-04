import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
// components
import AppToolbar from '../components/AppToolbar'
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

const AppBarContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(AppToolbar))

export default AppBarContainer