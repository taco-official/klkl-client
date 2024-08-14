import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Dropdown, Badge } from 'antd'

import NotificationContent from './NotificationContent'
import NotificationHeader from './NotificationHeader'
import Icons from '../../Icons/Icons'

const dummy = [
  {
    product: {
      name: '쟈지 우유 푸딩',
      image:
        'https://pbs.twimg.com/media/GGdunFEbcAAaqSA?format=jpg&name=4096x4096',
    },
    comment: {
      writer: '하뮨주',
      content:
        '간장공장공장장은 강공장장이고 된장공장공장장은 장공장장이다 간장공장공장장은 강공장장이고 된장공장공장장은 장공장장이다 간장공장공장장은 강공장장이고 된장공장공장장은 장공장장이다 간장공장공장장은 강공장장이고 된장공장공장장은 장공장장이다',
      date: '07.08.',
    },
  },
  {
    product: {
      name: '쟈지 우유 푸딩',
      image:
        'https://pbs.twimg.com/media/GGdunFEbcAAaqSA?format=jpg&name=4096x4096',
    },
    comment: {
      writer: '하뮨주',
      content: '간장공장공장장은 강공장장이고 된장공장공장장은 장공장장이다',
      date: '07.08.',
    },
  },
  {
    product: {
      name: '쟈지 우유 푸딩',
      image:
        'https://pbs.twimg.com/media/GGdunFEbcAAaqSA?format=jpg&name=4096x4096',
    },
    comment: {
      writer: '하뮨주',
      content: '간장공장공장장은 강공장장이고 된장공장공장장은 장공장장이다',
      date: '07.08.',
    },
  },
  {
    product: {
      name: '쟈지 우유 푸딩',
      image:
        'https://pbs.twimg.com/media/GGdunFEbcAAaqSA?format=jpg&name=4096x4096',
    },
    comment: {
      writer: '하뮨주',
      content: '간장공장공장장은 강공장장이고 된장공장공장장은 장공장장이다',
      date: '07.08.',
    },
  },
  {
    product: {
      name: '쟈지 우유 푸딩',
      image:
        'https://pbs.twimg.com/media/GGdunFEbcAAaqSA?format=jpg&name=4096x4096',
    },
    comment: {
      writer: '하뮨주',
      content: '간장공장공장장은 강공장장이고 된장공장공장장은 장공장장이다',
      date: '07.08.',
    },
  },
  {
    product: {
      name: '쟈지 우유 푸딩',
      image:
        'https://pbs.twimg.com/media/GGdunFEbcAAaqSA?format=jpg&name=4096x4096',
    },
    comment: {
      writer: '하뮨주',
      content: '간장공장공장장은 강공장장이고 된장공장공장장은 장공장장이다',
      date: '07.08.',
    },
  },
  {
    product: {
      name: '쟈지 우유 푸딩',
      image:
        'https://pbs.twimg.com/media/GGdunFEbcAAaqSA?format=jpg&name=4096x4096',
    },
    comment: {
      writer: '하뮨주',
      content: '간장공장공장장은 강공장장이고 된장공장공장장은 장공장장이다',
      date: '07.08.',
    },
  },
]

function Notification() {
  const [notifications, setNotifications] = useState([])

  useEffect(() => {
    const tmp = {
      key: 'grroup',
      label: <NotificationHeader count={dummy.length === 0} />,
      type: 'group',
    }

    tmp.children = dummy.map((content, i) => ({
      key: `${i}`,
      label: <NotificationContent content={content} />,
    }))

    setNotifications([tmp])
  }, [])

  return (
    <Dropdown
      menu={{
        items: notifications,
        style: { overflow: 'auto', maxHeight: '400px', position: 'relative' },
      }}
      trigger={['click']}
      placement="bottom"
    >
      <StyledBadge
        dot={dummy.length !== 0}
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
