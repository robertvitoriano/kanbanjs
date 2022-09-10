import React, {useRef, useState} from 'react'
import { Container } from "./styles"
import { useDrag, useDrop } from 'react-dnd';
type Props = {
  title: string
  content: string
  id:string
}
export const Card = ({ title, content, id }: Props) => {
  const [isBeingHovered, setIsBeinHovered] = useState<boolean>(false)
	const [{ isDragging }, dragRef] = useDrag(
		() => ({
			type: 'card',
      item:{title, content, id},
			collect: (monitor) => ({
				isDragging: monitor.isDragging(),
			}),
		})
	)

  const [, dropRef] = useDrop({
    accept:'card',
    hover(cardBeingDragged:Props, monitor){
      console.log(id)
    }
  })
  const ref = React.useRef<HTMLDivElement | null>(null)
  dragRef(dropRef(ref))
  return (
    <>
    {<Container 
    isDragging={isDragging}
    isBeingHovered={isBeingHovered}
    ref = {ref}>
      <h1>{title}</h1>
      <h1>{content}</h1>
    </Container>}
    </>

  )
}