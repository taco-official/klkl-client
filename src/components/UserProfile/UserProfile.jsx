import { React, useState } from 'react'
import styled from 'styled-components'
import ProfileImage from './ProfileImage'
import theme from '../../style/theme'
import StyledButton from '../Common/StyledButton'

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
        src="https://cdn.download.ams.birds.cornell.edu/api/v1/asset/140329191/1800"
        $size="80%"
      />
      <SimpleUserInfo>
        <div className="profile--user__nickname">{testUser.nickname}</div>
        <div className="profile--user__like">
          <span>♥</span> {testUser.like}
        </div>
        <div className="profile--user__introduce">{testUser.introduce}</div>
      </SimpleUserInfo>
      <StyledButton
        onClick={() => {
          changeFollow(!isFollowed)
        }}
        $state={isFollowed}
      >
        {isFollowed ? '팔로우' : '팔로우 취소'}
      </StyledButton>
    </ProfileBox>
  )
}

const ProfileBox = styled.div`
  width: 60%;
  height: 120px;

  margin: auto;
  border-bottom: 1px solid ${theme.color.lineGrey};
  padding: 0 30px;

  display: flex;
  align-items: center;
`

const SimpleUserInfo = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  flex-grow: 1;

  height: 55%;

  margin-left: 15px;

  .profile--user__nickname {
    font-family: ${theme.style.mainBold};
    font-size: ${theme.size.titleLG};
  }

  .profile--user__like {
    font-size: ${theme.size.textSM};
    color: ${theme.color.textGrey};
    span {
      color: red;
    }
  }

  .profile--user__introduce {
    color: ${theme.color.textGrey};
    font-size: ${theme.size.textSM};
  }
`
