import React, { useCallback, useEffect, useMemo, useState } from 'react'
import PropTypes from 'prop-types'
import { IconContext } from 'react-icons'
// import axios from 'axios'
import { FaHeart, FaRegHeart } from 'react-icons/fa6'
import theme from '../../style/theme'

function getLikeContent() {}
// productId, userId
function postLikeContent() {}
// productId, userId
function deleteLikeContent() {}
// likeId

function LikeButton({
  productId,
  userId = undefined,
  iconSize = '1.3rem',
  text = null,
}) {
  const [likeId, setLikeId] = useState(undefined)
  const [isLiked, setIsLiked] = useState(false)

  useEffect(() => {
    if (userId !== undefined) {
      const likedContentId = getLikeContent(productId, userId)
      setLikeId(likedContentId)
      setIsLiked(likedContentId !== undefined)
    }
  }, [productId, userId])

  const handleLiked = useCallback(() => {
    if (userId === undefined) {
      alert('로그인이 필요합니다.')
    } else if (!isLiked) {
      postLikeContent(productId, userId)
      // axios.post('POST API', { product_id: productId, user_id: userId })
      setIsLiked(true)
    } else {
      deleteLikeContent(likeId)
      // axios.delete(`DELETE API/${likeId}`)
      setIsLiked(false)
    }
  }, [isLiked, userId, productId, likeId])

  const iconColor = useMemo(
    () => (isLiked ? 'red' : theme.color.textGrey),
    [isLiked, theme.color.textGrey]
  )
  const iconAttr = useMemo(() => ({ onClick: handleLiked }), [handleLiked])
  const iconValue = useMemo(
    () => ({ color: iconColor, size: iconSize, attr: iconAttr }),
    [iconColor, iconSize, iconAttr]
  )

  return (
    <IconContext.Provider value={iconValue}>
      <div>
        {isLiked ? <FaHeart /> : <FaRegHeart />}
        {text || null}
      </div>
    </IconContext.Provider>
  )
}

LikeButton.propTypes = {
  productId: PropTypes.number.isRequired,
  userId: PropTypes.number,
  iconSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  text: PropTypes.string,
}

export default LikeButton
