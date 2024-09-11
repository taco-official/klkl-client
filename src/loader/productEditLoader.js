import { kyInstance } from '../hooks/kyInstance'

const productLoader = async ({ params }) => {
  const { id } = params

  try {
    const clientData = await kyInstance.get('users/me').json()
    const productData = await kyInstance.get(`products/${id}`).json()

    if (clientData.data.id !== productData.data.user.id)
      throw new Response('Forbidden', { status: 403 })

    return productData
  } catch (error) {
    throw new Response('Not Found', { status: error.response.status })
  }
}

export default productLoader
