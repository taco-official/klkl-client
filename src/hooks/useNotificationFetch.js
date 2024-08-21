import React from 'react'
import NotificationContent from '../components/Notification/NotificationContent'
import NotificationHeader from '../components/Notification/NotificationHeader'
import useKyQuery from './useKyQuery'

const useNotificationFetch = () => {
  const {
    data: notifications,
    isError,
    isPending,
  } = useKyQuery('notifications', { cacheTime: 0, staleTime: 0 })

  if (isPending || isError)
    return {
      key: 'pending',
      label: <NotificationHeader isEmpty />,
    }

  const items = {
    key: 'group',
    label: <NotificationHeader isEmpty={notifications.data.length === 0} />,
    type: 'group',
  }

  items.children = notifications.data.map((content, i) => ({
    key: `${i}`,
    label: <NotificationContent content={content} />,
    checked: content.notification.isRead,
  }))

  return items
}

export default useNotificationFetch
