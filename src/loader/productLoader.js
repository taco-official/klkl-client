import { kyInstance } from '@utils/kyInstance'

const productLoader = async ({ params }) => {
  const { id } = params

  try {
    const response = await kyInstance.get(`products/${id}`).json()
    return response
  } catch (error) {
    throw Error(`${error.response.status}`)
  }
}

export default productLoader
