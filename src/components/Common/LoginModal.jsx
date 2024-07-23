import React from 'react'
import styled from 'styled-components'
// import PropTypes from 'prop-types'
import { IoIosClose } from 'react-icons/io'
import { KakaoLogo, NaverLogo } from '../../images/logos'
import theme from '../../style/theme'

export default function LoginModal() {
  const closeModalButton = () => document.getElementById('login-modal').close()

  return (
    <ModalWindow onClick={closeModalButton}>
      <ModalInside>
        <IoIosClose onClick={closeModalButton} />
        <h2>로그인</h2>
        <img
          style={{ width: '70%' }}
          src="https://dimg.donga.com/wps/NEWS/IMAGE/2023/05/25/119467615.1.jpg"
        />
        <div>
          <LoginButton $platform="naver">
            <NaverLogo /> 네이버 로그인
          </LoginButton>
          <LoginButton $platform="kakao">
            <KakaoLogo />
            카카오 로그인
          </LoginButton>
        </div>
      </ModalInside>
    </ModalWindow>
  )
}

const ModalWindow = styled.dialog.attrs({
  id: 'login-modal',
})`
  width: 25rem;
  height: 30rem;

  border-radius: 15px;
  border: 0;

  box-shadow: 0 0.0625rem 0.3125rem grey;
  padding: 0;
`

const ModalInside = styled.div`
  width: 100%;
  height: 80%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  padding: 10% 0;

  h2 {
    font-family: ${theme.style.logo};
    font-size: 2.25rem;
  }

  & > div {
    width: 80%;
    display: flex;
    flex-direction: column;
  }

  & > svg {
    width: 30px;
    height: 30px;

    cursor: pointer;
    transition: all 0.3s;

    position: absolute;
    top: 10px;
    right: 10px;

    &:hover {
      rotate: 90deg;
    }

    &:not(:hover) {
      rotate: -90deg;
    }
  }
`

const LoginButton = styled.div`
  ${({ $platform }) => {
    return $platform === 'naver'
      ? 'background-color: rgb(3, 199, 90); color: white;'
      : 'background-color: rgb(254, 229, 0);'
  }}

  width: 100%;
  height: 3.125rem;
  margin: 5px;

  font-family: ${theme.style.mainBold};

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 0.75rem;

  svg {
    height: 2.5rem;
    color: black;
  }
`
