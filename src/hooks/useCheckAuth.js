import errorCode from '@constants/errorCode'
import useLoginStore from '@stores/useLoginStore'

const useCheckAuth = () => {
  const isLogin = useLoginStore((state) => state.isLogin)

  if (!isLogin) throw Error(errorCode.ERROR_UNAUTHORIZED)
}

export default useCheckAuth
