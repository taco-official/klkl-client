import ky from 'ky'
import kyMethod from '@constants/kyMethod'

const API_URL = import.meta.env.VITE_APP_API_URL

const kyInstance = ky.create({
  prefixUrl: API_URL,
  timeout: 5000,
  headers: {
    'content-type': 'application/json',
  },
  retry: {
    limit: 0,
    methods: [kyMethod.GET, kyMethod.POST, kyMethod.PUT],
    statusCodes: [500],
  },
  credentials: 'include',
})

export default kyInstance
