import errorCode from '@constants/errorCode'
import { kyInstance } from '@hooks/kyInstance'

const meLoader = async () => {
  try {
    const response = await kyInstance.get(`me`).json()
    return response
  } catch (error) {
    if (error.response.status === 401) throw Error(errorCode.ERROR_UNAUTHORIZED)

    throw Error(`${error.response.status}`)
  }
}

export default meLoader
