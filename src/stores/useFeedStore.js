import { create } from 'zustand'

const useFeedStore = create((set) => ({
  selectedCountry: {},
  selectedCity: [],
  selectedCategory: [],
  selectedSubCategory: [],
  selectedFilter: [],
  selectedSort: {},
  setSelectedCountry: (state) => set({ selectedCountry: state }),
  setSelectedCity: (state) => set({ selectedCity: state }),
  setSelectedCategory: (state) => set({ selectedCategory: state }),
  setSelectedSubCategory: (state) => set({ selectedSubCategory: state }),
  setSelectedFilter: (state) => set({ selectedFilter: state }),
  setSelectedSort: (state) => set({ selectedSort: state }),
}))

export default useFeedStore
