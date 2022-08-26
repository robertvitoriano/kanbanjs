import { Card } from './../Card'
import {Container, Header} from './styles'
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
      <Header>{title}</Header>
      {cards.map(({title, content})=><Card title={title} content={content}/>)}
    </Container>
  )
}