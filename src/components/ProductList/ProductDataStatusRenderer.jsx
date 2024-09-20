import React from 'react'
import StyledList from './ProductList.style'
import LoadingContent from '../PreviewContent/LoadingContent'
import useProductData from '../../hooks/useProductData'
import PagedProductList from './PagedProductList'

function ProductDataStatusRenderer() {
  const { isLoading, isError, data, pageData, setPageData } = useProductData()

  if (isError)
    return <StyledList className="empty">로딩에 실패했습니다.</StyledList>

  if (isLoading || (!data && !isError))
    return (
      <StyledList>
        <LoadingContent />
      </StyledList>
    )

  return (
    <PagedProductList
      isLoading={isLoading}
      isError={isError}
      data={data}
      pageData={pageData}
      setPageData={setPageData}
    />
  )
}

export default ProductDataStatusRenderer
