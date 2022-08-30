import { useNavigate } from 'react-router-dom'
import React, { useEffect, useState } from 'react';
import { Wrapper, Header, LogoutButton, Content, Container } from './styles'
import { List } from './../../../components/List';
import { getCards } from '../../../services/cardServices';
import { Modal } from '../../../components/Modal';
export const Main = () => {
  const navigate = useNavigate();

  const [cards, setCards] = useState<void>();
  const [showCreationModal, setShowCreationModal] = useState<boolean>(false)

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

  const closeCreationModal = async () => {
    setShowCreationModal(false)
  }

  const openCreationModal = async () => {
    setShowCreationModal(true)
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
            <List title="To do" cards={[{ title: "", content: "" }]} openCreationModal={openCreationModal} />
            <List title="Doing" cards={[{ title: "", content: "" }]} openCreationModal={openCreationModal}/>
            <List title="Done" cards={[{ title: "", content: "" }]} openCreationModal={openCreationModal}/>
            <List title="Blocked" cards={[{ title: "", content: "" }]} openCreationModal={openCreationModal}/>
          </Content>
        </Container>
      </Wrapper>
      <Modal
        width={200}
        height={200}
        title={'Add new Card'}
        show={showCreationModal}
        onClose={closeCreationModal}

      >algo</Modal>
    </>
  )
}