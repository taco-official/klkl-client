import React from 'react'
import styled from 'styled-components'
import { Divider } from 'antd'

import useCheckAuth from '@/hooks/useCheckAuth'
import UserEditButton from '@components/UserProfile/UserEditButton'
import UserProfile from '@components/UserProfile/UserProfile'
import useUserData from '@hooks/useUserData'
import MyMenu from './MyMenu'

function MyPage() {
  const { data: userData } = useUserData()
  useCheckAuth()

  return (
    <Wrapper>
      <ProfileWrapper>
        <UserProfile
          userData={userData.data}
          profileButton={<UserEditButton />}
        />
      </ProfileWrapper>
      <Divider style={{ gridArea: 'divider' }} />
      <MyMenu />
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

export default MyPage
