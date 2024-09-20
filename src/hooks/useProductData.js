import { useState } from 'react'
import useKyQuery from './useKyQuery'
import useProductQuery from './useProductQuery'
import parseQueryParams from '../utils/parseQueryParams'

function useProductData() {
  const queryArray = useProductQuery()

  const [pageData, setPageData] = useState({
    requestPage: 0,
    size: 9,
  })

  const uri = parseQueryParams('products', queryArray)

  const { isError, isLoading, data } = useKyQuery(uri, undefined, {
    staleTime: 0,
  })

  return { isLoading, isError, data, pageData, setPageData }
}

export default useProductData
