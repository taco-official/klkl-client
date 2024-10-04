import { method } from './kyInstance'
import useKyMutation from './useKyMutation'

const useProductLike = (productId) => {
  const { mutateAsync: likeProduct } = useKyMutation(
    method.POST,
    `likes/${productId}`,
    ['likes', productId]
  )
  const { mutateAsync: unlikeProduct } = useKyMutation(
    method.DELETE,
    `likes/${productId}`,
    ['likes', productId]
  )

  return { likeProduct, unlikeProduct }
}

export default useProductLike
