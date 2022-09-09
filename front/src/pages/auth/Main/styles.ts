import styled, { css } from 'styled-components'
import MUISelect from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

export const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  opacity: 80%;
  position: relative;
`
export const Content = styled.div`
  background-color:gray;
  opacity: 50%; height: 99%;
  width: 99%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;


`
export const Container = styled.div`
  width:100vw;
  height: 92vh;
  display: flex;
  justify-content: center;
  align-items: center;


`
export const Header = styled.div`
  width: 100vw;
  background-color: gray;
  display: flex;
  justify-content: flex-end;
  height:8vh;
`
export const LogoutButton = styled.div`
  height:100%;
  background: black;
  color:gray;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 5rem;
  &:hover{
    opacity: 50%;
    cursor: pointer;
    color:white;
  }
`
export const CardCreationFormContainer = styled.div`
  height:calc(100% - 30px);
  max-width:100%;
  background-color: white;
  padding: 15px;
`
export const CardCreationForm = styled.div`
background-color: white;
width: 100%;
height:100%;
border: solid gray 1px;
border-radius: 15px;
display: flex;
justify-content: space-evenly;
flex-direction: column;
align-items: center;
`
export const CreationFormInput = styled.input``
export const CreationFormSelect = styled(MUISelect)``
export const CreationFormOption = styled(MenuItem)``
export const CreationFormButton =  styled.div``