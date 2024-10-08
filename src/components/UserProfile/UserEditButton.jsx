import React from 'react'
import { Button } from 'antd'
import { useNavigate } from 'react-router-dom'
import theme from '@styles/theme'
import { kyInstance } from '@hooks/kyInstance'

function UserEditButton() {
  const naviagte = useNavigate()

  return (
    <>
      <Button
        onClick={() =>
          naviagte('/me/edit', {
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
            await kyInstance.post('logout')
            naviagte('/')
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
