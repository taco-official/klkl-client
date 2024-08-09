import { React, useState } from 'react'
import styled from 'styled-components'
import { Button, ConfigProvider } from 'antd'
import ProfileImage from './ProfileImage'
import theme from '../../style/theme'

const testUser = {
  nickname: '귤락',
  like: 42,
  introduce: '김빠빠 누룽지 통닭',
}

export default function UserProfile() {
  const [isFollowed, changeFollow] = useState(false)

  return (
    <ProfileBox>
      <ProfileImage
        src="https://i.ytimg.com/vi/Hoi0IAl74wY/maxresdefault.jpg"
        $size="100%"
      />
      <SimpleUserInfo>
        <div className="profile--user__nickname">{testUser.nickname}</div>
        <div className="profile--user__like">
          <span>♥</span> {testUser.like}
        </div>
        <div className="profile--user__introduce">{testUser.introduce}</div>
      </SimpleUserInfo>
      <ConfigProvider theme={{ token: { colorPrimary: theme.color.main } }}>
        <Button
          onClick={() => changeFollow(!isFollowed)}
          type={isFollowed ? 'primary' : 'default'}
          style={{ fontFamily: theme.style.mainBold }}
        >
          {isFollowed ? '팔로우' : '팔로우 취소'}
        </Button>
      </ConfigProvider>
    </ProfileBox>
  )
}

const ProfileBox = styled.div`
  width: 95%;
  margin: auto;
  height: 80px;

  display: flex;
  align-items: center;
`

const SimpleUserInfo = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  flex-grow: 1;

  height: 100%;

  margin-left: 15px;

  .profile--user__nickname {
    font-family: ${theme.style.mainBold};
    font-size: ${theme.size.titleSM};
  }

  .profile--user__like {
    font-size: ${theme.size.textXS};
    color: ${theme.color.textGrey};
    span {
      color: red;
    }
  }

  .profile--user__introduce {
    color: ${theme.color.textGrey};
    font-size: ${theme.size.textXS};
  }
`
