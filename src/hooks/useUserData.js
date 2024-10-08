import useKyQuery from './useKyQuery'

const useUserData = () => {
  return useKyQuery('me', undefined, {
    staleTime: 1000 * 60 * 60,
    gcTime: 1000 * 60 * 60,
    select: (data) => data.data,
  })
}

export default useUserData
