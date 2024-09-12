import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import theme from '../../styles/theme'
import useKyQuery from '../../hooks/useKyQuery'
import ProductDataStatusRenderer from '../../components/ProductList/ProductDataStatusRenderer'
import ProfileImage from '../../components/UserProfile/ProfileImage'
import PlainButton from '../../components/Button/PlainButton'

const useFetchProductList = (currentUser) => {
  const [currentPage, setCurrentPage] = useState({
    size: 9,
    requestPage: 0,
  })

  const {
    data: productList,
    isLoading,
    isError,
  } = useKyQuery(
    `users/${currentUser}/products`,
    null,
    ['users', currentUser, 'products'],
    { staleTime: 0, enabled: !!currentUser }
  )

  if (!productList) return null

  return (
    <ProductDataStatusRenderer
      isLoading={isLoading}
      isError={isError}
      data={productList}
      pageData={currentPage}
      setPageData={setCurrentPage}
    />
  )
}

function FollowingList() {
  const { data: followingList } = useKyQuery('users/me/following')
  const [currentUser, setCurrentUser] = useState()
  const productList = useFetchProductList(currentUser)

  useEffect(() => {
    if (followingList) setCurrentUser(followingList.data[0].id)
  }, [followingList])

  if (!followingList) return null

  return (
    <>
      <Wrapper>
        {followingList.data.map((user) => (
          <ProfileButton key={user.id}>
            <ProfileImage
              src={user.image?.url}
              $size="60px"
              onClick={() => setCurrentUser(user.id)}
              className={currentUser === user.id ? 'selected' : null}
            />
            {user.name}
          </ProfileButton>
        ))}
      </Wrapper>
      {productList}
    </>
  )
}

const Wrapper = styled.div`
  display: flex;
`

const ProfileButton = styled(PlainButton)`
  width: 3.75rem;
  display: flex;
  flex-direction: column;
  row-gap: 0.3125rem;
  align-items: center;

  padding: 0;
  margin: 0 0.3125rem;

  font-family: ${theme.style.mainBold};
  font-size: ${theme.size.text2XS};
  color: rgba(0, 0, 0, 0.6);

  white-space: wrap;
  text-overflow: ellipsis;

  img.selected {
    border: 1.5px solid ${theme.color.main};
  }
`

export default FollowingList
