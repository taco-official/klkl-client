import React, { useEffect } from 'react'
import styled from 'styled-components'
import { RouterProvider } from 'react-router-dom'
import router from '@/router'
import GlobalStyle from '@styles/GlobalStyle'
import useLoginStatus from '@/stores/useLoginStatus'
import useKyQuery from '@/hooks/useKyQuery'
import NavBar from '@components/Navbar/NavBar'
import Footer from '@components/Footer/Footer'

export default function Layout() {
  const { isError, isLoading } = useKyQuery('me', undefined, {
    staleTime: 1000 * 60 * 60,
    gcTime: 1000 * 60 * 60,
  })
  const setLoginTrue = useLoginStatus((state) => state.setLoginTrue)

  useEffect(() => {
    if (isLoading) return
    if (!isError) setLoginTrue()
  }, [isLoading])

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
