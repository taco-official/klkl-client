import { useState, useEffect } from 'react'
import ky from 'ky'

const kyInstance = ky.create({
  prefixUrl: 'http://localhost:8080/v1/',
  timeout: 5000,
  headers: {
    'content-type': 'application/json',
  },
  retry: {
    limit: 2,
    methods: ['get', 'post', 'put'],
    statusCodes: [400, 500],
  },
})

function useKy(initialConfig = null, autoFetch = false, initialData = null) {
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

  useEffect(() => {
    if (autoFetch && initialConfig) fetchData(initialConfig)
  }, [])

  return { data, loading, error, fetchData }
}

export default useKy
