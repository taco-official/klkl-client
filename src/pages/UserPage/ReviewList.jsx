import React, { useState } from 'react'
import PropTypes from 'prop-types'
import useKyQuery from '../../hooks/useKyQuery'
import ProductDataRenderer from '../../components/ProductList/ProductDataRenderer'

function ReviewList({ selectedMenu }) {
  const [currentPage, setCurrentPage] = useState({
    page: 0,
    size: 9,
  })

  const {
    isLoading,
    data: productList,
    isError,
  } = useKyQuery(`${selectedMenu}?page=${currentPage.page}`, undefined, {
    staleTime: 0,
  })

  if (!productList) return null

  return (
    <ProductDataRenderer
      isLoading={isLoading}
      data={productList}
      isError={isError}
      pageData={currentPage}
      setPageData={setCurrentPage}
    />
  )
}
ReviewList.propTypes = {
  selectedMenu: PropTypes.string.isRequired,
}

export default ReviewList
