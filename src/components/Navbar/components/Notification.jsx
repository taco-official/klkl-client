import React from 'react'
import styled from 'styled-components'
import { Dropdown, Badge } from 'antd'
import { modalIndex } from '@constants/navIndex'
import { useModalStore } from '@stores/navbarStores'
import useNotificationFetch from '@hooks/useNotificationFetch'
import Icons from '../../Icons/Icons'

function Notification() {
  const notificationItems = useNotificationFetch()
  const setModalState = useModalStore((state) => state.setModalState)

  return (
    <Dropdown
      menu={{
        items: [notificationItems],
        style: { overflow: 'auto', maxHeight: '25rem', position: 'relative' },
      }}
      trigger={['click']}
      placement="bottom"
      onOpenChange={(open) => {
        if (!open) {
          setModalState(modalIndex.NONE)
        }
      }}
    >
      <StyledBadge
        dot={
          notificationItems?.children?.filter((noti) => !noti.checked).length >
          0
        }
        offset={[-33, 18]}
      >
        <Icons $size="1.7em">notifications</Icons>
        알림
      </StyledBadge>
    </Dropdown>
  )
}

const StyledBadge = styled(Badge)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: inherit;
  font-family: inherit;
  font-size: inherit;

  height: 100%;
`

export default Notification
