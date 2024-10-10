import { useRef } from 'react'
import { useShallow } from 'zustand/react/shallow'
import { isEqual } from 'lodash-es'
import useFeedStore from '@stores/useFeedStore'

function useCityQuery() {
  const [selectedCountry, selectedCity] = useFeedStore(
    useShallow((state) => [state.selectedCountry, state.selectedCity])
  )
  const cityQuery = {}

  if ('cities' in selectedCountry) {
    if (!selectedCity.length)
      cityQuery.city_id = selectedCountry.cities.map((city) => city.id)
    else cityQuery.city_id = selectedCity.map((city) => city.id)
  }

  return cityQuery
}

function useSubcategoryQuery() {
  const [selectedCategory, selectedSubcategory] = useFeedStore(
    useShallow((state) => [state.selectedCategory, state.selectedSubcategory])
  )
  const subcategoryQuery = {}

  if (selectedCategory.length) {
    const subcategoryArray = selectedCategory.reduce((acc, selected) => {
      if (
        !selectedSubcategory.some(
          (selectedSub) => selectedSub.categoryId === selected.id
        )
      )
        acc.push(...selected.subcategories.map((subcategory) => subcategory.id))
      return acc
    }, [])
    subcategoryArray.push(...selectedSubcategory.map((selected) => selected.id))
    if (subcategoryArray.length)
      subcategoryQuery.subcategory_id = subcategoryArray
  }

  return subcategoryQuery
}

function useTagQuery() {
  const selectedTag = useFeedStore((state) => state.selectedTag)
  const tagQuery = {}

  if (selectedTag.length) tagQuery.tag_id = selectedTag.map((tag) => tag.id)

  return tagQuery
}

function useSortQuery() {
  const selectedSort = useFeedStore((state) => state.selectedSort)
  const sortQuery = {
    sort_by: selectedSort.sortBy,
    sort_direction: selectedSort.sortDirection,
  }

  return sortQuery
}

function useProductQuery(pageNumber, setPageData) {
  const cityQuery = useCityQuery()
  const subcategoryQuery = useSubcategoryQuery()
  const tagQuery = useTagQuery()
  const sortQuery = useSortQuery()
  const prevSearchQuery = useRef({})
  const newSearchQuery = {
    ...cityQuery,
    ...subcategoryQuery,
    ...tagQuery,
    ...sortQuery,
  }

  if (
    !isEqual(prevSearchQuery.current, newSearchQuery) &&
    Object.keys(newSearchQuery).length
  ) {
    prevSearchQuery.current = newSearchQuery
    if (pageNumber !== 0)
      setPageData((prev) => ({
        ...prev,
        page: 0,
      }))
  }

  return prevSearchQuery.current
}

export default useProductQuery
