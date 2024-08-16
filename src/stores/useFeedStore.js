import { create } from 'zustand'

const initialState = {
  selectedCountry: {},
  selectedCity: [],
  selectedCategory: [],
  selectedSubCategory: [],
  selectedFilter: [],
}

const useFeedStore = create((set) => ({
  ...initialState,
  selectedSort: {},

  inArray: (array, id) => array.some((selected) => selected.id === id),

  setSelectedCountry: (state) => set({ selectedCountry: state }),
  deleteSelectedCountry: () =>
    set({ selectedCountry: initialState.selectedCountry }),

  addSelectedCity: (city) =>
    set((state) => ({ selectedCity: [...state.selectedCity, city] })),
  deleteSelectedCity: (cityId) =>
    set((state) => ({
      selectedCity: state.selectedCity.filter(
        (selected) => selected.id !== cityId
      ),
    })),
  resetSelectedCity: () => set({ selectedCity: initialState.selectedCity }),

  addSelectedCategory: (category) =>
    set((state) => ({
      selectedCategory: [...state.selectedCategory, category],
    })),
  deleteSelectedCategory: (categoryId) =>
    set((state) => ({
      selectedCategory: state.selectedCategory.filter(
        (selected) => selected.id !== categoryId
      ),
    })),
  resetSelectedCategory: () =>
    set({ selectedCategory: initialState.selectedCategory }),

  addSelectedSubCategory: (subCategory) =>
    set((state) => ({
      selectedSubCategory: [...state.selectedSubCategory, subCategory],
    })),
  deleteSelectedSubCategory: (subCategoryId) =>
    set((state) => ({
      selectedSubCategory: state.selectedSubCategory.filter(
        (selected) => selected.id !== subCategoryId
      ),
    })),
  deleteSelectedSubCategoriesByCategoryId: (categoryId) =>
    set((state) => ({
      selectedSubCategory: state.selectedSubCategory.filter(
        (selected) => selected.categoryId !== categoryId
      ),
    })),
  resetSelectedSubCategory: () =>
    set({ selectedSubCategory: initialState.selectedSubCategory }),

  addSelectedFilter: (filter) =>
    set((state) => ({ selectedFilter: [...state.selectedFilter, filter] })),
  deleteSelectedFilter: (filterId) =>
    set((state) => ({
      selectedFilter: state.selectedFilter.filter(
        (selected) => selected.id !== filterId
      ),
    })),
  resetSelectedFilter: () =>
    set({ selectedFilter: initialState.selectedFilter }),

  setSelectedSort: (state) => set({ selectedSort: state }),

  resetSelectedField: () => set(() => ({ ...initialState })),
}))

export default useFeedStore
