import { useEffect, useState } from "react"
import styled from "styled-components"
import { LoginContext } from "../../context/LoginContext"
import { useContext } from "react"
import axios from "axios"
    
const LoginForm = () => {
  const [user, setUser] = useState({})
  const [email, setEmail] = useState('david.hs.cruz@gmail.com')
  const [senha, setSenha] = useState('12345')
  
  const { login, setLogin } = useContext(LoginContext)

    function fetchUser() {

      let data = JSON.stringify(user);

      let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'http://localhost:8000/login/',
      headers: { 
      'Content-Type': 'application/json'
      },
      data : data
      }
      
      axios.request(config)
      .then(async (response) => {
          await setLogin(true)
          console.log(JSON.stringify(response.data),login)
      })
      .catch(async (error) => {
          await setLogin(false)
          console.log(JSON.stringify(error.response.data),login)
      })
    }

    useEffect(() => {
      fetchUser()
    }, [user, login])


    const handleEmailChange = (event) => {
      setEmail(event.target.value)
    }
  
    const handlePasswordChange = (event) => {
      setSenha(event.target.value)
    }
  
    const handleSubmit = (event) => {
      event.preventDefault()
      setUser({ email , senha})
    }
  
    return (
      <LoginContainer>
        <form onSubmit={handleSubmit}>
          <StyledLabel>Email:</StyledLabel>
          <StyledInput type="email" value={email} onChange={handleEmailChange} />
    
          <StyledLabel>Senha:</StyledLabel>
          <StyledInput type="password" value={senha} onChange={handlePasswordChange} />
    
          <StyledButton type="submit">Entrar</StyledButton>
        </form>
      </LoginContainer>
    )
  }
  const LoginContainer = styled.section`
    width: 300px;
    height: 500px;
    position: absolute;
    top: 50%; 
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    justify-content: center;
    align-items: center;
  `
  const StyledLabel = styled.label`
    display: block;
    margin-bottom: 5px;
  `
  
  const StyledInput = styled.input`
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-bottom: 15px;
  `
  
  const StyledButton = styled.button`
    background-color: #4CAF50;
    color: white;
    padding: 12px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  `
  
  export default LoginForm
  