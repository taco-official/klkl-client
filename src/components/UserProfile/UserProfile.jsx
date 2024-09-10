import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import ProfileImage from './ProfileImage'
import theme from '../../styles/theme'

export default function UserProfile({ userData, profileButton }) {
  return (
    <ProfileSection>
      <ProfileImage
        src={userData.profileUrl}
        $size="3.75rem"
      />
      <SimpleUserInfo>
        <div className="profile--user__nickname">{userData.name}</div>
        <div className="profile--user__like">
          <span>♥</span> {userData.totalLikeCount}
        </div>
        <div className="profile--user__introduce">{userData.description}</div>
      </SimpleUserInfo>
      {profileButton}
    </ProfileSection>
  )
}
UserProfile.propTypes = {
  userData: PropTypes.shape({
    id: PropTypes.number,
    profileUrl: PropTypes.string,
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
