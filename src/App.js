import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
// material ui
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import createMuiTheme from 'material-ui/styles/theme'
import createPalette from 'material-ui/styles/palette'
import green from 'material-ui/colors/green'
import pink from 'material-ui/colors/pink'
// components
import AppRouter from './components/AppRouter'
// redux
import rootReducer from './reducers/index'


const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const App = (props) => {
  const theme = createMuiTheme({
    palette: createPalette({
      primary: green,
      accent: pink,
      type: 'light',
    }),
  })

  return (
    <Provider store={store}>
      <MuiThemeProvider theme={theme}>
        <AppRouter />
      </MuiThemeProvider>
    </Provider>
  )
}

export default App;
