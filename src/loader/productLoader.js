import { kyInstance } from '../hooks/kyInstance'

const productLoader = async ({ params }) => {
  const { id } = params

  try {
    const response = await kyInstance.get(`products/${id}`).json()
    return response
  } catch (error) {
    throw new Response('Not Found', { status: error.response.status })
  }
}

export default productLoader
