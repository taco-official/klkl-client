import React, { useState } from 'react'
import { createPortal } from 'react-dom'
import styled from 'styled-components'
import { FloatButton } from 'antd'
import { useNavigate } from 'react-router-dom'

import usePopularReview from '../../hooks/usePopularReview'
import useNewReview from '../../hooks/useNewReview'
import Icons from '../../components/Icons/Icons'
import MainBanner from './MainBanner'
import ReviewCarousels from './ReviewCarousel'
import theme from '../../styles/theme'

const ImageArr = [
  {
    name: 'Namibia',
    image:
      'https://m.worldvision.or.kr/story/wp-content/uploads/2016/05/img_num1_bg-759x500.jpg',
  },
  {
    name: 'Czech',
    image: `https://tourimage.interpark.com/BBS/Tour/FckUpload/201503/6356258929950226150.jpg`,
  },
  {
    name: 'Korea',
    image:
      'https://korean.visitseoul.net/data/kukudocs/seoul2133/20220526/202205261429481961.jpg',
  },
  {
    name: 'Japan',
    image: `https://i.namu.wiki/i/AIdI-1BBVmi_h5Kw6RIm-EGb0Z2VMRx3AXSsUMU0keeiRQ8K8q9PbPAU4gMXH7CIv59RU4raLLKmlChJCLFq8g.webp`,
  },
  {
    name: 'Russia',
    image: `https://i.namu.wiki/i/qg3ZaB1AY0IMplOH3d0pVqsHiIymCO7dTkO6eq4-2HzphGa24QipxUs_0xaK6b6Kw_vmfDApBRktGvwzJenqTA.webp`,
  },
]

export default function HomePage() {
  const [bannerImages] = useState(ImageArr)
  const navigate = useNavigate()

  const popularReview = usePopularReview()
  const newReview = useNewReview()

  return (
    <>
      <MainBanner urls={bannerImages} />
      <MainArea>
        <div>
          <h1>인기 리뷰</h1>
          <ReviewCarousels contents={popularReview} />
        </div>
        <div>
          <h1>신규 리뷰</h1>
          <ReviewCarousels contents={newReview} />
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
          onClick={() =>
            navigate('/submit', { state: { from: window.location.pathname } })
          }
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
