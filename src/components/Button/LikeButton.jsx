import React, {
  // useState,
  useEffect,
} from 'react'
import PropTypes from 'prop-types'
import { FaHeart, FaRegHeart } from 'react-icons/fa6'
import useUserData from '../../hooks/useUserData'
import { method } from '../../hooks/kyInstance'
import useKyQuery from '../../hooks/useKyQuery'
import useKyMutation from '../../hooks/useKyMutation'
import IconTextButton from './IconTextButton'

function LikeButton({
  productId,
  // likeContent = false,
  iconSize = '1.3rem',
}) {
  const { data: userData } = useUserData()
  // const [isLiked, setIsLiked] = useState(likeContent)
  const { data: isLiked, refetch: getLike } = useKyQuery(
    `products/${productId}/likes`,
    null,
    [`products/likes`, productId],
    {
      enabled: !!userData,
      refetchOnWindowFocus: false,
      initialData: { data: { isLiked: false } },
      select: (data) => data.data.isLiked,
    }
  )
  const { mutateAsync: postLike } = useKyMutation(
    method.POST,
    `products/${productId}/likes`,
    ['products/likes', productId]
  )
  const { mutateAsync: deleteLike } = useKyMutation(
    method.DELETE,
    `products/${productId}/likes`,
    ['products/likes', productId]
  )

  useEffect(() => {
    const fetchLikeContent = async () => {
      try {
        await getLike()
      } catch (error) {
        console.error(error)
      }
    }

    if (!userData) return
    fetchLikeContent()
  }, [])

  const handleLike = async () => {
    const postLikeContent = async () => {
      try {
        await postLike()
      } catch (error) {
        alert('문제가 발생했습니다. 잠시 후 다시 시도해주세요.')
      }
    }

    const deleteLikeContent = async () => {
      try {
        await deleteLike()
      } catch (error) {
        alert('문제가 발생했습니다. 잠시 후 다시 시도해주세요.')
      }
    }

    if (!userData) {
      alert('로그인이 필요합니다.')
      return
    }
    if (!isLiked) await postLikeContent()
    else await deleteLikeContent()
    // setIsLiked((prev) => !prev)
  }

  const iconValue = {
    color: isLiked ? 'red' : 'darkgray',
    size: iconSize,
  }

  return (
    <div>
      <IconTextButton
        value={iconValue}
        icon={isLiked ? <FaHeart /> : <FaRegHeart />}
        handleClick={handleLike}
      />
    </div>
  )
}

LikeButton.propTypes = {
  // likeContent: PropTypes.bool.isRequired,
  productId: PropTypes.number.isRequired,
  iconSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default LikeButton
