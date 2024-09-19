import { useEffect } from 'react'
import { useLoaderData, useLocation } from 'react-router-dom'
import { useShallow } from 'zustand/react/shallow'
import useFeedStore from '../stores/useFeedStore'
import inArray from '../utils/inArray'

const useInitializeState = () => {
  const location = useLocation()
  const { regionData, categoryData } = useLoaderData()
  const { selectedCity, selectedCategory, selectedSubCategory } = useFeedStore(
    useShallow((state) => ({
      selectedCity: state.selectedCity,
      selectedCategory: state.selectedCategory,
      selectedSubCategory: state.selectedSubCategory,
    }))
  )
  const {
    setSelectedCountry,
    addSelectedCity,
    addSelectedCategory,
    addSelectedSubCategory,
    setDefaultOpenRegion,
  } = useFeedStore((state) => ({
    setSelectedCountry: state.setSelectedCountry,
    addSelectedCity: state.addSelectedCity,
    addSelectedCategory: state.addSelectedCategory,
    addSelectedSubCategory: state.addSelectedSubCategory,
    setDefaultOpenRegion: state.setDefaultOpenRegion,
  }))

  useEffect(() => {
    if ('data' in location.state) {
      if (location.state.data.countries.length) {
        const searchedCountry = location.state.data.countries[0]
        regionData.data.find((region) => {
          if (inArray(region.countries, searchedCountry.id)) {
            setSelectedCountry(searchedCountry)
            setDefaultOpenRegion(region.id)
            return true
          }
          return false
        })
      }

      if (location.state.data.cities.length) {
        const searchedCity = location.state.data.cities[0]
        regionData.data.find((region) =>
          region.countries.find((country) => {
            if (inArray(country.cities, searchedCity.id)) {
              if (!inArray(selectedCity, searchedCity.id))
                addSelectedCity(searchedCity)
              setSelectedCountry(country)
              setDefaultOpenRegion(region.id)
              return true
            }
            return false
          })
        )
      }

      if (location.state.data.categories.length) {
        const searchedCategory = location.state.data.categories[0]
        if (!inArray(selectedCategory, searchedCategory.id)) {
          addSelectedCategory(searchedCategory)
        }
      }

      if (location.state.data.subcategories.length) {
        const searchedSubCategory = location.state.data.subcategories[0]
        categoryData.data.find((category) => {
          if (inArray(category.subcategories, searchedSubCategory.id)) {
            if (!inArray(selectedSubCategory, searchedSubCategory.id))
              addSelectedSubCategory({
                ...searchedSubCategory,
                categoryId: category.id,
              })
            if (!inArray(selectedCategory, category.id))
              addSelectedCategory(category)
            return true
          }
          return false
        })
      }
    }
  }, [])
}

export default useInitializeState
