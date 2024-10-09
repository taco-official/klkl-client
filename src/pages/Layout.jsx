import React from 'react'
import styled from 'styled-components'
import { RouterProvider } from 'react-router-dom'
import router from '@/router'
import GlobalStyle from '@styles/GlobalStyle'
import useUserData from '@hooks/useUserData'
import NavBar from '@components/Navbar/NavBar'
import Footer from '@components/Footer/Footer'

export default function Layout() {
  useUserData()

  return (
    <>
      <GlobalStyle />
      <NavBar />
      <StyledMain>
        <RouterProvider router={router} />
      </StyledMain>
      <Footer />
    </>
  )
}

const StyledMain = styled.main`
  width: 100%;
  min-height: 70vh;
`
