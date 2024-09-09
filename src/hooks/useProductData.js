import { useEffect, useState } from 'react'
import useKyQuery from './useKyQuery'
import useProductQuery from './useProductQuery'

function useProductData() {
  const { queryArray: selectedQueryArray } = useProductQuery()
  const [pageData, setPageData] = useState({
    requestPage: 0,
    size: 9,
  })
  const [requestQuery, setRequestQuery] = useState([
    {
      key: 'page',
      value: pageData.requestPage,
    },
    {
      key: 'size',
      value: pageData.size,
    },
    ...selectedQueryArray,
  ])
  const { isLoading, data, isError, refetch } = useKyQuery(
    'products',
    requestQuery,
    undefined,
    {
      staleTime: 0,
      refetchOnMount: false,
    }
  )

  useEffect(() => {
    setPageData((prev) => ({
      ...prev,
      requestPage: 0,
    }))
  }, [selectedQueryArray])

  useEffect(() => {
    setRequestQuery([
      {
        key: 'page',
        value: pageData.requestPage,
      },
      {
        key: 'size',
        value: pageData.size,
      },
      ...selectedQueryArray,
    ])
  }, [pageData, selectedQueryArray])

  useEffect(() => {
    refetch()
  }, [requestQuery])

  return { isLoading, data, pageData, setPageData, isError }
}

export default useProductData
