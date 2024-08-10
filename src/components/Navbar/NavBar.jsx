import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { useModalStore } from './stores/navbarStores'
import theme from '../../style/theme'
import LoginModal from './LoginModal'
import SearchModal from './SearchModal'
import NavList from './NavList'

export default function NavBar() {
  const setLoginModalState = useModalStore((state) => state.setLoginModalState)

  return (
    <>
      <Header>
        <MyNav>
          <CustomLink to="/">
            <h1>끼룩끼룩</h1>
          </CustomLink>
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
      <LoginModal />
      <SearchModal />
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
const CustomLink = styled(Link)`
  display: flex;
  align-items: center;
  font-size: 30px;
  font-family: ${theme.style.logo};
  color: black;
  text-decoration: none;
`
