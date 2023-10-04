import { RankingCard } from "../RankingCard"
import * as S from './styles'

export interface RankingItem {
  name: string,
  time: string
}

interface RankingProps {
  title: string;
  ranking: RankingItem[]
}

export const Ranking = ({ title, ranking }: RankingProps) => {
  return <div>
    <S.Title>{title}</S.Title>
    <S.Container initial="hidden" animate="visible" variants={{
      visible: {
        opacity: 1, transition: {
          when: "beforeChildren",
          staggerChildren: 0.1,
        },
      },
      hidden: {
        opacity: 0, transition: {
          when: "afterChildren",
        }
      },
    }}>
      {ranking.map((item, index) =>
        <RankingCard position={index} rankingItem={item} />
      )}
    </S.Container>
  </div>
}