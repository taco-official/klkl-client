import React, { useState, useCallback } from 'react'
import styled from 'styled-components'
import imgLogo from '../../images/navbar/navImages'
import theme from '../../style/theme'
import LoginModal from '../Common/LoginModal'
import NavList from './NavList'

export default function NavBar() {
  const [isModalOpen, changeModalState] = useState(false)

  const openModal = () => changeModalState(true)
  const closeModal = useCallback(() => changeModalState(false), [])

  return (
    <Header>
      <MyNav>
        <Logo>
          <img
            src={imgLogo}
            alt=""
          />
          <h1>끼룩끼룩</h1>
        </Logo>
        <NavList />
        <button
          type="button"
          onClick={openModal}
        >
          로그인
        </button>
      </MyNav>
      <LoginModal
        isModalOpen={isModalOpen}
        closeModal={closeModal}
      />
    </Header>
  )
}

const Header = styled.header`
  border-bottom: 1px solid #cccccc;
`

const MyNav = styled.nav`
  width: 80%;
  min-width: 600px;

  padding: 0 5%;
  margin: 0 auto;
  height: 60px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    width: 3.5rem;
    height: 1.875rem;
    font-family: ${theme.style.mainBold};
    font-size: ${theme.size.textXS};
    color: white;
    background-color: ${theme.color.main};
    border-radius: 8px;
    border: none;
    cursor: pointer;
  }
`

const Logo = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  img {
    width: 30px;
  }

  h1 {
    margin-left: 10px;
    font-size: ${theme.size.titleXL};
    font-family: ${theme.style.logo};
  }
`
