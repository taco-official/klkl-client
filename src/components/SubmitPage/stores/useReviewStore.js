import { create } from 'zustand'

const initialState = {
  name: '',
  description: '',
  currencyId: 0,
  price: 0,
  rate: 0,

  continentId: 0,
  countryId: 0,
  cityId: 0,
  address: '',

  categoryId: 0,
  subCategoryId: 0,
  gosu: false,
  store: false,
}

const useReviewStore = create((set) => ({
  ...initialState,
  setReviewContents: (contents) => set(() => contents),
  resetReviewContents: () => set(() => ({ ...initialState })),
}))

export default useReviewStore
