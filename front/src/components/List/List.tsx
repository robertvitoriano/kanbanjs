import { Card } from './../Card'
import {Container, Header, AddButton} from './styles'
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

  return(
    <Container>
      <Header>
        {title}
        <AddButton onClick={openCreationModal}>+</AddButton>
      </Header>
      {cards.map(({title, content})=><Card title={title} content={content}/>)}
      
    </Container>
  )
}