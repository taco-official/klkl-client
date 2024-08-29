import React from 'react'
import PropTypes from 'prop-types'
import PreviewContent from '../../../../components/PreviewContent/PreviewContent'
import { user } from '../BasicFilter/DummyData'
import StyledList from './ProductList.style'
import LoadingContent from '../../../../components/PreviewContent/LoadingContent'

function ProductList({ productDataList, loading = null, error = null }) {
  if (loading)
    return (
      <StyledList>
        <LoadingContent />
      </StyledList>
    )

  if (error)
    return <StyledList className="empty">로딩에 실패했습니다.</StyledList>

  if (!productDataList.length)
    return <StyledList className="empty">해당 상품이 없습니다.</StyledList>

  return (
    <StyledList>
      {productDataList.map((content) => (
        <PreviewContent
          key={content.id}
          userId={user.id}
          productData={content}
        />
      ))}
    </StyledList>
  )
}

ProductList.propTypes = {
  productDataList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      thumbnail: PropTypes.string,
      countryName: PropTypes.string.isRequired,
      categoryName: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      tags: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          name: PropTypes.string.isRequired,
        })
      ),
      rating: PropTypes.number,
      likeCount: PropTypes.number,
    })
  ),
  loading: PropTypes.bool,
  error: PropTypes.shape({}),
}

export default ProductList
