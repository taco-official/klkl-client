import { create } from 'zustand'

const initialState = {
  images: [],
  name: '',
  description: '',
  currencyId: 438,
  price: 0,
  rating: 0,

  continentId: 0,
  countryId: 0,
  cityId: 0,
  address: '',

  categoryId: 0,
  subcategoryId: 0,
  tags: new Set([]),
}

const useFormStore = create((set) => ({
  ...initialState,
  setFormContents: (contents) => set(() => contents),
  resetFormContents: () => set(() => ({ ...initialState })),
}))

export default useFormStore
