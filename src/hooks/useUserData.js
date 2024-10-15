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
    staleTime: 1000 * 60 * 10,
    gcTime: 1000 * 60 * 10,
    select: (data) => data.data,
  })
  const loginStore = useLoginStore()

  useEffect(() => {
    if (isLoading) return
    if (userData)
      if (!loginStore.isLogin) loginStore.setLogin(userData)
      else if (!isEqual(loginStore.loginData, userData))
        loginStore.setLoginData(userData)
    if (isError && loginStore.isLogin) loginStore.setLogout()
  }, [isLoading, userData, isError])
}

export default useUserData
