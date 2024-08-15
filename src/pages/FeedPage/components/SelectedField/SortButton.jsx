import React, { useEffect, useState } from 'react'
import { Dropdown, Button, Space } from 'antd'
import { DownOutlined } from '@ant-design/icons'
import useFeedStore from '../../../../stores/useFeedStore'

function SortButton() {
  const setSelectedSort = useFeedStore((state) => state.setSelectedSort)
  const [sortStandard, setSortStandard] = useState({})

  const handleMenuClick = (e) => {
    console.log(sortStandard[e.key])
    setSelectedSort(sortStandard[e.key])
  }

  useEffect(() => {
    const fetchSortStandard = () => {
      const sortData = {
        data: [
          {
            id: 0,
            name: '최신 순',
          },
          {
            id: 1,
            name: '오래된 순',
          },
          {
            id: 2,
            name: '별점 순',
          },
          {
            id: 3,
            name: '좋아요 순',
          },
        ],
      }
      const initialSortState = sortData.data.map((sort) => ({
        label: sort.name,
        key: sort.id.toString(),
      }))
      setSortStandard(initialSortState)
      setSelectedSort(initialSortState[0])
    }
    fetchSortStandard()
  }, [])

  const menuProps = {
    items: sortStandard,
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
