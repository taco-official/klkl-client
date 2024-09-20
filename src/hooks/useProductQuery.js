import { useShallow } from 'zustand/react/shallow'
import useFeedStore from '../stores/useFeedStore'

function useCityQuery() {
  const cityQuery = {}
  const [selectedCountry, selectedCity] = useFeedStore(
    useShallow((state) => [state.selectedCountry, state.selectedCity])
  )

  if ('cities' in selectedCountry) {
    if (!selectedCity.length)
      cityQuery.city_id = selectedCountry.cities.map((city) => city.id)
    else cityQuery.city_id = selectedCity.map((city) => city.id)
  }

  return cityQuery
}

function useSubcategoryQuery() {
  const subcategoryQuery = {}
  const [selectedCategory, selectedSubcategory] = useFeedStore(
    useShallow((state) => [state.selectedCategory, state.selectedSubcategory])
  )

  if (selectedCategory.length) {
    const subcategoryValue = selectedCategory.reduce((acc, selected) => {
      if (
        !selectedSubcategory.some(
          (selectedSub) => selectedSub.categoryId === selected.id
        )
      )
        acc.push(...selected.subcategories.map((subcategory) => subcategory.id))
      return acc
    }, [])
    subcategoryValue.push(...selectedSubcategory.map((selected) => selected.id))

    subcategoryQuery.subcategory_id = subcategoryValue
  }

  return subcategoryQuery
}

function useTagQuery() {
  const tagQuery = {}
  const [selectedTag] = useFeedStore((state) => [state.selectedTag])

  if (selectedTag.length) {
    tagQuery.tag_id = selectedTag.map((tag) => tag.id)
  }

  return tagQuery
}

function useSortQuery() {
  const sortQuery = {
    sort_by: 'created_at',
    sort_direction: 'DESC',
  }

  const [selectedSort] = useFeedStore((state) => [state.selectedSort])

  sortQuery.sort_by = selectedSort.sortBy
  sortQuery.sort_direction = selectedSort.sortDirection

  return sortQuery
}

function useProductQuery() {
  const cityQuery = useCityQuery()
  const subcategoryQuery = useSubcategoryQuery()
  const tagQuery = useTagQuery()
  const sortQuery = useSortQuery()
  const queryArray = {
    ...cityQuery,
    ...subcategoryQuery,
    ...tagQuery,
    ...sortQuery,
  }

  return queryArray
}

export default useProductQuery
