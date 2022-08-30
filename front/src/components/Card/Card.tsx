import { Container } from "./styles"

type Props = {
  title: string
  content: string
}
export const Card = ({ title, content }: Props) => {
  return (
    <Container>
      <h1>{title}</h1>
      <h1>{content}</h1>
    </Container>

  )
}