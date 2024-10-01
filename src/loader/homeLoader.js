import { kyInstance } from '@hooks/kyInstance'

const homeLoader = async () => {
  try {
    const newReviews = await kyInstance
      .get('products?sort_by=created_at&size=12')
      .json()

    const popularReviews = await kyInstance
      .get('products?sort_by=like_count&size=12')
      .json()

    return { newReviews, popularReviews }
  } catch {
    throw Error('상품 정보를 불러오는 데에 실패했습니다')
  }
}

export default homeLoader
