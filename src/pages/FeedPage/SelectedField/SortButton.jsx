import React from 'react'
import { Dropdown, message, Button, Space } from 'antd'
import { DownOutlined } from '@ant-design/icons'

function SortButton() {
  const handleMenuClick = (e) => {
    message.info('Click on menu item.')
    console.log('click', e)
  }
  const items = [
    {
      label: '1st menu item',
      key: '1',
    },
    {
      label: '2nd menu item',
      key: '2',
    },
    {
      label: '3rd menu item',
      key: '3',
    },
    {
      label: '4rd menu item',
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
