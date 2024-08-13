import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Outlet, useLocation } from 'react-router-dom'
import { TransitionGroup, Transition } from 'react-transition-group'

import NavBar from '../components/Navbar/NavBar'
import Footer from '../components/Footer/Footer'
import GlobalStyle from '../styles/GlobalStyle'

const TIMEOUT = 200
const getTransitionStyles = {
  entering: {
    opacity: 0,
  },
  entered: {
    transition: `opacity ${TIMEOUT}ms ease-in`,
    opacity: 1,
  },
  exiting: {
    transition: `opacity ${TIMEOUT}ms ease-in`,
    opacity: 0,
  },
}

export default function Layout() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])

  return (
    <>
      <GlobalStyle />
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
    </>
  )
}

const StyledMain = styled.main`
  width: 100%;
  min-height: 90vh;
`
