import { ThemeProvider } from 'styled-components'
import { Theme } from './styles/base/DefaultTheme'

import PageRouter from './pages/PageRouter'
import GlobalStyle from './styles/base/GlobalStyles'

function App() {
  return (
    <div>
      <ThemeProvider theme={Theme}>
        <GlobalStyle />
        <PageRouter />
      </ThemeProvider>
    </div>
  )
}

export default App
