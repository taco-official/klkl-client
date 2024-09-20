import React, { useCallback, useEffect, useMemo, useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { FaHeart, FaRegHeart } from 'react-icons/fa6'
import useUserData from '../../hooks/useUserData'
import { kyInstance } from '../../hooks/kyInstance'
import IconTextButton from './IconTextButton'
import theme from '../../styles/theme'

const LikeButtonContainer = styled.div`
  color: ${(props) => (props.$isLiked ? 'red' : theme.color.lineGrey)};
  gray-scale: ${(props) => (props.$isLiked ? '0' : '100%')};
  mix-blend-mode: ${(props) => (props.$isLiked ? 'normal' : 'plus-darker')};
`

function LikeButton({ productId, iconSize = '1.3rem' }) {
  const { data: userData } = useUserData()
  const [isLiked, setIsLiked] = useState(false)

  useEffect(() => {
    const fetchLikeContent = async (product) => {
      try {
        const responseData = await kyInstance
          .get(`products/${product}/likes`)
          .json()
        setIsLiked(responseData.data.isLiked)
      } catch (error) {
        setIsLiked(false)
      }
    }

    if (!userData) return
    fetchLikeContent(productId)
  }, [])

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

    if (!userData) {
      alert('로그인이 필요합니다.')
      return
    }
    if (!isLiked) {
      // const responseData = postLikeContent(productId)
      // if ('isLiked' in responseData) setIsLiked(responseData.isLiked)
      console.log('post like', productId)
      // setIsLiked(true)
    } else {
      // const responseData = deleteLikeContent(userId, productId)
      // if ('isLiked' in response) setIsLiked(responseData.isLiked)
      console.log('delete like', productId)
      // setIsLiked(false)
    }
    setIsLiked((prev) => !prev)
  }, [isLiked])

  const iconAttr = { onClick: handleLiked }
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
  iconSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default LikeButton
