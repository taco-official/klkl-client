import React from 'react'
import PropTypes from 'prop-types'
import PreviewContent from '../PreviewContent/PreviewContent'
import { user } from '../../test/data/DummyData'
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
    })
  ),
}

export default ProductList
