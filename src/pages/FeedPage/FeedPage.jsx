import React, { useEffect } from 'react'
import { useLoaderData, useLocation } from 'react-router-dom'
import { useShallow } from 'zustand/react/shallow'
import useFeedStore from '../../stores/useFeedStore'
import inArray from '../../utils/inArray'
import Thumbnail from './components/Thumbnail/Thumbnail'
import BasicFilter from './components/BasicFilter/BasicFilter'
import AdditionalFilter from './components/AdditionalFilter/AdditionalFilter'
import SelectedField from './components/SelectedField/SelectedField'
import ProductDataStatusRenderer from '../../components/ProductList/ProductDataStatusRenderer'
import { FeedPageLayout, FeedPageContent, FeedArea } from './FeedPage.style'

function FeedPage() {
  const location = useLocation()
  const { regionResponse: regionData, categoryResponse: categoryData } =
    useLoaderData()
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
    resetSelectedField,
    setDefaultOpenRegion,
  } = useFeedStore((state) => ({
    setSelectedCountry: state.setSelectedCountry,
    addSelectedCity: state.addSelectedCity,
    addSelectedCategory: state.addSelectedCategory,
    addSelectedSubCategory: state.addSelectedSubCategory,
    resetSelectedField: state.resetSelectedField,
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
    return resetSelectedField
  }, [])

  return (
    <FeedPageLayout>
      <Thumbnail />
      <FeedPageContent>
        <BasicFilter />
        <FeedArea>
          <AdditionalFilter />
          <SelectedField />
          <ProductDataStatusRenderer />
        </FeedArea>
      </FeedPageContent>
    </FeedPageLayout>
  )
}

export default FeedPage
