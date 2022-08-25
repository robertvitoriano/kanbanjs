import React, { useEffect, useState, } from 'react'
import { useNavigate } from "react-router-dom"
import {
  Container,
  Wrapper,
  Content,
  Input,
  InputsContainer,
  Title,
  KanbanLogo,
  LoginButton,
  SignInButton,
  ButtonsContainer,
  Footer,
  HeartIcon,
  ReturnButtonContainer,
  ReturnButtonIcon,
  ReturnButton,
} from './styles'
import kanbanLogoSrc from './../../../assets/kanbanLogo.png'
import { UserService } from '../../../services/userService'
export const Login = () => {
  const [isLoggingIn, setIsLoggingIn] = useState(true)
  const [isSigningIn, setIsSigningIn] = useState(false)
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const navigate = useNavigate();

  useEffect(() => {
    console.log(name)
    console.log(email)
  }, [name, email])
  const handleReturnButton = () => {
    setIsLoggingIn(true)
    setIsSigningIn(false)
  }
  const handleSignInFormChange = () => {
    setIsLoggingIn(false)
    setIsSigningIn(true)
  }
  const handleLogin = async () => {
    const userService = new UserService()
    setIsLoading(true)
    await userService.login(username, password)
    navigate({
      pathname:'/home'
    })

  }

  const handleSignIn = async () => {
    const userService = new UserService()
    setIsLoading(true)
    await userService.signUp({
      email,
      name,
      password,
      username
    })
    navigate('/')
  }
  return (
    <Wrapper>
      <Container>
        <Content>
          <KanbanLogo src={kanbanLogoSrc} width={"100px"} />
          <Title>Welcome  to KanbanJs</Title>
          {isLoggingIn ?
            <>
              <InputsContainer>
                <Input placeholder='enter your username' required value={username} onChange={(e) => setUsername(e.target.value)} />
                <Input placeholder='enter your password' required value={password} type="password" onChange={(e) => setPassword(e.target.value)} />
              </InputsContainer>
              <ButtonsContainer>
                <LoginButton onClick={handleLogin} >Login</LoginButton>
                <SignInButton onClick={handleSignInFormChange}>Sign In</SignInButton>
              </ButtonsContainer>
            </> : isSigningIn ?
              <>
                <InputsContainer>
                  <Input placeholder='enter your name' required value={name} onChange={(e) => setName(e.target.value)} />
                  <Input placeholder='enter your username' required value={username} onChange={(e) => setUsername(e.target.value)} />
                  <Input placeholder='enter your email' required value={email} onChange={(e) => setEmail(e.target.value)} />
                  <Input placeholder='enter your password' required value={password} type="password" onChange={(e) => setPassword(e.target.value)} />
                </InputsContainer>
                <ButtonsContainer>
                  <SignInButton onClick={handleSignIn} >Sign In</SignInButton>
                  <ReturnButtonContainer>
                    <ReturnButtonIcon src=""></ReturnButtonIcon>
                    <ReturnButton onClick={handleReturnButton}>Return</ReturnButton>
                  </ReturnButtonContainer>
                </ButtonsContainer>
              </> : ''}
          <Footer>Made with <HeartIcon>&hearts;</HeartIcon> by Robert Vitoriano</Footer>

        </Content>
      </Container>

    </Wrapper>
  )
}