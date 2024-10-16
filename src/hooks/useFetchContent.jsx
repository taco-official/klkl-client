import React, { useState, useEffect } from 'react'
import initialPageData from '@constants/initialPageData'
import parseQueryParams from '@utils/parseQueryParams'
import ProductFeed from '@components/ProductFeed/ProductFeed'
import useKyQuery from './useKyQuery'

const useFetchContent = (id) => {
  const [currentPage, setCurrentPage] = useState(initialPageData)
  const url = parseQueryParams(`members/${id}/products`, currentPage)
  const { data: productList } = useKyQuery(url, undefined, {
    staleTime: 0,
    enabled: !!id,
  })

  useEffect(() => {
    if (currentPage.page === 0) return
    setCurrentPage({
      ...currentPage,
      page: 0,
    })
  }, [id])

  if (!productList) return null

  return (
    <ProductFeed
      data={productList.data}
      setPageData={setCurrentPage}
    />
  )
}

export default useFetchContent
