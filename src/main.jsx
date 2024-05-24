import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import GlobalStyleReset from './GlobalStyle.jsx'
import { LoginProvider } from './context/LoginContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyleReset />
    <LoginProvider>
      <App />
    </LoginProvider>
  </React.StrictMode>,
)
