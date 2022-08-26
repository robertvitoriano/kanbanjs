import { Wrapper, Header, LogoutButton, Content, Container } from './styles'
import { useNavigate } from 'react-router-dom'
import { List } from './../../../components/List';

export const Main = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    for (const key of Object.keys(localStorage)) {
      localStorage.removeItem(key)
    }
    navigate("/")
    window.location.href = '/'

  }
  return (
    <>
      <Wrapper>
        <Header>
          <LogoutButton onClick={handleLogout}>
            Logout
          </LogoutButton>
        </Header>
        <Container >
          <Content>
            <List/>
            <List/>
            <List/>
            <List/>
          </Content>
        </Container>
      </Wrapper>
    </>
  )
}