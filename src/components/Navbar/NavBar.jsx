import React from 'react'
import { createPortal } from 'react-dom'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { useModalStore } from './stores/navbarStores'
import theme from '../../styles/theme'
import LoginModal from './components/LoginModal'
import SearchModal from './components/SearchModal'
import NavList from './NavList'

export default function NavBar() {
  const setLoginModalState = useModalStore((state) => state.setLoginModalState)

  return (
    <>
      <Header>
        <MyNav>
          <Link to="/">
            <h1>끼룩끼룩</h1>
          </Link>
          <NavList />
          <LoginButton
            onClick={() => {
              setLoginModalState(true)
            }}
          >
            로그인
          </LoginButton>
        </MyNav>
      </Header>
      {createPortal(<LoginModal />, document.getElementById('root-aside'))}
      {createPortal(<SearchModal />, document.getElementById('root-aside'))}
    </>
  )
}

const Header = styled.header`
  position: sticky;
  position: -webkit-sticky;
  top: 0;
  z-index: 100;
`

const MyNav = styled.nav`
  width: 90%;
  min-width: 600px;
  height: 60px;

  padding: 0 5%;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${theme.color.lineGrey};
  background-color: white;

  a {
    font-family: ${theme.style.logo};
    font-size: 30px;
    color: rgba(0, 0, 0, 1);
  }
`

const LoginButton = styled.button.attrs({ type: 'button' })`
  width: 3.5rem;
  height: 1.875rem;
  font-family: ${theme.style.mainBold};
  font-size: ${theme.size.textXS};
  color: white;
  background-color: ${theme.color.main};
  border-radius: 8px;
  border: none;
  cursor: pointer;
  transition: filter ease-in-out 0.2s;

  &:hover {
    filter: brightness(90%);
  }
`
