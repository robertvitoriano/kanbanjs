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
  const cardsMock = [
    {
      title: "teste cards",
      content: "My content"
    },
    {
      title: "teste cards",
      content: "My content"
    }
  ]
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
            <List title="To do" cards={cardsMock}/>
            <List title="Doing" cards={cardsMock} />
            <List title="Done" cards={cardsMock} />
            <List title="Blocked" cards={cardsMock} />
          </Content>
        </Container>
      </Wrapper>
    </>
  )
}