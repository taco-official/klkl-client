import React from 'react'
import styled from 'styled-components'
import { Divider } from 'antd'
import { useParams, useLoaderData } from 'react-router-dom'
import { toInteger } from 'lodash-es'
import useFetchContent from '@hooks/useFetchContent'
import UserProfile from '@components/UserProfile/UserProfile'
import UserFollowButton from '@components/UserProfile/UserFollowButton'

function UserPage() {
  const { id } = useParams()
  const { data: userData } = useLoaderData()
  const content = useFetchContent(id)

  return (
    <Wrapper>
      <ProfileWrapper>
        <UserProfile
          userData={userData}
          profileButton={<UserFollowButton id={toInteger(id)} />}
        />
      </ProfileWrapper>
      <Divider style={{ gridArea: 'divider' }} />
      {content}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 900px;
  padding: 0 1.875rem;
  margin: 30px auto;

  display: flex;
  flex-direction: column;
  align-items: center;
`

const ProfileWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  grid-area: profile;
`

export default UserPage
