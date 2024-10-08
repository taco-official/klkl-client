import { create } from 'zustand'

const initialState = {
  profileUrl: null,
  name: null,
  description: null,
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
  resetUserData: () => set(() => ({ ...initialState })),
}))

export default useUserStore
