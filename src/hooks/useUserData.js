import { useEffect } from 'react'
import { isEqual } from 'lodash-es'
import useLoginStore from '@stores/useLoginStore'
import useKyQuery from './useKyQuery'

const useUserData = () => {
  const { isLoading, data: userData } = useKyQuery('me', undefined, {
    staleTime: 1000 * 60 * 10,
    gcTime: 1000 * 60 * 10,
    select: (data) => data.data,
  })
  const loginStore = useLoginStore()

  useEffect(() => {
    if (userData) {
      if (!loginStore.isLogin) loginStore.setLogin(userData)
      else if (loginStore.isLogin && !isEqual(userData, loginStore.loginData))
        loginStore.setLoginData(userData)
    }
  }, [userData])

  return isLoading
}

export default useUserData
