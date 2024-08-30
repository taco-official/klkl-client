import React from 'react'
import { Dropdown, Button } from 'antd'
import { FiChevronDown as DownArrow } from 'react-icons/fi'
import useFeedStore from '../../../../stores/useFeedStore'
import theme from '../../../../styles/theme'

function SortButton() {
  const selectedSort = useFeedStore((state) => state.selectedSort)
  const setSelectedSort = useFeedStore((state) => state.setSelectedSort)
  const sortStandard = [
    {
      key: 0,
      label: '최신 순',
      sortBy: 'created_at',
      sortDirection: 'DESC',
    },
    {
      key: 1,
      label: '오래된 순',
      sortBy: 'created_at',
      sortDirection: 'ASC',
    },
    {
      key: 2,
      label: '평점 순',
      sortBy: 'rating',
      sortDirection: 'DESC',
    },
    {
      key: 3,
      label: '좋아요 순',
      sortBy: 'like_count',
      sortDirection: 'DESC',
    },
  ]

  const handleMenuClick = (e) => {
    setSelectedSort(sortStandard[e.key])
  }

  const menuProps = {
    items: sortStandard.map((sort) => ({
      key: sort.key,
      label: sort.label,
    })),
    onClick: handleMenuClick,
  }

  return (
    <Dropdown menu={menuProps}>
      <Button
        shape="round"
        size="small"
      >
        <div
          style={{
            fontFamily: theme.style.main,
            fontSize: theme.size.textXS,
            display: 'flex',
            columnGap: '0.1rem',
            alignItems: 'center',
          }}
        >
          <div>{selectedSort.label}</div>
          <DownArrow />
        </div>
      </Button>
    </Dropdown>
  )
}

export default SortButton
