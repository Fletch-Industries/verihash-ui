import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import { CssBaseline } from '@mui/material'
import { ThemeProvider, createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    primary: {
      main: '#333333'
    },
    secondary: {
      light: '#F1CD5F',
      main: '#DB7640'
    }
  }
})

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <Router>
          <div>
            <Routes>
              <Route exact path='/' element={<Home />} />
            </Routes>
          </div>
        </Router>
      </CssBaseline>
    </ThemeProvider>
  )
}

export default App
