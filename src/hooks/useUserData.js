import { useEffect } from 'react'
import { isEqual } from 'lodash-es'
import useLoginStore from '@stores/useLoginStore'
import useKyQuery from './useKyQuery'

const useUserData = () => {
  const { isLoading, data, isError } = useKyQuery('me', undefined, {
    staleTime: 1000 * 60 * 60,
    gcTime: 1000 * 60 * 60,
    select: (userData) => userData.data,
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
    if (data) {
      if (!isLogin) setLogin(data)
      else if (!isEqual(loginData, data)) setLoginData(data)
    }
    if (isError && isLogin) setLogout()
  }, [isLoading, data, isError])
}

export default useUserData
