import { create } from 'zustand'

const initialState = {
  profileUrl: '',
  name: '',
  description: '',
}

const useUserStore = create((set) => ({
  ...initialState,
  setName: (name) =>
    set(() => ({
      name,
    })),
  setDescription: (description) =>
    set(() => ({
      description,
    })),
  setProfile: (profileUrl) =>
    set(() => ({
      profileUrl,
    })),
  setUserData: ({ profileUrl, name, description }) =>
    set(() => ({
      profileUrl,
      name,
      description,
    })),
}))

export default useUserStore
