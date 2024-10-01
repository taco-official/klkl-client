import { kyInstance } from '@hooks/kyInstance'

const feedLoader = async () => {
  try {
    const regionData = await kyInstance.get('regions/hierarchy').json()
    const categoryData = await kyInstance.get('categories/hierarchy').json()
    return { regionData, categoryData }
  } catch (error) {
    throw new Response('Feed Not Found', { status: error.response.status })
  }
}

export default feedLoader
