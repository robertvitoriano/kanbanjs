import { Container } from "./styles"
import { useDrag } from 'react-dnd';
type Props = {
  title: string
  content: string
}
export const Card = ({ title, content }: Props) => {
	const [{ isDragging }, drag] = useDrag(
		() => ({
			type: 'card',
			item: { card:'card' },
			collect: (monitor) => ({
				isDragging: monitor.isDragging(),
			}),
		})
	)
  return (
    <>
    {!isDragging && <Container ref = {drag}>
      <h1>{title}</h1>
      <h1>{content}</h1>
    </Container>}
    </>

  )
}