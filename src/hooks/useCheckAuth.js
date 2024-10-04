import errorCode from '@constants/errorCode'
import useLoginStatus from '@/stores/useLoginStatus'

const useCheckAuth = () => {
  const isLogin = useLoginStatus((state) => state.isLogin)

  if (!isLogin) throw Error(errorCode.ERROR_UNAUTHORIZED)
}

export default useCheckAuth
