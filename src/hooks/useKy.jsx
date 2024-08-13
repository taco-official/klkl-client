import { useEffect, useState } from 'react'
import ky from 'ky'

const kyInstance = ky.create({
  prefixUrl: 'https://yts.mx/api/v2',
  timeout: 5000,
  headers: {},
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

function useKy(initialConfig, initialData = null) {
  const [data, setData] = useState(initialData)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetchData = async (config) => {
    setLoading(true)
    try {
      const response = await kyInstance(config.url, config).json()
      setData(response)
    } catch (err) {
      setError(err)
    } finally {
      setLoading(false)
    }
  }
  }

  useEffect(() => {
    if (initialConfig) fetchData(initialConfig)
  }, [])

  return { data, loading, error, fetchData }
}

export default useKy
