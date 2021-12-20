import Header from '../components/ui/Header'
import { createTheme, ThemeProvider, styled } from '@mui/material/styles'

import theme from './ui/theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      hello
    </ThemeProvider>
  )
}

export default App
