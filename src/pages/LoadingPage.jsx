import React from 'react'
import styled from 'styled-components'
import theme from '../styles/theme'

export default function LoadingPage() {
  return (
    <LoadingPageWrapper>
      <Circle />
      <Shadow />
    </LoadingPageWrapper>
  )
}

const LoadingPageWrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
`

const Circle = styled.div`
  transform: translate(-50%, -100%);
  position: absolute;
  top: 50%;
  left: calc(50%);
  background-color: ${theme.color.main};
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 100%;
  z-index: 100;
  animation: bounce 1s infinite;

  @keyframes bounce {
    0% {
      top: 40%;
      animation-timing-function: ease-in;
    }
    50% {
      top: 48.5%;
      height: 40px;
      animation-timing-function: ease-out;
    }
    55% {
      top: 50%;
      height: 15px;
      animation-timing-function: ease-in;
    }
    65% {
      top: 48.5%;
      height: 40px;
      animation-timing-function: ease-out;
    }
    95% {
      top: 40%;
      animation-timing-function: ease-in;
    }
    100% {
      top: 40%;
      animation-timing-function: ease-in;
    }
  }
`

const Shadow = styled.div`
  position: absolute;
  width: 40px;
  height: 5px;
  left: calc(50% - 20px);
  bottom: 50%;
  border-radius: 100%;
  background-color: rgba(0, 0, 0, 0.2);

  animation: shadow 1s infinite;

  @keyframes shadow {
    0% {
      transform: scale(0.1);
      background-color: rgba(0, 0, 0, 0.1);
      animation-timing-function: ease-in;
    }
    50% {
      transform: scale(1);
      background-color: rgba(0, 0, 0, 0.2);
      animation-timing-function: ease-out;
    }
    55% {
      transform: scale(1);
      background-color: rgba(0, 0, 0, 0.2);
      animation-timing-function: ease-in;
    }
    65% {
      transform: scale(0.5);
      background-color: rgba(0, 0, 0, 0.15);
      animation-timing-function: ease-out;
    }
    95% {
      transform: scale(0.1);
      background-color: rgba(0, 0, 0, 0.1);
      animation-timing-function: ease-in;
    }
    100% {
      transform: scale(0.1);
      background-color: rgba(0, 0, 0, 0.1);
      animation-timing-function: ease-in;
    }
  }
`
