import { Container } from "./styles"
import { useDrag } from 'react-dnd';
type Props = {
  title: string
  content: string
}
export const Card = ({ title, content }: Props) => {
	const [{ isDragging }, dragRef] = useDrag(
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
    {!isDragging && <Container ref = {dragRef}>
      <h1>{title}</h1>
      <h1>{content}</h1>
    </Container>}
    </>

  )
}