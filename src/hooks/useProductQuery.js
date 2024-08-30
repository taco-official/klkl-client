import { useEffect, useState } from 'react'
import { useShallow } from 'zustand/react/shallow'
import useFeedStore from '../stores/useFeedStore'

function useProductQuery() {
  const [queryArray, setQueryArray] = useState([])
  const [
    selectedCountry,
    selectedCity,
    selectedCategory,
    selectedSubCategory,
    selectedTag,
    selectedSort,
  ] = useFeedStore(
    useShallow((state) => [
      state.selectedCountry,
      state.selectedCity,
      state.selectedCategory,
      state.selectedSubCategory,
      state.selectedTag,
      state.selectedSort,
    ])
  )
  useEffect(() => {
    setQueryArray([])
  }, [])

  useEffect(() => {
    const queryData = []

    if (Object.keys(selectedCountry).length) {
      if (!selectedCity.length) {
        if (selectedCountry?.cities)
          queryData.push({
            key: 'city_id',
            value: selectedCountry.cities.map((city) => city.id),
          })
      } else {
        queryData.push({
          key: 'city_id',
          value: selectedCity.map((city) => city.id),
        })
      }
    }

    if (selectedCategory.length) {
      const subCategoryValue = selectedCategory.reduce((acc, category) => {
        if (
          !selectedSubCategory.some(
            (subCategory) => subCategory.categoryId === category.id
          )
        )
          acc.push(
            ...category.subCategories.map((subCategory) => subCategory.id)
          )
        return acc
      }, [])
      subCategoryValue.push(
        ...selectedSubCategory.map((subCategory) => subCategory.id)
      )
      queryData.push({
        key: 'subcategory_id',
        value: subCategoryValue,
      })
    }

    if (selectedTag.length) {
      queryData.push({
        key: 'tag_id',
        value: selectedTag.map((tag) => tag.id),
      })
    }

    queryData.push(
      {
        key: 'sort_by',
        value: selectedSort.sortBy,
      },
      {
        key: 'sort_direction',
        value: selectedSort.sortDirection,
      }
    )

    setQueryArray(queryData)
  }, [
    selectedCountry,
    selectedCity,
    selectedCategory,
    selectedSubCategory,
    selectedTag,
    selectedSort,
  ])
  return { queryArray }
}

export default useProductQuery
