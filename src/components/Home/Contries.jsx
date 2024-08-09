import React, { useState } from 'react'
import styled from 'styled-components'
import theme from '../../styles/theme'

const ImageArr = [
  {
    name: '나미비아',
    image:
      'https://m.worldvision.or.kr/story/wp-content/uploads/2016/05/img_num1_bg-759x500.jpg',
  },
  {
    name: '프라하',
    image: `https://tourimage.interpark.com/BBS/Tour/FckUpload/201503/6356258929950226150.jpg`,
  },
  {
    name: '칸코쿠',
    image:
      'https://korean.visitseoul.net/data/kukudocs/seoul2133/20220526/202205261429481961.jpg',
  },
  {
    name: '닛뽄',
    image: `https://i.namu.wiki/i/AIdI-1BBVmi_h5Kw6RIm-EGb0Z2VMRx3AXSsUMU0keeiRQ8K8q9PbPAU4gMXH7CIv59RU4raLLKmlChJCLFq8g.webp`,
  },
  {
    name: '르으씨아',
    image: `https://i.namu.wiki/i/qg3ZaB1AY0IMplOH3d0pVqsHiIymCO7dTkO6eq4-2HzphGa24QipxUs_0xaK6b6Kw_vmfDApBRktGvwzJenqTA.webp`,
  },
]

export default function Contries() {
  const [countryInfo] = useState(ImageArr)

  return (
    <ImageWrapper>
      {countryInfo.map((country) => (
        <CountryImgae $url={country.image}>{country.name}</CountryImgae>
      ))}
    </ImageWrapper>
  )
}

const ImageWrapper = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: space-evenly;
  margin: 30px auto;

  :nth-child(even) {
    align-self: flex-end;
  }

  :nth-child(odd) {
    align-self: flex-start;
  }
`

const CountryImgae = styled.div`
  width: 250px;
  aspect-ratio: 1 / 1;
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  color: white;
  font-family: ${theme.style.mainEB};
  font-size: ${theme.size.titleMD};

  background-image: ${({ $url }) => `url(${$url})`};
  background-color: rgba(0, 0, 0, 0.3);
  background-blend-mode: multiply;
  background-size: 150%;
  background-position: center;
  background-repeat: no-repeat;

  transition: ease-in-out 2s;

  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.3);

  &:hover {
    background-size: 200%;
  }
`
