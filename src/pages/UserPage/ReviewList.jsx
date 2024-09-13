import React, { useState } from 'react'
import PropTypes from 'prop-types'
import useKyQuery from '../../hooks/useKyQuery'
import ProductDataStatusRenderer from '../../components/ProductList/ProductDataStatusRenderer'

function ReviewList({ selectedMenu }) {
  const [currentPage, setCurrentPage] = useState({
    size: 9,
    requestPage: 0,
  })

  const {
    data: productList,
    isLoading,
    isError,
  } = useKyQuery(
    `${selectedMenu}?page=${currentPage.requestPage}`,
    null,
    undefined,
    { staleTime: 0 }
  )

  if (!productList) return null

  return (
    <ProductDataStatusRenderer
      isLoading={isLoading}
      isError={isError}
      data={productList}
      pageData={currentPage}
      setPageData={setCurrentPage}
    />
  )
}
ReviewList.propTypes = {
  selectedMenu: PropTypes.string.isRequired,
}

export default ReviewList
