import { method } from './kyInstance'
import useKyMutation from './useKyMutation'

function useReadNotificationAll() {
  const { mutateAsync } = useKyMutation(method.PUT, 'notifications/read', [
    'notifications',
  ])

  const readNotification = async () => {
    try {
      await mutateAsync()
    } catch (error) {
      console.log(error)
    }
  }

  return readNotification
}

export default useReadNotificationAll
