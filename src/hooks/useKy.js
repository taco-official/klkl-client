import { useState, useEffect } from 'react'
import { kyInstance } from '@utils/kyInstance'

function useKy(initialConfig = null, autoFetch = false, initialData = null) {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState(initialData)
  const [error, setError] = useState(null)

  const fetchData = async (config) => {
    setLoading(true)
    setError(null)
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
  }, [initialConfig])

  return { loading, data, error, fetchData }
}

export default useKy
