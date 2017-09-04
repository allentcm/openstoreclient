import { combineReducers } from 'redux'
import { reducer as reduxFormReducer } from 'redux-form';
import user from './user'

const rootReducer = combineReducers({
  form: reduxFormReducer,
  user
})

export default rootReducer
