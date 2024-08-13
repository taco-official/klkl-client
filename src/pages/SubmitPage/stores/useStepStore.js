import { create } from 'zustand'

const useStepStore = create((set) => ({
  step: 0,
  increaseStep: () => set((state) => ({ step: state.step + 1 })),
  decreaseStep: () => set((state) => ({ step: state.step - 1 })),
  resetStep: () =>
    set(() => ({
      step: 0,
    })),
}))

export default useStepStore
