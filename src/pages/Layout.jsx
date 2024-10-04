import React, { useEffect } from 'react'
import styled from 'styled-components'
import { RouterProvider } from 'react-router-dom'
import { useShallow } from 'zustand/react/shallow'
import router from '@/router'
import GlobalStyle from '@styles/GlobalStyle'
import useLoginStore from '@/stores/useLoginStore'
import useUserData from '@/hooks/useUserData'
import NavBar from '@components/Navbar/NavBar'
import Footer from '@components/Footer/Footer'
import { isEqual } from 'lodash-es'

export default function Layout() {
  const { isLoading, data } = useUserData()
  const { isLogin, loginData } = useLoginStore(
    useShallow((state) => ({
      isLogin: state.isLogin,
      loginData: state.loginData,
    }))
  )
  const { setLogin, setLoginData } = useLoginStore((state) => ({
    setLogin: state.setLogin,
    setLoginData: state.setLoginData,
  }))

  useEffect(() => {
    if (isLoading) return
    if (data) {
      if (!isLogin) setLogin(data)
      else if (!isEqual(loginData, data)) setLoginData(data)
    }
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
