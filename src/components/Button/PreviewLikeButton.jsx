import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { FaHeart, FaRegHeart } from 'react-icons/fa6'
import useProductLike from '@hooks/useProductLike'
import useLoginModal from '@/hooks/useLoginModal'
import IconTextButton from './IconTextButton'

function PreviewLikeButton({
  userData,
  productId,
  likeContent = false,
  iconSize = '1.3rem',
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

  const iconValue = {
    color: isLiked ? 'red' : 'darkgray',
    size: iconSize,
  }

  return (
    <IconTextButton
      value={iconValue}
      icon={isLiked ? <FaHeart /> : <FaRegHeart />}
      handleClick={handleLike}
    />
  )
}

PreviewLikeButton.propTypes = {
  userData: PropTypes.shape({}),
  productId: PropTypes.number.isRequired,
  likeContent: PropTypes.bool.isRequired,
  iconSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default PreviewLikeButton
