import React from 'react'
import styled from 'styled-components'
import { Divider } from 'antd'
import ReviewDetailFloatButton from './ReviewDetailFloatButton'
import ReviewImages from './ReviewImages'
import ReviewInfo from './ReviewInfo'
import UserProfile from '../UserProfile/UserProfile'
import Comment from '../Comment/Comment'
import theme from '../../style/theme'

const Example = {
  isSuccess: true,
  code: 'C000',
  data: {
    images: [
      'https://pbs.twimg.com/media/GGdunFEbcAAaqSA?format=jpg&name=4096x4096',
      'https://pbs.twimg.com/media/GGdunFEacAA1XEE?format=jpg&name=4096x4096',
      'https://i.ytimg.com/vi/Hoi0IAl74wY/maxresdefault.jpg',
    ],
    productId: 0,
    userId: 0,
    name: '쟈지 우유 푸딩',
    description: `"부채질이 나와 과즙을 규제의 보호는 밝히어 이름도 것 떠난다" 있는 만하는 길인 지난달도 하다. 참여하지 2023년 퍼뜨리는 그림에서 사회적 어느 일에 아예 이로 학생의 늘다. 폐기물도 미래가 조사에, 있다, 방수로 비화되다. 경기로 기초를 역할에, 진행되어 다음으로 그러는 전환하다, 하다. "간염을 조직이어 놓을 갖추면, 화학적보다 짧아 것 않다 다시 수학이면 있는다" 절차의 이용된, 치열하다 골인하여야 추첨을 좌우한다. 

간척지가 관하여야 중동을 이런, 불구하다 만들다. 예사로 화물선이 맞다 찾다, 않다. 특히 높다 하다 9명 그런 이렇다. "대북에 청소년은 그 이 낙후된 운동의, 정치권력은 것 주다 삼각의 부응하다" "경우에서 받다, 결정전을 지역은 쪽 있은 예비군은 우리와 방치되는 임립하는데 외면하라" "정치적 어시스트와 않지 새끼는 따른 있다" 침체와 공동이, 악화의 던 이미 정부를 있다.`,
    address: '서울특별시 마포구 월드컵로15길 8(망원동)',
    likeCount: 125,
    createdAt: '2024-08-01T06:01:52.192Z',
    price: 10000000,
    cityId: 401,
    subcategoryId: 501,
    currencyId: 1,
    tags: ['편의점', '고수'],
    rate: 5,
  },
  timestamp: '2024-08-01T14:56:20.919468',
}

export default function ReviewDetailPage() {
  return (
    <Wrapper>
      <ReviewDetailFloatButton />
      <ReviewImages imageURLs={Example.data.images} />
      <ReviewInfo review={Example.data} />
      <Divider />
      <Description>{Example.data.description}</Description>
      <Divider />
      <UserProfile />
      <Divider />
      <Comment />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 50%;
  min-width: 31.25rem;
  max-width: 50rem;
  padding: 0 3.125rem;
  margin: 0 auto;
  position: relative;

  @media (max-width: 600px) {
    .review--floatbutton {
      display: none;
    }
  }

  & > h2 {
    font-style: ${theme.style.mainEB};
    font-size: ${theme.size.titleSM};
    margin-bottom: 10px;
  }
`

const Description = styled.div`
  width: 95%;
  margin: 0 auto;
  font-size: ${theme.size.textSM};
  line-height: 1.5rem;
  white-space: pre-line;
  text-justify: none;
`
