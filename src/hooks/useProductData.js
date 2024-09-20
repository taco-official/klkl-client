import { useState, useEffect, useCallback } from 'react'
import { debounce } from 'lodash-es'
import useKy from './useKy'
import useProductQuery from './useProductQuery'

function useProductData() {
  const [pageData, setPageData] = useState({
    requestPage: 0,
    size: 9,
  })
  const { queryArray: selectedQueryArray } = useProductQuery()
  const { loading: isLoading, data, error: isError, fetchData } = useKy()

  useEffect(() => {
    if (pageData.requestPage === 0) return
    setPageData((prev) => ({
      ...prev,
      requestPage: 0,
    }))
  }, [selectedQueryArray])

  const debounceFetch = useCallback(
    debounce(
      (query) =>
        fetchData({
          url: 'products',
          searchParams: query,
        }),
      300
    ),
    []
  )

  useEffect(() => {
    debounceFetch({
      page: pageData.requestPage,
      size: pageData.size,
      ...selectedQueryArray,
    })
  }, [pageData, selectedQueryArray])

  return { isLoading, data, pageData, setPageData, isError }
}

export default useProductData
