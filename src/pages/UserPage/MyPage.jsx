import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { Divider } from 'antd'

import UserEditButton from '@components/UserProfile/UserEditButton'
import UserProfile from '@components/UserProfile/UserProfile'
import useUserData from '@hooks/useUserData'
import MyMenu from './MyMenu'

function MyPage() {
  const { data: userData, isLoading, isError } = useUserData()
  const navigate = useNavigate()

  if (isError) {
    alert('로그인 후 사용 가능합니다')
    navigate('/')
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
