import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import initialPageData from '@constants/initialPageData'
import parseQueryParams from '@utils/parseQueryParams'
import useKyQuery from '@hooks/useKyQuery'
import ProductFeed from '@components/ProductFeed/ProductFeed'

function ReviewList({ selectedMenu }) {
  const [currentPage, setCurrentPage] = useState(initialPageData)
  const url = parseQueryParams(`${selectedMenu}`, currentPage)
  const { data: productList } = useKyQuery(url, undefined, {
    staleTime: 0,
  })

  useEffect(() => {
    if (currentPage.page === 0) return
    setCurrentPage({
      ...currentPage,
      page: 0,
    })
  }, [selectedMenu])

  if (!productList) return null

  return (
    <ProductFeed
      data={productList.data}
      setPageData={setCurrentPage}
    />
  )
}
ReviewList.propTypes = {
  selectedMenu: PropTypes.string.isRequired,
}

export default ReviewList
