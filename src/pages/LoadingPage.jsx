import React from 'react'
import styled from 'styled-components'
import theme from '../styles/theme'
import Icons from '../components/Icons/Icons'

export default function LoadingPage() {
  return (
    <LoadingPageWrapper>
      Loading...
      <Plane>travel</Plane>
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

const Plane = styled(Icons)`
  position: absolute;
  font-size: 80px;
  color: ${theme.color.main};

  transform: rotate3d(1, 0, 1, 45deg);
  z-index: -10;

  animation: fly 2s infinite;

  @keyframes fly {
    0% {
      left: -10%;
      top: 45%;
      animation-timing-function: ease-in-out;
    }
    100% {
      left: 110%;
      top: 40%;
      animation-timing-function: ease-in-out;
    }
  }
`
