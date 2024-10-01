import { kyInstance } from '../hooks/kyInstance'

const userLoader = async ({ params }) => {
  const { id } = params

  try {
    const response = await kyInstance.get(`members/${id}`).json()
    return response
  } catch (error) {
    throw new Response('User Not Found', { status: error.response.status })
  }
}

export default userLoader
