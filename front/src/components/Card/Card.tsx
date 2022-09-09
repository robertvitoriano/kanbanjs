import { Container } from "./styles"
import { useDrag } from 'react-dnd';
type Props = {
  title: string
  content: string
}
export const Card = ({ title, content }: Props) => {
  const [{isDragging}, dragRef] =  useDrag({
    item:{type:'CARD'},
    collect: monitor => ({
      isDragging:monitor.isDragging
    }),
    type:''
  })
  return (
    <Container ref = {dragRef}>
      <h1>{title}</h1>
      <h1>{content}</h1>
    </Container>

  )
}