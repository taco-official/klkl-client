import { useEffect } from 'react'
import { isEqual } from 'lodash-es'
import useLoginStore from '@stores/useLoginStore'
import useKyQuery from './useKyQuery'

const useUserData = () => {
  const {
    isLoading,
    data: userData,
    isError,
  } = useKyQuery('me', undefined, {
    staleTime: 1000 * 60 * 60,
    gcTime: 1000 * 60 * 60,
    select: (data) => data.data,
  })
  const { isLogin, loginData } = useLoginStore((state) => ({
    isLogin: state.isLogin,
    loginData: state.loginData,
  }))
  const { setLogin, setLoginData, setLogout } = useLoginStore((state) => ({
    setLogin: state.setLogin,
    setLoginData: state.setLoginData,
    setLogout: state.setLogout,
  }))

  useEffect(() => {
    if (isLoading) return
    if (userData) {
      if (!isLogin) setLogin(userData)
      else if (!isEqual(loginData, userData)) setLoginData(userData)
    }
    if (isError && isLogin) setLogout()
  }, [isLoading, userData, isError])
}

export default useUserData
