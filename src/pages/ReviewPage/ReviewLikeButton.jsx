import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { FloatButton } from 'antd'

import Icons from '../../components/Icons/Icons'
import useProductLike from '../../hooks/useProductLike'

export default function ReviewLikeButton({ userData, productId }) {
  const { isLiked, handleLike } = useProductLike(userData, productId)

  return (
    <CustomFloatButton
      icon={
        isLiked ? (
          <Icons style={{ color: 'red' }}>favorite</Icons>
        ) : (
          <Icons $empty>favorite</Icons>
        )
      }
      onClick={handleLike}
      tooltip={isLiked ? '좋아요' : '취소'}
    />
  )
}
ReviewLikeButton.propTypes = {
  userData: PropTypes.shape({}),
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
