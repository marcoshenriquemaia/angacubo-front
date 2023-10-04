import { ContainerCenter } from "../../components/Container/styles"
import { Ranking } from "../../components/Ranking"
import { rankingAo3, rankingSingle } from "../../data"
import * as S from './styles'

export const Home = () => {
  return (
    <ContainerCenter>
      <S.Main>
        <Ranking title="Single 3x3x3" ranking={rankingSingle} />
        <Ranking title="Single AO3" ranking={rankingAo3} />
      </S.Main>
    </ContainerCenter>
  )
}