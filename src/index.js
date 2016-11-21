import React from 'react'
import ReactDOM from 'react-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Container from './container'

const App = () => (
  <MuiThemeProvider>
    <Container />
  </MuiThemeProvider>
)

ReactDOM.render(<App />, document.getElementById('app'))
