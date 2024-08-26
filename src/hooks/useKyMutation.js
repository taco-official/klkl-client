import { useMutation, useQueryClient } from '@tanstack/react-query'
import { kyInstance } from './kyInstance'

/**
 * Ky기반 useMutation 호출 훅
 *
 * @param {string} httpMethod http 메서드 (post, put, patch, delete)
 * @param {string} uri 요청할 uri
 * @param {Array} queryKey stale할 queryKey (default: [uri])
 * @param {object} options 요청시 넣을 옵션 (default: null)
 * @return useQuery의 return과 동일
 */
const useKyMutation = (httpMethod, uri, queryKey = [uri], options = {}) => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (body) => kyInstance[httpMethod](uri, { body }).json(),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [...queryKey] })
    },
    retry: false,
    ...options,
  })
}
export default useKyMutation
