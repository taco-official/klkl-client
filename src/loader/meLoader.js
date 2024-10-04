import { kyInstance } from '@hooks/kyInstance'
import errorCode from '@constants/errorCode'

const meLoader = async () => {
  try {
    const response = await kyInstance.get(`members/me`).json()
    return response
  } catch (error) {
    if (error.response.status === 401) throw Error(errorCode.ERROR_UNAUTHORIZED)

    throw Error(`${error.response.status}`)
  }
}

export default meLoader
