import React, { useEffect, useState } from 'react'
import { Menu } from 'antd'

import userMenuKeys from '../../constants/userMenuKeys'
import ProductList from './ProductList'
import theme from '../../styles/theme'
import Widthdrawl from './Withdrawal'
import { kyInstance } from '../../hooks/kyInstance'

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
  const [content, setContent] = useState()

  const fetchProductList = async () => {
    try {
      if (selectedMenu === userMenuKeys.WIDTHDRAW) setContent(<Widthdrawl />)
      else {
        const data = await kyInstance.get(selectedMenu).json()
        setContent(<ProductList productList={data.data.content} />)
      }
    } catch (error) {
      console.log(`${error}`)
    }
  }

  useEffect(() => {
    fetchProductList()
  }, [selectedMenu])

  return content
}

function UserPage() {
  const [selectedMenu, setMenu] = useState(userMenuKeys.MY_REVIEW)
  const content = useContentFetch(selectedMenu)

  return (
    <>
      <Menu
        items={items}
        defaultSelectedKeys={[userMenuKeys.MY_REVIEW]}
        style={{ fontFamily: theme.style.mainBold }}
        onSelect={({ key }) => setMenu(key)}
        className="user--menu"
      />
      <div
        className="user--content"
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignContent: 'center',
        }}
      >
        {content}
      </div>
    </>
  )
}

export default UserPage
