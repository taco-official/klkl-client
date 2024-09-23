import { useEffect } from 'react'
import { useLoaderData, useLocation } from 'react-router-dom'
import { useShallow } from 'zustand/react/shallow'
import useFeedStore from '../stores/useFeedStore'
import inArray from '../utils/inArray'

const useInitializeState = () => {
  const location = useLocation()
  const { regionData, categoryData } = useLoaderData()
  const {
    selectedCountry,
    selectedCity,
    selectedCategory,
    selectedSubcategory,
  } = useFeedStore(
    useShallow((state) => ({
      selectedCountry: state.selectedCountry,
      selectedCity: state.selectedCity,
      selectedCategory: state.selectedCategory,
      selectedSubcategory: state.selectedSubcategory,
    }))
  )
  const {
    setSelectedCountry,
    addSelectedCity,
    addSelectedCategory,
    addSelectedSubcategory,
    setDefaultOpenRegion,
  } = useFeedStore((state) => ({
    setSelectedCountry: state.setSelectedCountry,
    addSelectedCity: state.addSelectedCity,
    addSelectedCategory: state.addSelectedCategory,
    addSelectedSubcategory: state.addSelectedSubcategory,
    setDefaultOpenRegion: state.setDefaultOpenRegion,
  }))

  useEffect(() => {
    if (location.state && 'data' in location.state) {
      if (location.state.data.countries.length) {
        const searchedCountry = location.state.data.countries[0]
        const foundRegion = regionData.data.find((region) => {
          const foundCountry = region.countries.find(
            (country) => country.id === searchedCountry.id
          )
          if (!foundCountry) return false
          if (selectedCountry?.id !== foundCountry.id)
            setSelectedCountry(foundCountry)
          return true
        })
        if (foundRegion) setDefaultOpenRegion(foundRegion.id)
      }

      if (location.state.data.cities.length) {
        const searchedCity = location.state.data.cities[0]
        const foundRegion = regionData.data.find((region) => {
          const foundCountry = region.countries.find((country) => {
            const foundCity = country.cities.find(
              (city) => city.id === searchedCity.id
            )
            if (!foundCity) return false
            if (!inArray(selectedCity, foundCity.id))
              addSelectedCity(searchedCity)
            return true
          })
          if (!foundCountry) return false
          if (selectedCountry?.id !== foundCountry.id)
            setSelectedCountry(foundCountry)
          return true
        })
        if (foundRegion) setDefaultOpenRegion(foundRegion.id)
      }

      if (location.state.data.categories.length) {
        const searchedCategory = location.state.data.categories[0]
        const foundCategory = categoryData.data.find(
          (category) => category.id === searchedCategory.id
        )
        if (foundCategory && !inArray(selectedCategory, foundCategory.id))
          addSelectedCategory(foundCategory)
      }

      if (location.state.data.subcategories.length) {
        const searchedSubcategory = location.state.data.subcategories[0]
        const foundCategory = categoryData.data.find((category) => {
          const foundSubcategory = category.subcategories.find(
            (subcategory) => subcategory.id === searchedSubcategory.id
          )
          if (!foundSubcategory) return false
          if (!inArray(selectedSubcategory, foundSubcategory.id))
            addSelectedSubcategory({
              ...foundSubcategory,
              categoryId: category.id,
            })
          return true
        })
        if (foundCategory && !inArray(selectedCategory, foundCategory.id))
          addSelectedCategory(foundCategory)
      }
    }
  }, [location.state])
}

export default useInitializeState
