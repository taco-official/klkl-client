import React from 'react'
import styled from 'styled-components'
import { RouterProvider } from 'react-router-dom'
import router from '@/router'
import GlobalStyle from '@styles/GlobalStyle'
import useUserData from '@hooks/useUserData'
import NavBar from '@components/Navbar/NavBar'
import Footer from '@components/Footer/Footer'
import LoadingPage from './LoadingPage'

export default function Layout() {
  const isLoading = useUserData()
  return (
    <>
      <GlobalStyle />
      <NavBar />
      <StyledMain>
        {isLoading ? <LoadingPage /> : <RouterProvider router={router} />}
      </StyledMain>
      <Footer />
    </>
  )
}

const StyledMain = styled.main`
  width: 100%;
  min-height: 70vh;
`
