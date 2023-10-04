import { Player } from '@lottiefiles/react-lottie-player'
import { RankingItem } from '../Ranking'
import * as S from './styles'

export const RankingCard = ({ position, rankingItem }: { position: number, rankingItem: RankingItem }) => {

  return <S.Container position={position} variants={{
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: -100 },
  }} >
    {position === 0 && <Player
      autoplay
      loop
      src="src/lotties/animation_lnccoiul.json"
      style={{ height: '100px', width: '40px' }}
    />}
    {position !== 0 && <S.Position>{position + 1}</S.Position>}
    <S.Name>{rankingItem.name}</S.Name>
    <S.Time>{rankingItem.time}</S.Time>
  </S.Container>
}