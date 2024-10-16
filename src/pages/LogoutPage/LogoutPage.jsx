import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import kyMethod from '@constants/kyMethod'
import useLoginStore from '@stores/useLoginStore'
import useKyMutation from '@hooks/useKyMutation'

function LogoutPage() {
  const isLogin = useLoginStore((state) => state.isLogin)
  const setLogout = useLoginStore((state) => state.setLogout)
  const { mutateAsync } = useKyMutation(kyMethod.POST, 'logout', ['me'])
  const navigate = useNavigate()

  useEffect(() => {
    const logout = async () => {
      if (isLogin) {
        setLogout()
        try {
          await mutateAsync()
        } catch (error) {
          alert('로그아웃에 실패했습니다. 다시 시도해주세요.')
        }
      }
      navigate('/')
    }

    logout()
  }, [])
}

export default LogoutPage
