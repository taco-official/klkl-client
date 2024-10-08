import kyMethod from '@constants/kyMethod'
import useKyMutation from './useKyMutation'

function useDeleteNotificationAll() {
  const { mutateAsync } = useKyMutation(kyMethod.DELETE, 'notifications', [
    'notifications',
  ])

  const deleteNotification = async () => {
    try {
      await mutateAsync()
    } catch (error) {
      console.error(error)
      alert('다시 시도해 주세요')
    }
  }

  return deleteNotification
}

export default useDeleteNotificationAll
