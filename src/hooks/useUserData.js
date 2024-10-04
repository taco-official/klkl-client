import useLoginStatus from '@stores/useLoginStatus'
import useKyQuery from './useKyQuery'

const useUserData = () => {
  const isLogin = useLoginStatus((state) => state.isLogin)

  return useKyQuery('me', undefined, {
    staleTime: 1000 * 60 * 60,
    gcTime: 1000 * 60 * 60,
    enabled: isLogin,
  })
}

export default useUserData
