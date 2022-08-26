type Props = {
  title: string
  content: string
}
export const Card = ({ title, content }: Props) => {
  return (
    <>
      <h1>{title}</h1>
      <h1>{content}</h1>
    </>

  )
}