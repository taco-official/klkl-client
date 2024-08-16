import ky from 'ky'
import { useQueryClient, useQuery, useMutation } from '@tanstack/react-query'

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
 * @param {string} httpMethod http 메서드 (get)
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

/**
 * Ky기반 useMutation 호출 훅
 *
 * @param {string} httpMethod http 메서드 (post, put, patch, delete)
 * @param {string} uri 요청할 uri
 * @param {string} body post, put, patch, delete
 * @param {object} options 요청시 넣을 옵션 (default: null)
 * @return useQuery의 return과 동일
 */
const useKyMutation = (httpMethod, uri, body, options = null) => {
  const queryClient = useQueryClient()
  const mutationFn = async () => kyInstance[httpMethod](uri, { body }).json()
  const onSuccess = (data) => {
    queryClient.invalidateQueries([uri, data.productId])
  }

  return useMutation({ mutationFn, onSuccess, ...options })
}

export { method, useKyQuery, useKyMutation }
