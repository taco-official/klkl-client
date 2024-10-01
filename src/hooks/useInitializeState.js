import { useEffect } from 'react'
import { useLoaderData, useLocation } from 'react-router-dom'
import { useShallow } from 'zustand/react/shallow'
import useFeedStore from '@stores/useFeedStore'
import inArray from '@utils/inArray'

const useInitializeCountry = (locationState, regionData) => {
  const selectedCountry = useFeedStore((state) => state.selectedCountry)
  const { setSelectedCountry, setDefaultOpenRegion } = useFeedStore(
    (state) => ({
      setSelectedCountry: state.setSelectedCountry,
      setDefaultOpenRegion: state.setDefaultOpenRegion,
    })
  )

  useEffect(() => {
    if (locationState?.data?.countries.length) {
      const searchedCountry = locationState.data.countries[0]
      const foundRegion = regionData.data.find((region) => {
        const foundCountry = region.countries.find(
          (country) => country.id === searchedCountry.id
        )
        if (!foundCountry) return false
        if (selectedCountry.id !== foundCountry.id)
          setSelectedCountry(foundCountry)
        return true
      })
      if (foundRegion) setDefaultOpenRegion(foundRegion.id)
    }
  }, [window.history.state])
}

const useInitializeCity = (locationState, regionData) => {
  const { selectedCountry, selectedCity } = useFeedStore(
    useShallow((state) => ({
      selectedCountry: state.selectedCountry,
      selectedCity: state.selectedCity,
    }))
  )
  const { setSelectedCountry, addSelectedCity, setDefaultOpenRegion } =
    useFeedStore((state) => ({
      setSelectedCountry: state.setSelectedCountry,
      addSelectedCity: state.addSelectedCity,
      setDefaultOpenRegion: state.setDefaultOpenRegion,
    }))

  useEffect(() => {
    if (locationState?.data?.cities.length) {
      const searchedCity = locationState.data.cities[0]
      const foundRegion = regionData.data.find((region) => {
        const foundCountry = region.countries.find((country) => {
          const foundCity = country.cities.find(
            (city) => city.id === searchedCity.id
          )
          if (!foundCity) return false
          if (!inArray(selectedCity, foundCity.id)) addSelectedCity(foundCity)
          return true
        })
        if (!foundCountry) return false
        if (selectedCountry.id !== foundCountry.id)
          setSelectedCountry(foundCountry)
        return true
      })
      if (foundRegion) setDefaultOpenRegion(foundRegion.id)
    }
  }, [window.history.state])
}

const useInitializeCategory = (locationState, categoryData) => {
  const selectedCategory = useFeedStore((state) => state.selectedCategory)
  const addSelectedCategory = useFeedStore((state) => state.addSelectedCategory)

  useEffect(() => {
    if (locationState?.data?.categories.length) {
      const searchedCategory = locationState.data.categories[0]
      const foundCategory = categoryData.data.find(
        (category) => category.id === searchedCategory.id
      )
      if (foundCategory && !inArray(selectedCategory, foundCategory.id))
        addSelectedCategory(foundCategory)
    }
  }, [window.history.state])
}

const useInitializeSubcategory = (locationState, categoryData) => {
  const { selectedCategory, selectedSubcategory } = useFeedStore(
    useShallow((state) => ({
      selectedCategory: state.selectedCategory,
      selectedSubcategory: state.selectedSubcategory,
    }))
  )
  const { addSelectedCategory, addSelectedSubcategory } = useFeedStore(
    (state) => ({
      addSelectedCategory: state.addSelectedCategory,
      addSelectedSubcategory: state.addSelectedSubcategory,
    })
  )

  useEffect(() => {
    if (locationState?.data?.subcategories.length) {
      const searchedSubcategory = locationState.data.subcategories[0]
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
  }, [window.history.state])
}

const useInitializeState = () => {
  const location = useLocation()
  const { regionData, categoryData } = useLoaderData()

  useInitializeCountry(location.state, regionData)
  useInitializeCity(location.state, regionData)
  useInitializeCategory(location.state, categoryData)
  useInitializeSubcategory(location.state, categoryData)
}

export default useInitializeState
