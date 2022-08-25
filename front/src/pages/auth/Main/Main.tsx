import { Wrapper, Header, LogoutButton } from './styles'
import { useNavigate } from 'react-router-dom'

export const Main = () => {
  const navigate = useNavigate();
  const handleLogout = () =>{
    for( const key of Object.keys(localStorage)){
      localStorage.removeItem(key)
    }
    navigate("/")

  }
  return (
    <>
      <Wrapper>
        <Header>
          <LogoutButton onClick={handleLogout}>
            Logout
          </LogoutButton>
        </Header>
      </Wrapper>
    </>
  )
}