import React, { useState } from 'react'
import { Button, ConfigProvider } from 'antd'
import theme from '../../styles/theme'

function UserFollowButton() {
  const [isFollowed, setFollow] = useState(false)

  return (
    <ConfigProvider
      theme={{ token: { colorPrimary: theme.color.main } }}
      wave={{ disabled: true }}
    >
      <Button
        onClick={() => setFollow(!isFollowed)}
        type={isFollowed ? 'primary' : 'default'}
        style={{ fontFamily: theme.style.mainBold }}
      >
        {isFollowed ? '팔로우' : '팔로우 취소'}
      </Button>
    </ConfigProvider>
  )
}

export default UserFollowButton
