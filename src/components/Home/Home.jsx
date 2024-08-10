import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { FloatButton } from 'antd'
import { Link } from 'react-router-dom'
import Icons from '../Common/Icons'
import MainBanner from './MainBanner'
import ReviewCarousels from './ReviewCarousel'
import theme from '../../style/theme'

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

export default function Home() {
  const [bannerImages, setBannerImage] = useState(ImageArr)

  useEffect(() => {
    setBannerImage([...bannerImages])
  }, [])

  return (
    <MainArea>
      <MainBanner urls={bannerImages} />
      <h2>인기 리뷰</h2>
      <ReviewCarousels contents={Test} />
      <h2>신규 리뷰</h2>
      <ReviewCarousels contents={Test} />
      <Link to="submit">
        <CustomFloatButton
          icon={
            <Icons
              $empty
              $size="1.5em"
            >
              edit_square
            </Icons>
          }
          type="primary"
          tooltip="리뷰 작성하러 가기"
        />
      </Link>
    </MainArea>
  )
}

const MainArea = styled.div`
  width: 40%;
  min-width: 900px;
  margin: 0 auto;

  h2 {
    padding: 20px 0;
    border-bottom: 1px solid ${theme.color.lineGrey};
    font-family: ${theme.style.mainEB};
    font-size: ${theme.size.titleLG};
  }
`

const CustomFloatButton = styled(FloatButton)`
  inset-inline-end: 24;
  width: 3.4375rem;
  height: 3.4375rem;

  div {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`
