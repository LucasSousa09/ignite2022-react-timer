import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'

import { Router } from './Router'

import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { CyclesContextProvider } from './contexts/CyclesContextProvider'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CyclesContextProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </CyclesContextProvider>
      <GlobalStyle />
    </ThemeProvider>
  )
}
