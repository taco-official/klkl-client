import React from 'react'
import styled from 'styled-components'
import { Outlet } from 'react-router-dom'

import NavBar from './components/Navbar/NavBar'
import Footer from './components/Footer/Footer'
import GlobalStyle from './styles/GlobalStyle'

export default function Layout() {
  return (
    <>
      <GlobalStyle />
      <NavBar />
      <StyledMain>
        <Outlet />
      </StyledMain>
      <Footer />
    </>
  )
}

const StyledMain = styled.main`
  width: 100%;
  min-height: 90vh;
`
