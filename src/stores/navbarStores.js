import { create } from 'zustand'
import { navIndex, modalIndex } from '@constants/navIndex'

const useCurrentPageStore = create((set) => ({
  currentPage: navIndex.NONE,
  setCurrentPage: (currentPage) => set({ currentPage }),
}))

const useModalStore = create((set) => ({
  modalState: modalIndex.NONE,
  setModalState: (status) => set({ modalState: status }),
}))

export { useCurrentPageStore, useModalStore }
