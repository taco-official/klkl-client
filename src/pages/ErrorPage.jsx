import React from 'react'
import styled from 'styled-components'
import GlobalStyle from '../style/GlobalStyle'
import ErrorImage from '../images/err.jpg'
import theme from '../style/theme'

export default function ErrorPage() {
  return (
    <>
      <GlobalStyle />
      <ErrorBody>
        <img src={ErrorImage} />
        <div>
          <span>404 not found</span>
          <br />
          <span>페이지를 찾을 수 없습니다</span>
        </div>
      </ErrorBody>
    </>
  )
}

const ErrorBody = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;

  background-color: rgb(51, 51, 51);
  color: white;
  font-family: ${theme.style.bannerEN}, ${theme.style.bannerKO};
  font-weight: 700;
  font-size: 40px;
  align-items: center;

  div {
    margin-left: 5%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  img {
    width: 50%;
    aspect-ratio: 1/1;
  }
`
