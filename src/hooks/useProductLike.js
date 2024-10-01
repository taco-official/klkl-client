import { useEffect } from 'react'
import { method } from './kyInstance'
import useKyQuery from './useKyQuery'
import useKyMutation from './useKyMutation'

const useProductLike = (userData, productId) => {
  const { data: isLiked, refetch: getLike } = useKyQuery(
    `products/${productId}/likes`,
    ['products/likes', productId],
    {
      enabled: !!userData,
      refetchOnWindowFocus: false,
      initialData: { data: { isLiked: false } },
      select: (data) => data.data.isLiked,
    }
  )
  const { mutateAsync: like } = useKyMutation(
    method.POST,
    `products/${productId}/likes`,
    ['products/likes', productId]
  )
  const { mutateAsync: unlike } = useKyMutation(
    method.DELETE,
    `products/${productId}/likes`,
    ['products/likes', productId]
  )

  const likeProduct = async () => {
    try {
      await like()
    } catch (error) {
      console.error(error)
      // alert('문제가 발생했습니다. 잠시 후 다시 시도해주세요.')
    }
  }
  const unlikeProduct = async () => {
    try {
      await unlike()
    } catch (error) {
      console.error(error)
      // alert('문제가 발생했습니다. 잠시 후 다시 시도해주세요.')
    }
  }

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
  }, [userData])

  const handleLike = async () => {
    if (!userData) {
      alert('로그인이 필요합니다.')
      return
    }
    if (!isLiked) await likeProduct()
    else await unlikeProduct()
  }

  return { isLiked, handleLike }
}

export default useProductLike
