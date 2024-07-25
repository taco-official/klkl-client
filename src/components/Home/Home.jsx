import React from 'react'
import styled from 'styled-components'
import Navbar from '../Navbar/NavBar'
import Contries from './Contries'
import Banner from './MainBanner'
import { ReviewCarousels, ReviewCarousels2 } from './ReviewCarousel'
import theme from '../../style/theme'

const arr = [
  'https://i.ytimg.com/vi/bLj_mR4Fnls/maxresdefault.jpg',
  'https://i.ytimg.com/vi/bOJdHU99OO8/maxresdefault.jpg',
  'https://i.ytimg.com/vi/53lokkIhrYY/maxresdefault.jpg',
]

const Test = [
  {
    key: 'content.name',
    userId: 1,
    productId: 1,
    city: 'content.city',
    subcategory: 'content.subcategory',
    name: 'content.name',
    tags: ['content.tags'],
    likeCount: 42,
  },
  {
    key: 'content.name',
    userId: 1,
    productId: 1,
    city: 'content.city',
    subcategory: 'content.subcategory',
    name: 'content.name',
    tags: ['content.tags'],
    likeCount: 42,
  },
  {
    key: 'content.name',
    userId: 1,
    productId: 1,
    city: 'content.city',
    subcategory: 'content.subcategory',
    name: 'content.name',
    tags: ['content.tags'],
    likeCount: 42,
  },
  {
    key: 'content.name',
    userId: 1,
    productId: 1,
    city: 'content.city',
    subcategory: 'content.subcategory',
    name: 'content.name',
    tags: ['content.tags'],
    likeCount: 42,
  },
  {
    key: 'content.name',
    userId: 1,
    productId: 1,
    city: 'content.city',
    subcategory: 'content.subcategory',
    name: 'content.name',
    tags: ['content.tags'],
    likeCount: 42,
  },
  {
    key: 'content.name',
    userId: 1,
    productId: 1,
    city: 'content.city',
    subcategory: 'content.subcategory',
    name: 'content.name',
    tags: ['content.tags'],
    likeCount: 42,
  },
  {
    key: 'content.name',
    userId: 1,
    productId: 1,
    city: 'content.city',
    subcategory: 'content.subcategory',
    name: 'content.name',
    tags: ['content.tags'],
    likeCount: 42,
  },
  {
    key: 'content.name',
    userId: 1,
    productId: 1,
    city: 'content.city',
    subcategory: 'content.subcategory',
    name: 'content.name',
    tags: ['content.tags'],
    likeCount: 42,
  },
  {
    key: 'content.name',
    userId: 1,
    productId: 1,
    city: 'content.city',
    subcategory: 'content.subcategory',
    name: 'content.name',
    tags: ['content.tags'],
    likeCount: 42,
  },
  {
    key: 'content.name',
    userId: 1,
    productId: 1,
    city: 'content.city',
    subcategory: 'content.subcategory',
    name: 'content.name',
    tags: ['content.tags'],
    likeCount: 42,
  },
]

export default function Home() {
  return (
    <>
      <Navbar />
      <MainArea>
        <Contries />
        <Banner contents={arr} />
        <h2>인기 리뷰</h2>
        <ReviewCarousels contents={Test} />
        <h1>인기 리뷰</h1>
        <ReviewCarousels2 contents={Test} />
      </MainArea>
    </>
  )
}

const MainArea = styled.main`
  width: 80%;
  min-width: 1100px;
  margin: 0 auto;

  h2 {
    padding: 20px 0;
    border-bottom: 1px solid ${theme.color.lineGrey};
    font-family: ${theme.style.mainEB};
    font-size: ${theme.size.titleLG};
  }

  h1 {
    padding: 10px 0;
    font-family: ${theme.style.mainEB};
    font-size: ${theme.size.titleLG};
  }
`
