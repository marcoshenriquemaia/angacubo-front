import { ThemeProvider } from 'styled-components'
import { Routes } from './routes'
import { theme } from './styles/theme'
import './index.css'

function App() {

  return (
    <>
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </>
  )
}

export default App
