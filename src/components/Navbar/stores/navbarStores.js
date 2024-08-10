import { create } from 'zustand'

const useModalStore = create((set) => ({
  loginModalState: false,
  searchModalState: false,
  setLoginModalState: (status) => set({ loginModalState: status }),
  setSearchModalState: (status) => set({ searchModalState: status }),
}))

const useCurrentPageStore = create((set) => ({
  currentPage: 0,
  setCurrentPage: (currentPage) => set({ currentPage }),
}))

export { useModalStore, useCurrentPageStore }
