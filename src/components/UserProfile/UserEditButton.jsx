import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from 'antd'
import theme from '@styles/theme'
import { method } from '@utils/kyInstance'
import useKyMutation from '@hooks/useKyMutation'

function UserEditButton() {
  const navigate = useNavigate()
  const { mutateAsync } = useKyMutation(method.POST, 'logout', ['me'])

  return (
    <>
      <Button
        onClick={() =>
          navigate('/me/edit', {
            state: { from: window.location.pathname },
          })
        }
        type="text"
        style={{
          fontFamily: theme.style.main,
          border: '1px solid rgba(0,0,0, 0.3)',
        }}
      >
        프로필 수정
      </Button>
      <Button
        onClick={async () => {
          try {
            await mutateAsync()
            navigate('/')
          } catch {
            alert('로그아웃 하지 못했습니다. 다시 시도해 주세요')
          }
        }}
        type="text"
        style={{
          fontFamily: theme.style.main,
          border: '1px solid rgba(0,0,0, 0.3)',
          color: 'red',
          marginLeft: '10px',
        }}
      >
        로그아웃
      </Button>
    </>
  )
}

export default UserEditButton
