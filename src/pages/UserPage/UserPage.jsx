import React from 'react'
import styled from 'styled-components'
import { Divider } from 'antd'

import { useLoaderData } from 'react-router-dom'
import UserMenu from './UserMenu'
import UserEditButton from '../../components/UserProfile/UserEditButton'
import UserProfile from '../../components/UserProfile/UserProfile'

function UserPage() {
  const { data: userData } = useLoaderData()

  return (
    <Wrapper>
      <ProfileWrapper>
        <UserProfile
          userData={userData}
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

  display: flex;
  flex-direction: column;
`

const ProfileWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  grid-area: profile;
`

export default UserPage
