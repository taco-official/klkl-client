import React from 'react'
import PropTypes from 'prop-types'
import PreviewContent from '../../../../components/PreviewContent/PreviewContent'
import { user } from '../../../../test/data/DummyData'
import StyledList from './ProductList.style'

function ProductList({ dataList }) {
  return (
    <StyledList>
      {dataList.map((content) => (
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
  dataList: PropTypes.arrayOf(
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
}

export default ProductList
