import kyInstance from '@utils/kyInstance'

const homeLoader = async () => {
  try {
    const newReviews = await kyInstance
      .get('products?sort_by=created_at&size=12')
      .json()

    const popularReviews = await kyInstance
      .get('products?sort_by=like_count&size=12')
      .json()

    return { newReviews, popularReviews }
  } catch (error) {
    throw Error(`${error.response.status}`)
  }
}

export default homeLoader
