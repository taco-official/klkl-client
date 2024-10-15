import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import kyMethod from '@constants/kyMethod'
import useLoginStore from '@stores/useLoginStore'
import useKyMutation from '@hooks/useKyMutation'

function LogoutPage() {
  const isLogin = useLoginStore((state) => state.isLogin)
  const setLogout = useLoginStore((state) => state.setLogout)
  const { mutate } = useKyMutation(kyMethod.POST, 'logout', ['me'])
  const navigate = useNavigate()

  useEffect(() => {
    if (isLogin) {
      setLogout()
      mutate()
    }
    navigate('/')
  }, [])
}

export default LogoutPage
