import { ReactComponentElement, ReactNode } from 'react'
import styled,{css} from 'styled-components'
interface ContainerProps  {
  isDragging:boolean,
  
}
export const Container = styled.div`
  background-color: white;
  height: 20vh;
  border:1px solid black;
  cursor: grab;
  ${(props:ContainerProps) => props.isDragging && css`
    border:2px dashed black;
    background-color: transparent;
    cursor:grabbing;

    p,img,span,h1,h2 {
      opacity: 0;
    }

  `}
`

