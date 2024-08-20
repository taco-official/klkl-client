import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Outlet, useLocation } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { TransitionGroup, Transition } from 'react-transition-group'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import NavBar from '../components/Navbar/NavBar'
import Footer from '../components/Footer/Footer'
import GlobalStyle from '../styles/GlobalStyle'

const TIMEOUT = 100
const getTransitionStyles = {
  entering: {
    transform: 'translate3d(0, -5px, 0)',
    opacity: 0,
  },
  entered: {
    transition: `opacity ${TIMEOUT}ms ease-in, transform ${TIMEOUT + 100}ms ease-in-out`,
    transform: 'translateZ(0)',

    opacity: 1,
  },
  exiting: {
    transition: `opacity ${TIMEOUT}ms ease-in, transform ${TIMEOUT + 100}ms ease-in-out`,
    opacity: 0,
  },
}

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
        <TransitionGroup>
          <Transition
            key={location.pathname}
            timeout={{
              enter: TIMEOUT,
              exit: TIMEOUT,
            }}
          >
            {(status) => (
              <StyledMain style={{ ...getTransitionStyles[status] }}>
                <Outlet />
              </StyledMain>
            )}
          </Transition>
        </TransitionGroup>
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
  min-height: 70vh;
`
