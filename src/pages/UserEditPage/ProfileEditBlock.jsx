import React, { useRef } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Button } from 'antd'
import theme from '@styles/theme'
import useUserStore from '@stores/useUserStore'
import ProfileImage from '@components/UserProfile/ProfileImage'

function ProfileEditBlock({ loginData }) {
  const inputRef = useRef()
  const name = loginData.name || ''
  const prevProfile = loginData.image.url || ''
  const profileFile = useUserStore((state) => state.profileFile)
  const setProfile = useUserStore((state) => state.setProfile)

  const changeProfileButton = () => inputRef.current.click()

  const changeProfileImage = (e) => {
    const file = e.target?.files[0]
    if (!file) return
    setProfile(file)
  }

  // const deleteProfileImage = () => setProfile('')

  return (
    <ProfileEditBlockWrapper>
      <ProfileImage
        src={profileFile ? URL.createObjectURL(profileFile) : prevProfile}
        height="100px"
        style={{ gridArea: 'profile' }}
      />
      <input
        type="file"
        accept="image/*"
        onChange={changeProfileImage}
        ref={inputRef}
      />
      <div className="profile--nickname">{name}</div>
      <div className="profile--buttons">
        <StyledButton
          type="text"
          onClick={changeProfileButton}
        >
          이미지 변경
        </StyledButton>
      </div>
    </ProfileEditBlockWrapper>
  )
}

// <StyledButton
//   type="text"
//   style={{ color: 'red' }}
//   onClick={deleteProfileImage}
// >
//   삭제
// </StyledButton>

ProfileEditBlock.propTypes = {
  loginData: PropTypes.shape({
    name: PropTypes.string,
    image: PropTypes.shape({
      url: PropTypes.string,
    }),
  }).isRequired,
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
