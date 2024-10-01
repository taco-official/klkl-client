import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import ProfileImage from './ProfileImage'
import theme from '@styles/theme'

export default function UserProfile({ userData, profileButton }) {
  const navigate = useNavigate()

  return (
    <ProfileSection>
      <ProfileImage
        src={userData.image?.url}
        $size="4.375rem"
        onClick={() => navigate(`/users/${userData.id}`)}
      />
      <SimpleUserInfo>
        <p
          aria-hidden
          className="profile--user__nickname"
          onClick={() => navigate(`/users/${userData.id}`)}
        >
          {userData.name}
        </p>
        <p className="profile--user__introduce">{userData.description}</p>
      </SimpleUserInfo>
      {profileButton}
    </ProfileSection>
  )
}
UserProfile.propTypes = {
  userData: PropTypes.shape({
    id: PropTypes.number,
    image: PropTypes.shape({ url: PropTypes.string }),
    name: PropTypes.string,
    description: PropTypes.string,
    totalLikeCount: PropTypes.number,
  }),
  profileButton: PropTypes.element.isRequired,
}

const ProfileSection = styled.section`
  width: 95%;
  margin: auto;
  height: 80px;

  display: flex;
  align-items: center;
  grid-area: profile;
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
    font-size: ${theme.size.textMD};
    cursor: pointer;
  }

  .profile--user__introduce {
    color: ${theme.color.textGrey};
    font-size: ${theme.size.textSM};
  }
`
