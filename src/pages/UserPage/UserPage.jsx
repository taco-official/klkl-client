import React, { useState } from 'react'
import styled from 'styled-components'
import { Divider } from 'antd'
import { useParams, useLoaderData } from 'react-router-dom'
import { toInteger } from 'lodash-es'

import useKyQuery from '../../hooks/useKyQuery'
import ProductDataRenderer from '../../components/ProductList/ProductDataRenderer'
import UserProfile from '../../components/UserProfile/UserProfile'
import UserFollowButton from '../../components/UserProfile/UserFollowButton'

const useContentFetch = (id) => {
  const [currentPage, setCurrentPage] = useState({
    page: 0,
    size: 9,
  })

  const {
    isLoading,
    data: productList,
    isError,
  } = useKyQuery(`users/${id}/products`, undefined, { staleTime: 0 })

  return (
    <ProductDataRenderer
      isLoading={isLoading}
      data={productList}
      isError={isError}
      pageData={currentPage}
      setPageData={setCurrentPage}
    />
  )
}

function UserPage() {
  const { id } = useParams()
  const { data: userData } = useLoaderData()
  const content = useContentFetch(id)

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
