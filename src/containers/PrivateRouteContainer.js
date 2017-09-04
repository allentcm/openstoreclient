import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
// components
import PrivateRoute from '../components/PrivateRoute'

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

const PrivateRouteContainer = withRouter(connect(mapStateToProps)(PrivateRoute))

export default PrivateRouteContainer