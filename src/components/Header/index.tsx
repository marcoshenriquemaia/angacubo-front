import { ContainerCenter } from '../Container/styles'
import Logo from '../../assets/logo.jpg'
import * as S from './styles'
import { Tabs } from '../Tabs'

export const Header = () => {
  return <ContainerCenter>
    <S.Container>
      <S.Logo src={Logo}></S.Logo>
      <Tabs></Tabs>
    </S.Container>
  </ContainerCenter>
}