
import { Container, Wrapper, Content, Input, InputsContainer, Title, KanbanLogo, LoginButton,SignInButton, ButtonsContainer, Footer, HeartIcon } from './styles'
import kanbanLogoSrc from './../../../assets/kanbanLogo.png'
export const Login = () => {

  return (
    <Wrapper>
      <Container>
        <Content>
          <KanbanLogo src={kanbanLogoSrc} width ={"100px"}/>
          <Title>Welcome  to KanbanJs</Title>
          <InputsContainer>
            <Input placeholder='enter your username' />
            <Input placeholder='enter your password' type="password" />
          </InputsContainer>
          <ButtonsContainer>
            <LoginButton>Login!</LoginButton>
            <SignInButton>Sign In!</SignInButton>
          </ButtonsContainer>
          <Footer>Made with <HeartIcon>&hearts;</HeartIcon> by Robert Vitoriano</Footer>
        </Content>
      </Container>
    </Wrapper>
  )
}