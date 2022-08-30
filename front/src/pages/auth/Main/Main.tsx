import { useNavigate } from 'react-router-dom'
import React, { useEffect, useState } from 'react';
import { Wrapper, Header, LogoutButton, Content, Container } from './styles'
import { List } from './../../../components/List';
import { getCards } from '../../../services/cardServices';

export const Main = () => {
  const navigate = useNavigate();

  const [cards, setCards] = useState<void>();

  useEffect(() => {
    fetchCards();
  }, [])

  const handleLogout = () => {
    for (const key of Object.keys(localStorage)) {
      localStorage.removeItem(key)
    }
    navigate("/")
    window.location.href = '/'

  }

  const fetchCards = async () => {
    const cardsResponse = await getCards();
    console.log(cardsResponse)
    setCards(cardsResponse)
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
            <List title="To do" cards={[{ title: "", content: "" }]} />
            <List title="Doing" cards={[{ title: "", content: "" }]} />
            <List title="Done" cards={[{ title: "", content: "" }]} />
            <List title="Blocked" cards={[{ title: "", content: "" }]} />
          </Content>
        </Container>
      </Wrapper>
    </>
  )
}