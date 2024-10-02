import { create } from 'zustand'

const useLoginStatus = create((set) => ({
  isLogin: false,
  setLoginFalse: () => set({ isLogin: false }),
  setLoginTrue: () => set({ isLogin: true }),
}))

export default useLoginStatus
