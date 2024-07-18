import React, { useCallback, useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
// import axios from 'axios'
import { FaHeart, FaRegHeart } from 'react-icons/fa6'

const IconButton = styled.div`
  border: 0rem;
  background-color: transparent;
`

function getLikeContent() {}
// productId, userId
function postLikeContent() {}
// productId, userId
function deleteLikeContent() {}
// likeId

function LikeButton({ productId, userId = undefined, size = 24, text }) {
  let isLiked
  let likeId
  if (userId === undefined) {
    isLiked = false
  } else {
    likeId = getLikeContent(productId, userId)
    if (likeId) isLiked = true
    else isLiked = false
    // likeId = axios
    // .get('GET API')
    // .then((isLiked = true))
    // .catch((isLiked = false))
  }
  const [liked, setLiked] = useState(isLiked)
  const handleLiked = useCallback(() => {
    if (userId === undefined) {
      alert('로그인이 필요합니다.')
    } else if (liked === false) {
      postLikeContent(productId, userId)
      // axios.post('POST API', { product_id: productId, user_id: userId })
      setLiked(true)
    } else {
      deleteLikeContent(likeId)
      // axios.delete(`DELETE API/${likeId}`)
      setLiked(false)
    }
  }, [liked, userId, productId])

  return (
    <IconButton
      type="button"
      onClick={handleLiked}
    >
      {liked ? (
        <FaHeart
          color="red"
          size={size}
        />
      ) : (
        <FaRegHeart
          color="#8D8D8D"
          size={size}
        />
      )}
      {text || null}
    </IconButton>
  )
}

LikeButton.propTypes = {
  productId: PropTypes.number.isRequired,
  userId: PropTypes.number,
  size: PropTypes.number,
  text: PropTypes.string,
}

export default LikeButton
