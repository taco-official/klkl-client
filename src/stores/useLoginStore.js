import { create } from 'zustand'

const initialState = {
  isLogin: false,
  loginData: null,
}

const useLoginStore = create((set) => ({
  ...initialState,

  setLogin: (state) => set({ isLogin: true, loginData: state }),
  setLoginData: (state) => set({ loginData: state }),
  setLogout: () => set({ ...initialState }),
}))

export default useLoginStore
