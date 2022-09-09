import { Card } from './../Card'
import {Container, Header, AddButton} from './styles'
import { useDrag } from 'react-dnd';

type ICard = {
  title:string
  content:string
}
type Props = {
  title:string
  cards: ICard[]
  openCreationModal():void
}
export const List = ({title, cards, openCreationModal}:Props) =>{
  const [{isDragging}, dragRef] =  useDrag({
    item:{type:'List'},
    collect: monitor => ({
      isDragging:monitor.isDragging
    }),
    type:''
  })

  return(
    <Container ref={dragRef}>
      <Header>
        {title}
        {title === "To do" && <AddButton onClick={openCreationModal}>+</AddButton>}
      </Header>
      {cards.map(({title, content})=><Card title={title} content={content}/>)}
      
    </Container>
  )
}