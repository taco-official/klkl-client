import React, { useState } from 'react'
import { Menu } from 'antd'

import styled from 'styled-components'
import Withdrawal from './Withdrawal'
import userMenuKeys from '../../constants/userMenuKeys'
import theme from '../../styles/theme'
import ProductDataStatusRenderer from '../../components/ProductList/ProductDataStatusRenderer'
import useKyQuery from '../../hooks/useKyQuery'

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

const useContentFetch = (selectedMenu) => {
  const [currentPage, setCurrentPage] = useState({
    size: 9,
    requestPage: 0,
  })

  const {
    data: productList,
    isLoading,
    isError,
  } = useKyQuery(
    `${selectedMenu}?page=${currentPage.requestPage}`,
    null,
    undefined,
    {
      refetchOnMount: false,
    }
  )

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

function UserPage() {
  const [selectedMenu, setMenu] = useState(userMenuKeys.MY_REVIEW)
  const content = useContentFetch(selectedMenu)

  return (
    <MenuSection>
      <StyledMenu
        items={items}
        defaultSelectedKeys={[userMenuKeys.MY_REVIEW]}
        onSelect={({ key }) => setMenu(key)}
      />
      <div>
        {selectedMenu !== userMenuKeys.WIDTHDRAW ? content : <Withdrawal />}
      </div>
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

export default UserPage
