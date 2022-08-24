import styled from 'styled-components'
import MUIInput from '@mui/material/Input';

export const Wrapper = styled.div`
  background-color: gray;
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 80%;
`
export const Container = styled.div`
 height: 100vh;
 display: flex;
 justify-content: center;
 align-items:center;
 width:800px;
`
export const Content = styled.div`
  background-color: white;
  height: 60%;
  width:60%;
  border-radius: 15px;
  border:solid 3px black;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  @media (max-width: 1400px) {
  height: 90%;
  }
  @media (max-width: 600px) {
  height: 70%;
  width:90%;
  }
  `

export const Button = styled.div`
  border-radius: 1rem;
  padding-top: 15px;
  padding-bottom: 15px;
  width:9rem;
  text-align:center;
  font-size: 22px;


`

export const LoginButton =  styled(Button)`
  background-color: gray;
`

export const SignInButton = styled(Button)`
  background-color: aqua;
`

export const ButtonsContainer = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-around;
  align-items: center;
  height: 30%;
  flex-direction: column;
`

export const Input = styled(MUIInput)`
  height: 60px;
  width:80%;
`

export const InputsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100px;
  width: 100%;
`
export const Title = styled.h1`
  text-align: center;
`

export const KanbanLogo = styled.img``

export const Footer = styled.span``

export const HeartIcon = styled.span`
  font-size: 30px;
  color:purple;
`
