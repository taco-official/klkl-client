import { modalIndex } from '@constants/navIndex'
import { useModalStore } from '@stores/navbarStores'

const useLoginModal = () => {
  const setModalState = useModalStore((state) => state.setModalState)

  const popLoginModal = () => setModalState(modalIndex.LOGIN)

  return popLoginModal
}

export default useLoginModal
