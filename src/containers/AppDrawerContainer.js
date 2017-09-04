import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
// components
import AppDrawer from '../components/AppDrawer'
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

const AppDrawerContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(AppDrawer))

export default AppDrawerContainer