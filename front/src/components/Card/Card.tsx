import React, {useRef} from 'react'
import { Container } from "./styles"
import { useDrag, useDrop } from 'react-dnd';
type Props = {
  title: string
  content: string
}
export const Card = ({ title, content }: Props) => {
	const [{ isDragging }, dragRef] = useDrag(
		() => ({
			type: 'card',
      item:{title, content},
			collect: (monitor) => ({
				isDragging: monitor.isDragging(),
			}),
		})
	)

  const [, dropRef] = useDrop({
    accept:'card',
    hover(cardBeingDragged:{title:string, content:string}, monitor){
      console.log('is hovering on a '+ JSON.stringify(cardBeingDragged.title))

    }
  })
  const ref = React.useRef<HTMLDivElement | null>(null)
  dragRef(dropRef(ref))
  return (
    <>
    {<Container 
    isDragging={isDragging}
    ref = {ref}>
      <h1>{title}</h1>
      <h1>{content}</h1>
    </Container>}
    </>

  )
}