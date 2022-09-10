import { Card } from './../Card'
import {Container, Header, AddButton} from './styles'

type ICard = {
  title:string
  content:string
  id:string
}
type Props = {
  title:string
  cards: ICard[]
  openCreationModal():void
}
export const List = ({title, cards, openCreationModal}:Props) =>{


  return(
    <Container >
      <Header>
        {title}
        {title === "To do" && <AddButton onClick={openCreationModal}>+</AddButton>}
      </Header>
      {cards.map(({title, content, id})=><Card key={id} title={title} content={content} id={id}/>)}
      
    </Container>
  )
}