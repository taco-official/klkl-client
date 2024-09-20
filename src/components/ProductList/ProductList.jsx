import React from 'react'
import PropTypes from 'prop-types'
import PreviewContent from '../PreviewContent/PreviewContent'
import StyledList from './ProductList.style'

function ProductList({ dataList }) {
  return (
    <StyledList>
      {dataList.map((content) => (
        <PreviewContent
          key={content.id}
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
    })
  ),
}

export default ProductList
