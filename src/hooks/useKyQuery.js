import ky from 'ky'
import { useQuery } from '@tanstack/react-query'

const method = {
  GET: 'get',
  POST: 'post',
  PUT: 'put',
  DELETE: 'delete',
}

const kyInstance = ky.create({
  prefixUrl: 'http://localhost:8080/v1/',
  timeout: 5000,
  headers: {
    'content-type': 'application/json',
  },
  hooks: {
    beforeRequest: [],
    afterResponse: [],
    beforeError: [],
  },
  retry: {
    limit: 2,
    methods: ['get', 'post', 'put'],
    statusCodes: [400, 500],
  },
})

/**
 * Ky기반 useQeury 호출 훅
 *
 * @param {string} httpMethod http 메서드
 * @param {string} uri 요청할 uri
 * @param {object} options 요청시 넣을 옵션 (default: null)
 * @return useQuery의 return과 동일
 */
const useKyQuery = (httpMethod, uri, options = null) => {
  const queryKey = [uri]
  const queryFn = async () => kyInstance[httpMethod](uri).json()
  const defaultOptions = {
    cacheTime: 300000,
    staleTime: 300000,
  }

  return useQuery({ queryKey, queryFn, ...defaultOptions, ...options })
}

export { method, useKyQuery }
