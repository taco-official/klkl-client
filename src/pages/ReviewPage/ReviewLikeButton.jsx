import React, { useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { FloatButton } from 'antd'
import useProductLike from '@hooks/useProductLike'
import useLoginModal from '@/hooks/useLoginModal'
import Icons from '@components/Icons/Icons'

export default function ReviewLikeButton({
  userData,
  productId,
  likeContent = false,
}) {
  const [isLiked, setIsLiked] = useState(likeContent)
  const { likeProduct, unlikeProduct } = useProductLike(productId)
  const popLoginModal = useLoginModal()

  const handleLike = async () => {
    if (!userData) {
      popLoginModal()
      return
    }
    if (!isLiked) {
      await likeProduct()
      setIsLiked(true)
    } else {
      await unlikeProduct()
      setIsLiked(false)
    }
  }

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
  likeContent: PropTypes.bool.isRequired,
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
