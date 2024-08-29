import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import useUserStore from '../../stores/useUserStore'
import PreviewContent from '../../components/PreviewContent/PreviewContent'
import theme from '../../styles/theme'

function ProductList({ productList }) {
  const userId = useUserStore((state) => state.userId)

  return (
    <StyledList>
      {productList.length === 0 ? (
        <div>목록이 없습니다 🙄</div>
      ) : (
        productList.map((product) => (
          <li key={product.id}>
            <PreviewContent
              userId={userId}
              productData={product}
            />
          </li>
        ))
      )}
    </StyledList>
  )
}
ProductList.propTypes = {
  productList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
}

const StyledList = styled.ul`
  width: 100%;
  display: grid;
  grid-template-areas:
    'product product product'
    'product product product'
    'product product product';
  grid-template-columns: 30% 30% 30%;

  justify-content: center;

  li {
    grid-area: 'product';
  }

  & > div {
    padding: 0.3125rem;
    color: ${theme.color.textGrey};
    font-size: ${theme.size.textXS};
  }
`

export default ProductList
