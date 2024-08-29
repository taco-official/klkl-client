import { create } from 'zustand'

const initialState = {
  loginState: false,
  userId: 42,
  profile: '',
  nickname: '',
  description: '',
}

const useUserStore = create((set) => ({
  ...initialState,
  setNickname: (nickname) =>
    set(() => ({
      nickname,
    })),
  setDescription: (description) =>
    set(() => ({
      description,
    })),
  setProfile: (profile) =>
    set(() => ({
      profile,
    })),
}))

export default useUserStore
