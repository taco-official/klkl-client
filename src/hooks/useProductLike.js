import kyMethod from '@constants/kyMethod'
import useKyMutation from './useKyMutation'

const useProductLike = (productId) => {
  const { mutateAsync: likeProduct } = useKyMutation(
    kyMethod.POST,
    `likes/${productId}`,
    ['likes', productId]
  )
  const { mutateAsync: unlikeProduct } = useKyMutation(
    kyMethod.DELETE,
    `likes/${productId}`,
    ['likes', productId]
  )

  return { likeProduct, unlikeProduct }
}

export default useProductLike
