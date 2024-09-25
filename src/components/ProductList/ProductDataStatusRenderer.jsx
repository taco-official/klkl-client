import React from 'react'
import PropTypes from 'prop-types'
import StyledList from './ProductList.style'
import LoadingContent from '../PreviewContent/LoadingContent'
import PagedProductList from './PagedProductList'

function ProductDataStatusRenderer({ isLoading, data, isError, setPageData }) {
  if (isLoading)
    return (
      <StyledList>
        <LoadingContent />
      </StyledList>
    )

  if (isError)
    return <StyledList className="empty">로딩에 실패했습니다.</StyledList>

  return (
    <PagedProductList
      data={data.data}
      setPageData={setPageData}
    />
  )
}

ProductDataStatusRenderer.propTypes = {
  isLoading: PropTypes.bool,
  data: PropTypes.shape({
    data: PropTypes.shape({
      content: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
      pageSize: PropTypes.number.isRequired,
      totalElements: PropTypes.number.isRequired,
    }),
  }),
  isError: PropTypes.bool,
  setPageData: PropTypes.func,
}

export default ProductDataStatusRenderer
