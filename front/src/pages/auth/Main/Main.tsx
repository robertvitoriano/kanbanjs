import { useNavigate } from 'react-router-dom'
import React, { useEffect, useState } from 'react';
import { SelectChangeEvent } from '@mui/material/Select';
import {
  Wrapper,
  Header,
  LogoutButton,
  Content,
  Container,
  CardCreationForm,
  CreationFormButton,
  CreationFormInput,
  CreationFormSelect,
  CardCreationFormContainer,
  CreationFormOption

} from './styles'
import { List } from './../../../components/List';
import { getCards } from '../../../services/cardServices';
import { Modal } from '../../../components/Modal';
import { DndProvider } from "react-dnd";
import  {HTML5Backend}  from "react-dnd-html5-backend";
export const Main = () => {
  const navigate = useNavigate();

  const [cards, setCards] = useState<void>();
  const [showCreationModal, setShowCreationModal] = useState<boolean>(false)
  const [ĺistType, setListType] = useState("")

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
  const handleChangeListType = (event: SelectChangeEvent) => {
    setListType(event.target.value as string);
  }


  return (
    <>
      <DndProvider backend={HTML5Backend}>
        <Wrapper>
          <Header>
            <LogoutButton onClick={handleLogout}>
              Logout
            </LogoutButton>
          </Header>
          <Container >
            <Content>
              <List title="To do" cards={[{ title: "", content: "" }]} openCreationModal={openCreationModal} />
              <List title="Doing" cards={[{ title: "", content: "" }]} openCreationModal={openCreationModal} />
              <List title="Done" cards={[{ title: "", content: "" }]} openCreationModal={openCreationModal} />
              <List title="Blocked" cards={[{ title: "", content: "" }]} openCreationModal={openCreationModal} />
            </Content>
          </Container>
        </Wrapper>
      </DndProvider>
      <Modal
        width={300}
        height={300}
        title={'Add new Card'}
        show={showCreationModal}
        onClose={closeCreationModal}

      >
        <CardCreationFormContainer className="card creationForm">
          <CardCreationForm>
            <CreationFormInput />
            <CreationFormInput />
            <CreationFormSelect

              value={ĺistType}
              label="List Type"
              //@ts-ignore
              onChange={handleChangeListType}>
              <CreationFormOption value={10}>Ten</CreationFormOption>
              <CreationFormOption value={20}>Twenty</CreationFormOption>
              <CreationFormOption value={30}>Thirty</CreationFormOption>
            </CreationFormSelect>
            <CreationFormButton />
          </CardCreationForm>
        </CardCreationFormContainer>
      </Modal>
    </>
  )
}