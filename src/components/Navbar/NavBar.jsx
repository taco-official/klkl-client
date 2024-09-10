import React from 'react'
import { createPortal } from 'react-dom'
import styled from 'styled-components'

import theme from '../../styles/theme'
import NavList from './NavList'
import LoginButton from './components/LoginButton'
import HomeButton from './components/HomeButton'
import LoginModal from './components/LoginModal'
import SearchModal from './components/SearchModal'

export default function NavBar() {
  return (
    <>
      <Header>
        <MyNav>
          <HomeButton />
          <NavList />
          <LoginButton />
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
