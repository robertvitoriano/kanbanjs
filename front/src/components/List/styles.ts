import styled from 'styled-components'
export const Container = styled.div`
  width: 15%;
  height: 70vh;
  background-color: white;
  border-radius: 15px;
  border:1px solid black;
`
export const Header = styled.div`
  width:100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: gray;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  color: white;
  opacity: 100%;
  margin-bottom: 10px;
  position: relative;

`
export const AddButton = styled.div`
  font-weight: bold;
  color: white;
  font-size: 10px;
  position: absolute;
  right: 10px;
  border: solid white 1px;
  border-radius: 50%;
  height: 10px;
  width: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 1px;
  &:hover{
    cursor: pointer;
  }
`