import styled from 'styled-components'

interface ContainerProps {
  width: number
  height: number
}


export const Wrapper = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  width: 100vw;
  height: 100vh;
`

export const Container = styled.div<ContainerProps>`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  z-index: 999;
  position: relative;
`
export const Content = styled.div`
  height: 100%;
  background-color: white;
  border: solid black 1px;

`
export const Translucent = styled.div`
  position: absolute;
  background-color: black;
  width: 100vw;
  height: 100vh;
  top: 0;
  opacity: 50%;
`
export const Header = styled.div`
 width: 100%;
 background-color: gray;
 border-top-left-radius: 15px;
 border-top-right-radius: 15px;
 height:3rem;
 font-size: 1rem;
 font-weight: bold;
 text-align: center ;
 display: flex;
 justify-content: space-around ;
 align-items: center;
`

export const CloseButton = styled.div`

 &:hover{
  cursor: pointer;
 }

`