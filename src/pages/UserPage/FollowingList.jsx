import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
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
    { gcTime: 0, enabled: !!currentUser }
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

function FollowingListContent({ followingList }) {
  const [currentUser, setCurrentUser] = useState()
  const productList = useFetchProductList(currentUser)

  useEffect(() => {
    if (followingList.length > 0) setCurrentUser(followingList[0].id)
  }, [followingList])

  if (followingList.length === 0)
    return (
      <div
        style={{
          display: 'flex',
          height: '100%',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        팔로잉 하고 있는 유저가 없습니다
      </div>
    )

  return (
    <>
      <div style={{ display: 'flex' }}>
        {followingList.map((user) => (
          <ProfileButton key={user.id}>
            <ProfileImage
              src={user.image?.url}
              $size="3.75rem"
              onClick={() => setCurrentUser(user.id)}
              className={currentUser === user.id ? 'selected' : null}
            />
            {user.name}
          </ProfileButton>
        ))}
      </div>
      {productList}
    </>
  )
}
FollowingListContent.propTypes = {
  followingList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      image: PropTypes.shape({ url: PropTypes.string }),
    })
  ).isRequired,
}

function FollowingList() {
  const { data: followingList, isLoading } = useKyQuery(
    'users/me/following',
    null,
    undefined,
    { gcTime: 0 }
  )

  if (isLoading) return null

  return <FollowingListContent followingList={followingList.data} />
}

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
