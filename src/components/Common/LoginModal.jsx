import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { IoIosClose } from 'react-icons/io'
import { KakaoLogo, NaverLogo } from '../../images/logos'
import theme from '../../styles/theme'

export default function LoginModal({ isModalOpen, closeModal }) {
  return (
    isModalOpen && (
      <ModalWindow
        onClick={(e) => {
          if (e.target === e.currentTarget) closeModal()
        }}
      >
        <ModalInside>
          <IoIosClose onClick={closeModal} />
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
  )
}
LoginModal.propTypes = {
  isModalOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
}

const ModalWindow = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;

  z-index: 100;

  background-color: rgba(0, 0, 0, 0.1);
`

const ModalInside = styled.div`
  width: 25rem;
  height: 21.875rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  border-radius: 0.75rem;
  background-color: white;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);

  padding: 1.875rem 0;
  z-index: 100;

  @keyframes openModal {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  animation: openModal ease-in-out 0.3s;

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

const LoginButton = styled.button`
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

  border: none;
  border-radius: 0.75rem;

  svg {
    height: 2.5rem;
    color: black;
  }
`
