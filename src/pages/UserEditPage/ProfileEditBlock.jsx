import React, { useRef } from 'react'
import styled from 'styled-components'
import { Button } from 'antd'
import theme from '../../styles/theme'
import ProfileImage from '../../components/UserProfile/ProfileImage'
import useUserStore from '../../stores/useUserStore'

function ProfileEditBlock() {
  const inputRef = useRef()
  const profileRef = useRef()
  const profileImage = useUserStore((state) => state.profile)
  const setProfile = useUserStore((state) => state.setProfile)

  const changeProfileButton = () => inputRef.current.click()

  const changeProfileImage = (e) => {
    const file = e.target?.files[0]
    if (!file) return

    const reader = new FileReader()

    reader.onload = () => {
      profileRef.current.src = reader.result
      setProfile(reader.result)
    }

    reader.readAsDataURL(file)
  }

  const deleteProfileImage = () => {
    inputRef.current.value = ''
    profileRef.current.src = ''
    setProfile('')
  }

  return (
    <ProfileEditBlockWrapper>
      <ProfileImage
        src={profileImage}
        height="100px"
        style={{ gridArea: 'profile' }}
        ref={profileRef}
      />
      <input
        type="file"
        accept="image/*"
        onChange={changeProfileImage}
        ref={inputRef}
      />
      <div className="profile--nickname">존나긴닉네임을여기에입력</div>
      <div className="profile--buttons">
        <StyledButton
          type="text"
          onClick={changeProfileButton}
        >
          이미지 변경
        </StyledButton>
        <StyledButton
          type="text"
          style={{ color: 'red' }}
          onClick={deleteProfileImage}
        >
          삭제
        </StyledButton>
      </div>
    </ProfileEditBlockWrapper>
  )
}

const ProfileEditBlockWrapper = styled.div`
  display: grid;
  grid-template:
    'profile nickname' 50px
    'profile buttons' 50px;

  grid-template-columns: 100px;
  grid-column-gap: 20px;
  align-items: center;

  .profile--nickname {
    font-family: ${theme.style.mainBold};
    grid-area: 'nickname';
  }

  .profile--buttons {
    grid-area: 'buttons';
  }

  input {
    display: none;
  }
`

const StyledButton = styled(Button)`
  font-family: ${theme.style.main};
  font-size: ${theme.size.textXS};
  border: 1px solid rgba(0, 0, 0, 0.2);
  margin-right: 0.625rem;
`

export default ProfileEditBlock
