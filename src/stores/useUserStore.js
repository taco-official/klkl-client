import { create } from 'zustand'

const initialState = {
  profileFile: null,
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
  setProfile: (profileFile) =>
    set(() => ({
      profileFile,
    })),
  setUserData: ({ profileFile, name, description }) =>
    set(() => ({
      profileFile,
      name,
      description,
    })),
  resetUserData: () => set(() => ({ ...initialState })),
}))

export default useUserStore
