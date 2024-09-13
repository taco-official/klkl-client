import { kyInstance } from '../hooks/kyInstance'

const feedLoader = async () => {
  try {
    const regionResponse = await kyInstance.get('regions').json()
    const categoryResponse = await kyInstance.get('categories').json()
    return { regionResponse, categoryResponse }
  } catch (error) {
    throw new Response('Feed Not Found', { status: error.response.status })
  }
}

export default feedLoader
