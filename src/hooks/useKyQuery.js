import { useQuery } from '@tanstack/react-query'
import { kyInstance } from './kyInstance'

/**
 * Ky기반 useQeury 호출 훅
 *
 * @param {string} httpMethod http 메서드 (get)
 * @param {string} uri 요청할 uri
 * @param {object} options 요청시 넣을 옵션 (default: null)
 * @return useQuery의 return과 동일
 */
const useKyQuery = (uri, options = null) =>
  useQuery({
    queryKey: [uri],
    queryFn: () => kyInstance.get(uri).json(),
    retry: false,
    cacheTime: 300000,
    staleTime: 300000,
    ...options,
  })

export default useKyQuery
