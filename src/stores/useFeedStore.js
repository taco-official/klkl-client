import { create } from 'zustand'

const initialState = {
  selectedCountry: {},
  selectedCity: [],
  selectedCategory: [],
  selectedSubcategory: [],
  selectedTag: [],
  selectedSort: {
    key: 0,
    label: '최신 순',
    sortBy: 'created_at',
    sortDirection: 'DESC',
  },
  defaultOpenRegion: undefined,
}

const useFeedStore = create((set) => ({
  ...initialState,

  setSelectedCountry: (country) => set({ selectedCountry: country }),
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

  addSelectedSubcategory: (subcategory) =>
    set((state) => ({
      selectedSubcategory: [...state.selectedSubcategory, subcategory],
    })),
  deleteSelectedSubcategory: (subcategoryId) =>
    set((state) => ({
      selectedSubcategory: state.selectedSubcategory.filter(
        (selected) => selected.id !== subcategoryId
      ),
    })),
  deleteSelectedSubcategoriesByCategoryId: (categoryId) =>
    set((state) => ({
      selectedSubcategory: state.selectedSubcategory.filter(
        (selected) => selected.categoryId !== categoryId
      ),
    })),
  resetSelectedSubcategory: () =>
    set({ selectedSubcategory: initialState.selectedSubcategory }),

  addSelectedTag: (Tag) =>
    set((state) => ({ selectedTag: [...state.selectedTag, Tag] })),
  deleteSelectedTag: (tagId) =>
    set((state) => ({
      selectedTag: state.selectedTag.filter(
        (selected) => selected.id !== tagId
      ),
    })),
  resetSelectedTag: () => set({ selectedTag: initialState.selectedTag }),

  setSelectedSort: (state) => set({ selectedSort: state }),

  setDefaultOpenRegion: (state) => set({ defaultOpenRegion: state }),

  resetSelectedField: () => set({ ...initialState }),
}))

export default useFeedStore
