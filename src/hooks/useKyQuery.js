import { useQuery } from '@tanstack/react-query'
import { kyInstance } from './kyInstance'

/**
 * Ky기반 useQeury 호출 훅
 *
 * @param {string} endPoint 요청할 엔드포인트 URL
 * @param {Array} queryKey 쿼리키 (default: [endPoint])
 * @param {object} options 요청시 넣을 옵션 (default: null)
 * @return useQuery의 return과 동일
 */
const useKyQuery = (endPoint, queryKey = [endPoint], options = null) => {
  return useQuery({
    queryKey,
    queryFn: () => kyInstance.get(endPoint).json(),
    gcTime: 300000,
    staleTime: 300000,
    ...options,
  })
}

export default useKyQuery
