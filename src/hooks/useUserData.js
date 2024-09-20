import useKyQuery from './useKyQuery'

const useUserData = () => {
  return useKyQuery('users/me', undefined, {
    staleTime: 1000 * 60 * 60,
    gcTime: 1000 * 60 * 60,
  })
}

export default useUserData
