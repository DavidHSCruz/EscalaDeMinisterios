import LoginForm from './components/LoginForm'
import { LoginContext } from './context/LoginContext'
import { useContext } from 'react'

function App() {
  const { login } = useContext(LoginContext)

  return (
    <>
      {
        !login ? <LoginForm /> : 'LOGADO'
      }
    </>
  )
}

export default App
