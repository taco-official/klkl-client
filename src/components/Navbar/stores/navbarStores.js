import { create } from 'zustand'

const useLoginModalStore = create((set) => ({
  modalState: false,
  setModalState: (status) => set({ modalState: status }),
}))

const useSearchModalStore = create((set) => ({
  modalState: false,
  setModalState: (status) => set({ modalState: status }),
}))

const useCurrentPageStore = create((set) => ({
  currentPage: 0,
  setCurrentPage: (currentPage) => set({ currentPage }),
}))

export { useLoginModalStore, useSearchModalStore, useCurrentPageStore }
