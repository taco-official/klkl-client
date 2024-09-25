import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { FloatButton } from 'antd'

import Icons from '../../components/Icons/Icons'
import useKyQuery from '../../hooks/useKyQuery'
import useProductLikeFunc from '../../hooks/useProductLikeFunc'

export default function ProductLikeButton({ productId }) {
  const { data: isLiked, isLoading } = useKyQuery(
    `products/${productId}/likes`,
    ['products/likes', productId],
    {
      initialData: { data: { isLiked: false } },
      select: (data) => data.data.isLiked,
    }
  )
  const { likeProduct, unlikeProduct } = useProductLikeFunc(productId)

  if (isLoading) return null

  return isLiked ? (
    <CustomFloatButton
      icon={<Icons style={{ color: 'red' }}>favorite</Icons>}
      onClick={unlikeProduct}
      tooltip="좋아요"
    />
  ) : (
    <CustomFloatButton
      icon={<Icons $empty>favorite</Icons>}
      onClick={likeProduct}
      tooltip="취소"
    />
  )
}
ProductLikeButton.propTypes = {
  productId: PropTypes.number.isRequired,
}

const CustomFloatButton = styled(FloatButton)`
  span {
    font-size: 1.3em;
    color: rgba(0, 0, 0, 0.65);
  }

  div {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`
