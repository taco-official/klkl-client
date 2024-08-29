import React from 'react'
import styled from 'styled-components'
import { Divider } from 'antd'

import UserMenu from './UserMenu'
import UserEditButton from '../../components/UserProfile/UserEditButton'
import UserProfile from '../../components/UserProfile/UserProfile'

const dummy = {
  id: 1,
  profile: 'https://pbs.twimg.com/media/GUhwmEaa8AAHbT5.jpg',
  name: '현승희',
  description: '사랑해요 연예가중계',
  totalLikeCount: 42,
}

function UserPage() {
  return (
    <Wrapper>
      <ProfileWrapper>
        <UserProfile
          userData={dummy}
          profileButton={<UserEditButton />}
        />
      </ProfileWrapper>
      <Divider style={{ gridArea: 'divider' }} />
      <UserMenu />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 900px;
  padding: 0 1.875rem;
  margin: 30px auto;

  display: grid;
  grid-template-areas:
    'profile profile'
    'divider divider'
    'menu content';

  grid-column-gap: 0.9375rem;
  grid-template-columns: 9.375rem auto;
  grid-template-rows: 6.25rem auto auto;
  align-content: stretch;
`

const ProfileWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  grid-area: profile;
`

export default UserPage
