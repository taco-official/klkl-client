import React, { useCallback, useEffect, useMemo, useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { FaHeart, FaRegHeart } from 'react-icons/fa6'
// import { kyInstance } from '../../hooks/kyInstance'
import IconTextButton from './IconTextButton'
import theme from '../../styles/theme'

const LikeButtonContainer = styled.div`
  color: ${(props) => (props.$isLiked ? 'red' : theme.color.lineGrey)};
  gray-scale: ${(props) => (props.$isLiked ? '0' : '100%')};
  mix-blend-mode: ${(props) => (props.$isLiked ? 'normal' : 'plus-darker')};
`

function LikeButton({ productId, userId = null, iconSize = '1.3rem' }) {
  const [isLiked, setIsLiked] = useState(false)

  useEffect(() => {
    /*
    const fetchLikeContent = async (product) => {
      const response = await kyInstance.get(`products/${product}/likes`).json()
      return response.data.isLiked
    }
    */

    if (userId === 0) {
      // const isLikedContent = fetchLikeContent(productId)
      // if (isLikedContent) {
      //   setIsLiked(isLikedContent)
      console.log('is liked')
    }
  }, [userId])

  const handleLiked = useCallback(() => {
    // const postLikeContent = async (product) => {
    // const response = await kyInstance
    // .post(`products/${product}/likes`, {
    // body: JSON.stringify({
    // product_id: product,
    // }),
    // })
    // .json()
    // return response.data
    // }

    /*
    const deleteLikeContent = async (user, product) => {
      const response = await kyInstance
        .delete(`products/${product}/likes`, {
          body: JSON.stringify({
            user_id: user,
            product_id: product,
          }),
        })
        .json()
      return response.data.isLiked
    }
    */

    if (userId === null) {
      alert('로그인이 필요합니다.')
    } else if (!isLiked) {
      // const responseData = postLikeContent(productId)
      // if ('isLiked' in responseData) setIsLiked(responseData.isLiked)
      console.log('post like', productId)
      setIsLiked(true)
    } else {
      // const responseData = deleteLikeContent(userId, productId)
      // if ('isLiked' in response) setIsLiked(responseData.isLiked)
      console.log('delete like')
      setIsLiked(false)
    }
  }, [userId, isLiked])

  const iconAttr = useMemo(() => ({ onClick: handleLiked }), [handleLiked])
  const iconValue = useMemo(
    () => ({ size: iconSize, attr: iconAttr }),
    [iconSize, iconAttr]
  )

  return (
    <LikeButtonContainer $isLiked={isLiked}>
      <IconTextButton
        iconValue={iconValue}
        Icon={isLiked ? <FaHeart /> : <FaRegHeart />}
      />
    </LikeButtonContainer>
  )
}

LikeButton.propTypes = {
  productId: PropTypes.number.isRequired,
  userId: PropTypes.number,
  iconSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default LikeButton
