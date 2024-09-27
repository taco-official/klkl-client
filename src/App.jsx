import React from 'react'
import styled from 'styled-components'
import { RouterProvider } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import NavBar from './components/Navbar/NavBar'
import Footer from './components/Footer/Footer'
import GlobalStyle from './styles/GlobalStyle'
import router from './router'
import './styles/font.css'

const queryClient = new QueryClient()

export default function App() {
  return (
    <>
      <GlobalStyle />
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools
          initialIsOpen={false}
          position="bottom-right"
          style={{ top: '0px', position: 'absolute' }}
        />
        <NavBar />
        <StyledMain>
          <RouterProvider router={router} />
        </StyledMain>
        <Footer />
      </QueryClientProvider>
    </>
  )
}

const StyledMain = styled.main`
  width: 100%;
  min-height: 70vh;
`
