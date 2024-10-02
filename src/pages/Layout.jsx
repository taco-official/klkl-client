import React, { useEffect } from 'react'
import styled from 'styled-components'
import { RouterProvider } from 'react-router-dom'

import router from '@/router'
import useLoginStatus from '@/stores/useLoginStatus'
import NavBar from '@components/Navbar/NavBar'
import Footer from '@components/Footer/Footer'
import GlobalStyle from '@styles/GlobalStyle'
import useKyQuery from '@/hooks/useKyQuery'

export default function Layout() {
  const { isError, isLoading } = useKyQuery('mem	bers/me', undefined, {
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
