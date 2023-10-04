import { Link, useLocation } from 'react-router-dom'
import * as S from './styles'

export const Tabs = () => {
  const location = useLocation()

  console.log('LOG:', 'location', location);

  return <S.Container>
    <Link to={'/'}>
      <S.TabItem>
        {location.pathname === '/' && <S.Underline transition={{ type: "spring", bounce: 0.2, duration: 0.6 }} layoutId="bubble" />}
        <S.Text highlight={location.pathname === '/'}>Records</S.Text>
      </S.TabItem>
    </Link>
    <Link to={'/about'}>
      <S.TabItem>
        {location.pathname === '/about' && <S.Underline transition={{ type: "spring", bounce: 0.2, duration: 0.6 }} layoutId="bubble" />}
        <S.Text highlight={location.pathname === '/about'}>Sobre nós</S.Text>
      </S.TabItem>
    </Link>
  </S.Container>
}