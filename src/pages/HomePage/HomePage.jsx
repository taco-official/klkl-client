import React, { useState } from 'react'
import styled from 'styled-components'
import { createPortal } from 'react-dom'
import { useNavigate, useLoaderData } from 'react-router-dom'
import { FloatButton } from 'antd'
import theme from '@styles/theme'
import useLoginStore from '@stores/useLoginStore'
import useLoginModal from '@hooks/useLoginModal'
import Icons from '@components/Icons/Icons'
import MainBanner from './MainBanner'
import ReviewCarousels from './ReviewCarousel'

const bannerCountries = [
  {
    id: 2,
    name: '중국',
    image: `https://del5h2y0q6wga.cloudfront.net/country_images/china.jpg`,
  },
  {
    id: 1,
    name: '일본',
    image: 'https://del5h2y0q6wga.cloudfront.net/country_images/japan.jpg',
  },
  {
    id: 5,
    name: '베트남',
    image: 'https://del5h2y0q6wga.cloudfront.net/country_images/vietnam.jpg',
  },
  {
    id: 6,
    name: '필리핀',
    image: `https://del5h2y0q6wga.cloudfront.net/country_images/philippines.jpg`,
  },
  {
    id: 7,
    name: '태국',
    image: `https://del5h2y0q6wga.cloudfront.net/country_images/thailand.jpg`,
  },
]

export default function HomePage() {
  const { popularReviews, newReviews } = useLoaderData()
  const isLogin = useLoginStore((state) => state.isLogin)
  const [bannerImages] = useState(bannerCountries)
  const navigate = useNavigate()
  const popLoginModal = useLoginModal()

  return (
    <>
      <MainBanner urls={bannerImages} />
      <MainArea>
        <div>
          <h1>인기 리뷰</h1>
          <ReviewCarousels contents={popularReviews.data.content} />
        </div>
        <div>
          <h1>신규 리뷰</h1>
          <ReviewCarousels contents={newReviews.data.content} />
        </div>
      </MainArea>
      {createPortal(
        <CustomFloatButton
          icon={
            <Icons
              $empty
              $size="1.5em"
            >
              edit_square
            </Icons>
          }
          onClick={() => {
            if (isLogin)
              navigate('/submit', { state: { from: window.location.pathname } })
            else popLoginModal()
          }}
          type="primary"
          tooltip="리뷰 작성하러 가기"
          style={{ bottom: '10px' }}
        />,
        document.getElementById('root-aside')
      )}
    </>
  )
}

const MainArea = styled.div`
  width: 40%;
  min-width: 900px;
  min-height: 90vh;
  padding: 0 3.125rem;
  margin: 0 auto;

  h1 {
    padding: 20px 0;
    border-bottom: 1px solid ${theme.color.lineGrey};
    font-family: ${theme.style.mainEB};
    font-size: ${theme.size.titleLG};
  }

  & > div {
    margin: 1.875rem 0;
  }
`

const CustomFloatButton = styled(FloatButton)`
  width: 3.4375rem;
  height: 3.4375rem;
  margin-block-end: 30px;

  div {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`
