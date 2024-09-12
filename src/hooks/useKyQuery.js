import { useQuery } from '@tanstack/react-query'
import { kyInstance } from './kyInstance'
import parseQueryParams from '../utils/parseQueryParams'

/**
 * Ky기반 useQeury 호출 훅
 *
 * @param {string} endPoint 요청할 엔드포인트 URL
 * @param {Array} requestQuery 요청시 넣을 쿼리 객체 (default: null)
 *  Type: Array<Object<string, Array<number | string | boolean>>>
 * @param {Array} queryKey 쿼리키 (default: [endPoint])
 * @param {object} options 요청시 넣을 옵션 (default: null)
 * @return useQuery의 return과 동일
 */
const useKyQuery = (
  endPoint,
  requestQuery = null,
  queryKey = [endPoint],
  options = null
) => {
  const uri = parseQueryParams(endPoint, requestQuery)

  return useQuery({
    queryKey,
    queryFn: () => kyInstance.get(uri).json(),
    gcTime: 300000,
    gcTime: 300000,
    ...options,
  })
}

export default useKyQuery
