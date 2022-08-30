import styled, { css } from 'styled-components'
import MUIInput from '@mui/material/Input';

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
export const CardCreationForm = styled.div``
export const CreationFormInput = styled.div``
export const CreationFormSelect = styled.select``
export const CreationFormButton =  styled.div``