import React from 'react'
import { ConfigProvider, Dropdown, Button } from 'antd'
import { FiChevronDown as DownArrow } from 'react-icons/fi'
import sortStandard from '../../../../constants/sortStandard'
import useFeedStore from '../../../../stores/useFeedStore'
import { buttonTheme } from '../../FeedPage.style'

function SortButton() {
  const selectedSort = useFeedStore((state) => state.selectedSort)
  const setSelectedSort = useFeedStore((state) => state.setSelectedSort)

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
    <ConfigProvider theme={buttonTheme}>
      <Dropdown
        menu={menuProps}
        trigger={['click']}
      >
        <Button
          shape="round"
          size="small"
        >
          <div
            style={{
              display: 'flex',
              columnGap: '0.15rem',
              alignItems: 'center',
            }}
          >
            <div>{selectedSort.label}</div>
            <DownArrow />
          </div>
        </Button>
      </Dropdown>
    </ConfigProvider>
  )
}

export default SortButton
