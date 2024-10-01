import React from 'react'
import styled from 'styled-components'
import theme from '@styles/theme'
import Icons from '@components/Icons/Icons'

export default function LoadingPage() {
  return (
    <LoadingPageWrapper>
      <Plane>travel</Plane>
      <Cloud>cloud</Cloud>
    </LoadingPageWrapper>
  )
}

const LoadingPageWrapper = styled.div`
  text-align: center;
  align-content: center;
  position: relative;
  overflow: hidden;
  padding: 10% 0;

  width: 400px;
  height: 400px;
  margin: 0 auto;

  font-family: ${theme.style.bannerEN};
  font-weight: 700;
  font-size: 60px;
`

const Cloud = styled(Icons)`
  color: rgba(0, 0, 0, 0.1);
  text-shadow: 1px 1px 0.1px rgba(0, 0, 0, 0.01);
  font-size: 120px;

  animation: cloud 4s infinite;
  animation-timing-function: ease-in-out;

  @keyframes cloud {
    0% {
      transform: scale(1);
    }
    25% {
      transform: scale(1.2);
    }
    50% {
      transform: scale(1);
    }
    75% {
      transform: scale(1.5);
    }
    100% {
      transform: scale(1);
    }
  }
`

const Plane = styled(Icons)`
  position: absolute;
  font-size: 80px;
  color: ${theme.color.main};

  transform: rotate3d(1, 0, 1, 45deg);
  z-index: -10;

  animation: fly 2s infinite;
  animation-timing-function: ease-in-out;

  @keyframes fly {
    0% {
      left: -10%;
      top: 45%;
    }
    100% {
      left: 110%;
      top: 40%;
    }
  }
`
