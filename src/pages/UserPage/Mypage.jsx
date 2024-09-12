import React from 'react'
import styled from 'styled-components'
import { Divider } from 'antd'

import MyMenu from './MyMenu'
import UserEditButton from '../../components/UserProfile/UserEditButton'
import UserProfile from '../../components/UserProfile/UserProfile'
import useUserData from '../../hooks/useUserData'

function MyPage() {
  const { data: userData, isLoading, isError } = useUserData()

  if (isError) {
    // 로그인 창 띄울까???
    return null
  }

  if (isLoading) return null

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
