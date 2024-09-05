import { method } from './kyInstance'
import useKyMutation from './useKyMutation'

function useDeleteNotificationAll() {
  const { mutateAsync } = useKyMutation(method.DELETE, 'notifications', [
    'notifications',
  ])

  const deleteNotification = async () => {
    try {
      await mutateAsync()
    } catch (error) {
      console.log(error)
    }
  }

  return deleteNotification
}

export default useDeleteNotificationAll
