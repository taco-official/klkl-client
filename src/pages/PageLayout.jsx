import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Outlet, useLocation } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import NavBar from '../components/Navbar/NavBar'
import Footer from '../components/Footer/Footer'
import GlobalStyle from '../styles/GlobalStyle'

const queryClient = new QueryClient()

export default function Layout() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])

  return (
    <>
      <GlobalStyle />
      <QueryClientProvider client={queryClient}>
        <NavBar />

        <StyledMain>
          <Outlet />
        </StyledMain>

        <Footer />
        <ReactQueryDevtools
          initialIsOpen={false}
          position="bottom-right"
          style={{ top: '0px', position: 'absolute' }}
        />
      </QueryClientProvider>
    </>
  )
}

const StyledMain = styled.main`
  width: 100%;
  min-height: 90vh;
`
