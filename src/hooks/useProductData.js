import { useState } from 'react'
import initialPageData from '../constants/initialPageData'
import useProductQuery from './useProductQuery'
import useKyQuery from './useKyQuery'
import parseQueryParams from '../utils/parseQueryParams'

function useProductData() {
  const [pageData, setPageData] = useState(initialPageData)
  const selectedQueryArray = useProductQuery(pageData.page, setPageData)
  const uri = parseQueryParams('products', {
    ...pageData,
    ...selectedQueryArray,
  })

  const { isLoading, data, isError } = useKyQuery(uri, undefined, {
    staleTime: 0,
  })

  return { isLoading, data, isError, setPageData }
}

export default useProductData
