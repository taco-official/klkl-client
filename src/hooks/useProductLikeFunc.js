import { method } from './kyInstance'
import useKyMutation from './useKyMutation'

const useProductLikeFunc = (id) => {
  const { mutateAsync: like } = useKyMutation(
    method.POST,
    `products/${id}/likes`,
    ['products/likes', id]
  )
  const { mutateAsync: unlike } = useKyMutation(
    method.DELETE,
    `products/${id}/likes`,
    ['products/likes', id]
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

  return { likeProduct, unlikeProduct }
}

export default useProductLikeFunc
