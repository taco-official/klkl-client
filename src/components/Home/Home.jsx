import React from 'react'
import styled from 'styled-components'
import Navbar from '../Navbar/NavBar'
import Contries from './Contries'
import Banner from './MainBanner'
import ReviewCarousels from './ReviewCarousel'
import theme from '../../style/theme'
import Footer from '../Footer/Footer'

const arr = [
  'https://i.ytimg.com/vi/bLj_mR4Fnls/maxresdefault.jpg',
  'https://i.ytimg.com/vi/bOJdHU99OO8/maxresdefault.jpg',
  'https://i.ytimg.com/vi/53lokkIhrYY/maxresdefault.jpg',
]

const Test = [
  {
    key: 'name',
    userId: 1,
    productId: 1,
    city: 'city',
    subcategory: 'subcategory',
    name: 'name',
    tags: ['tags'],
    likeCount: 42,
  },
  {
    key: 'name',
    userId: 1,
    productId: 1,
    city: 'city',
    subcategory: 'subcategory',
    name: 'name',
    tags: ['tags'],
    likeCount: 42,
  },
  {
    key: 'name',
    userId: 1,
    productId: 1,
    city: 'city',
    subcategory: 'subcategory',
    name: 'name',
    tags: ['tags'],
    likeCount: 42,
  },
  {
    key: 'name',
    userId: 1,
    productId: 1,
    city: 'city',
    subcategory: 'subcategory',
    name: 'name',
    tags: ['tags'],
    likeCount: 42,
  },
  {
    key: 'name',
    userId: 1,
    productId: 1,
    city: 'city',
    subcategory: 'subcategory',
    name: 'name',
    tags: ['tags'],
    likeCount: 42,
  },
  {
    key: 'name',
    userId: 1,
    productId: 1,
    city: 'city',
    subcategory: 'subcategory',
    name: 'name',
    tags: ['tags'],
    likeCount: 42,
  },
  {
    key: 'name',
    userId: 1,
    productId: 1,
    city: 'city',
    subcategory: 'subcategory',
    name: 'name',
    tags: ['tags'],
    likeCount: 42,
  },
  {
    key: 'name',
    userId: 1,
    productId: 1,
    city: 'city',
    subcategory: 'subcategory',
    name: 'name',
    tags: ['tags'],
    likeCount: 42,
  },
  {
    key: 'name',
    userId: 1,
    productId: 1,
    city: 'city',
    subcategory: 'subcategory',
    name: 'name',
    tags: ['tags'],
    likeCount: 42,
  },
  {
    key: 'name',
    userId: 1,
    productId: 1,
    city: 'city',
    subcategory: 'subcategory',
    name: 'name',
    tags: ['tags'],
    likeCount: 42,
  },
  {
    key: 'name',
    userId: 1,
    productId: 1,
    city: 'city',
    subcategory: 'subcategory',
    name: 'name',
    tags: ['tags'],
    likeCount: 42,
  },
  {
    key: 'name',
    userId: 1,
    productId: 1,
    city: 'city',
    subcategory: 'subcategory',
    name: 'name',
    tags: ['tags'],
    likeCount: 42,
  },
]

const flickityOptions = {
  wrapAround: false,
  setGallerySize: false,
  groupCells: 4,
  pageDots: false,
  resize: true,
  contain: true,
}

export default function Home() {
  return (
    <>
      <Navbar />
      <MainArea>
        <Contries />
        <Banner contents={arr} />
        <h2>인기 리뷰</h2>
        <ReviewCarousels
          contents={Test}
          options={flickityOptions}
        />
        <h2>신규 리뷰</h2>
        <ReviewCarousels
          contents={Test}
          options={flickityOptions}
        />
      </MainArea>
      <Footer />
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
`
