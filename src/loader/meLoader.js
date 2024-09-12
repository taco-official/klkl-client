import { kyInstance } from '../hooks/kyInstance'

const meLoader = async () => {
  try {
    const response = await kyInstance.get(`users/me`).json()
    return response
  } catch (error) {
    throw new Response('User Not Found', { status: error.response.status })
  }
}

export default meLoader
