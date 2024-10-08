import { kyInstance } from '@utils/kyInstance'

const productLoader = async ({ params }) => {
  const { id } = params

  try {
    const clientData = await kyInstance.get('me').json()
    const productData = await kyInstance.get(`products/${id}`).json()

    if (clientData.data.id !== productData.data.user.id)
      throw new Response('Forbidden', { status: 403 })

    return productData
  } catch (error) {
    throw Error(`${error.response.status}`)
  }
}

export default productLoader
