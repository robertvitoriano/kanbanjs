import { Translucent, Wrapper, Container, Header, Content, CloseButton } from './styles'

export const Modal = ({ children, width, height, title, onClose, show }: any) => {

  return (
    <>
      {show && <Wrapper>
        <Container width={width} height={height}>
          <Header>
            {title}
            <CloseButton onClick={onClose} > X </CloseButton>
          </Header>
          <Content>
            {children}
          </Content>
        </Container>
        <Translucent onClick={onClose} />
      </Wrapper>}
    </>

  )
}