import React from 'react'
import { Dropdown, Button, Space } from 'antd'
import { DownOutlined } from '@ant-design/icons'

function SortButton() {
  const handleMenuClick = (e) => {
    console.log('click', e)
  }
  const items = [
    {
      label: '별점 순',
      key: '1',
    },
    {
      label: '좋아요 순',
      key: '2',
    },
    {
      label: '최신 순',
      key: '3',
    },
    {
      label: '오래된 순',
      key: '4',
    },
  ]
  const menuProps = {
    items,
    onClick: handleMenuClick,
  }

  return (
    <Dropdown menu={menuProps}>
      <Button
        shape="round"
        size="small"
      >
        <Space>
          정렬
          <DownOutlined />
        </Space>
      </Button>
    </Dropdown>
  )
}

export default SortButton
