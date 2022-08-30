import { Card } from './../Card'
import {Container, Header, AddButton} from './styles'
type ICard = {
  title:string
  content:string
}
type Props = {
  title:string,
  cards: ICard[]
}
export const List = ({title, cards}:Props) =>{

  return(
    <Container>
      <Header>
        {title}
        <AddButton>+</AddButton>
      </Header>
      {cards.map(({title, content})=><Card title={title} content={content}/>)}
    </Container>
  )
}