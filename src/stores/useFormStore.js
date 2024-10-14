import { create } from 'zustand'

const initialState = {
  images: [],
  name: '',
  description: '',
  currencyId: 1,
  price: 0,
  rating: 0,

  region: undefined,
  country: undefined,
  city: undefined,
  address: '',

  category: undefined,
  subcategory: undefined,
  tags: new Set([]),
}

const useFormStore = create((set) => ({
  ...initialState,
  setFormContents: (contents) => set(() => contents),
  resetFormContents: () => set(() => ({ ...initialState })),
}))

export default useFormStore
