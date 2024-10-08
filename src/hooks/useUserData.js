import useLoginStore from '@stores/useLoginStore'
import useKyQuery from './useKyQuery'

const useUserData = () => {
  const isLogin = useLoginStore((state) => state.isLogin)

  return useKyQuery('me', undefined, {
    staleTime: 1000 * 60 * 60,
    gcTime: 1000 * 60 * 60,
    enabled: isLogin,
    select: (data) => data.data,
  })
}

export default useUserData
