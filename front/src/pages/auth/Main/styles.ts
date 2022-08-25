import styled, {css} from 'styled-components'
import MUIInput from '@mui/material/Input';

export const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 80%;
  position: relative;
`
export const Container = styled.div`
 height: 100vh;
 display: flex;
 justify-content: center;
 align-items:center;
 width:800px;
`
export const Header = styled.div`
  width: 100vw;
  background-color: gray;
  position: absolute;
  top:0;
  display: flex;
  justify-content: flex-end;
`
export const LogoutButton = styled.div`
  height:100%;
  padding:20px;
  background: black;
  color:gray;

  &:hover{
    opacity: 50%;
    cursor: pointer;
    color:white;
  }
`