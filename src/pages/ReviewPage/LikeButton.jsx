import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { FloatButton } from 'antd'

import Icons from '../../components/Icons/Icons'
import useKyMutation from '../../hooks/useKyMutation'
import useKyQuery from '../../hooks/useKyQuery'

const useProductLikeFunc = (productId) => {
  const { mutateAsync: like } = useKyMutation(
    'post',
    `products/${productId}/likes`
  )
  const { mutateAsync: unlike } = useKyMutation(
    'delete',
    `products/${productId}/likes`
  )

  const likeProduct = async () => {
    try {
      await like()
    } catch (error) {
      console.error(error)
    }
  }

  const unlikeProduct = async () => {
    try {
      await unlike()
    } catch (error) {
      console.error(error)
    }
  }

  return { likeProduct, unlikeProduct }
}

export default function ProductLikeButton({ productId }) {
  const { data, isLoading } = useKyQuery(`products/${productId}/likes`)
  const { likeProduct, unlikeProduct } = useProductLikeFunc(productId)

  if (isLoading) return null

  return data.data.isLiked ? (
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
