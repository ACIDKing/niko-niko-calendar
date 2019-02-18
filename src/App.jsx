import React from 'react'
import { createGlobalStyle } from 'styled-components'

import { MainContainer } from './containers'

const GlobalStyle = createGlobalStyle`
  html {
    font-size: .825rem;
    font-family: DINPro, Tahoma, serif;
    -webkit-font-smoothing: antialiased;
  }
  
  html, body {
    margin: 0;
    padding: 0;
    height: 100%;
    background: #F7F8F9;
  }

  input, textarea, select, button {
    font-family: DINPro, Tahoma, serif;
  }

  #root {
    height: 100%;
  }
`

const App = () => (
  <>
    <GlobalStyle />
    <MainContainer />
  </>
)

export default App
