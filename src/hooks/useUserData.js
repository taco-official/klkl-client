import { useEffect } from 'react'
import { isEqual } from 'lodash-es'
import useLoginStore from '@stores/useLoginStore'
import useKyQuery from './useKyQuery'

const useUserData = () => {
  const {
    isLoading,
    isFetched,
    data: userData,
    isError,
  } = useKyQuery('me', undefined, {
    staleTime: 1000 * 60 * 10,
    gcTime: 1000 * 60 * 10,
    select: (data) => data.data,
  })
  const loginStore = useLoginStore()

  useEffect(() => {
    if (userData) {
      if (isFetched && !loginStore.isLogin) loginStore.setLogin(userData)
      else if (loginStore.isLogin && !isEqual(userData, loginStore.loginData))
        loginStore.setLoginData(userData)
    } else if (isError && loginStore.isLogin) loginStore.setLogout()
  }, [userData, isFetched, isError])

  return isLoading
}

export default useUserData
