import kyMethod from '@constants/kyMethod'
import useKyMutation from './useKyMutation'

function useReadNotificationAll() {
  const { mutateAsync } = useKyMutation(kyMethod.PUT, 'notifications/read', [
    'notifications',
  ])

  const readNotification = async () => {
    try {
      await mutateAsync()
    } catch (error) {
      console.error(error)
      alert('다시 시도해 주세요')
    }
  }

  return readNotification
}

export default useReadNotificationAll
