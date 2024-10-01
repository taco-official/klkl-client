import React from 'react'
import { Button } from 'antd'
import { useNavigate } from 'react-router-dom'
import theme from '@styles/theme'

function UserEditButton() {
  const naviagte = useNavigate()

  return (
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
  )
}

export default UserEditButton
