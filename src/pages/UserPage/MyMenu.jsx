import React, { useState } from 'react'
import styled from 'styled-components'
import { Menu } from 'antd'
import theme from '@styles/theme'
import userMenuKeys from '@constants/userMenuKeys'
import Withdrawal from './Withdrawal'
import FollowingList from './FollowingList'
import ReviewList from './ReviewList'

const items = [
  {
    key: userMenuKeys.MY_REVIEW,
    label: '내 리뷰',
  },
  {
    key: userMenuKeys.LIKED_REVIEW,
    label: '찜 목록',
  },
  {
    key: userMenuKeys.FOLLOWED_LIST,
    label: '팔로우 목록',
  },
  {
    key: userMenuKeys.WIDTHDRAW,
    label: '회원 탈퇴',
    danger: true,
  },
]

function MyMenu() {
  const [selectedMenu, setMenu] = useState(userMenuKeys.MY_REVIEW)
  const myMenu = {
    [userMenuKeys.MY_REVIEW]: (
      <ReviewList selectedMenu={userMenuKeys.MY_REVIEW} />
    ),
    [userMenuKeys.LIKED_REVIEW]: (
      <ReviewList selectedMenu={userMenuKeys.LIKED_REVIEW} />
    ),
    [userMenuKeys.FOLLOWED_LIST]: <FollowingList />,
    [userMenuKeys.WIDTHDRAW]: <Withdrawal />,
  }

  return (
    <MenuSection>
      <StyledMenu
        items={items}
        defaultSelectedKeys={[userMenuKeys.MY_REVIEW]}
        onSelect={({ key }) => setMenu(key)}
      />
      <div style={{ width: '36rem' }}>{myMenu[selectedMenu]}</div>
    </MenuSection>
  )
}

const MenuSection = styled.div`
  display: flex;
  justify-content: space-evenly;
`

const StyledMenu = styled(Menu)`
  width: 130px;
  font-family: ${theme.style.mainBold};
`

export default MyMenu
