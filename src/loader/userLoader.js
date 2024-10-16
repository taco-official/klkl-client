import kyInstance from '@utils/kyInstance'

const userLoader = async ({ params }) => {
  const { id } = params

  try {
    const response = await kyInstance.get(`members/${id}`).json()
    return response
  } catch (error) {
    throw Error(`${error.response.status}`)
  }
}

export default userLoader
