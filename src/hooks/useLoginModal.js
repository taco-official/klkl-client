import { useModalStore } from '@stores/navbarStores'
import { modalIndex } from '@constants/navIndex'

const useLoginModal = () => {
  const setModalState = useModalStore((state) => state.setModalState)

  const popLoginModal = () => setModalState(modalIndex.LOGIN)

  return popLoginModal
}

export default useLoginModal
