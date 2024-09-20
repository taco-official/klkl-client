import { useEffect, useState } from 'react'
import { useShallow } from 'zustand/react/shallow'
import useFeedStore from '../stores/useFeedStore'

function useCityQuery() {
  const initialState = {}
  const [cityQuery, setCityQuery] = useState(initialState)
  const [selectedCountry, selectedCity] = useFeedStore(
    useShallow((state) => [state.selectedCountry, state.selectedCity])
  )

  useEffect(() => {
    if ('cities' in selectedCountry) {
      if (!selectedCity.length) {
        setCityQuery({
          city_id: selectedCountry.cities.map((city) => city.id),
        })
      } else {
        setCityQuery({
          city_id: selectedCity.map((city) => city.id),
        })
      }
    } else setCityQuery(initialState)
  }, [selectedCountry, selectedCity])

  return { cityQuery }
}

function useSubcategoryQuery() {
  const initialState = {}
  const [subcategoryQuery, setSubcategoryQuery] = useState(initialState)
  const [selectedCategory, selectedSubcategory] = useFeedStore(
    useShallow((state) => [state.selectedCategory, state.selectedSubcategory])
  )

  useEffect(() => {
    if (selectedCategory.length) {
      const subcategoryValue = selectedCategory.reduce((acc, selected) => {
        if (
          !selectedSubcategory.some(
            (selectedSub) => selectedSub.categoryId === selected.id
          )
        )
          acc.push(
            ...selected.subcategories.map((subcategory) => subcategory.id)
          )
        return acc
      }, [])
      subcategoryValue.push(
        ...selectedSubcategory.map((selected) => selected.id)
      )
      setSubcategoryQuery({
        subcategory_id: subcategoryValue,
      })
    } else setSubcategoryQuery(initialState)
  }, [selectedCategory, selectedSubcategory])

  return { subcategoryQuery }
}

function useTagQuery() {
  const initialState = {}
  const [tagQuery, setTagQuery] = useState(initialState)
  const [selectedTag] = useFeedStore((state) => [state.selectedTag])

  useEffect(() => {
    if (selectedTag.length) {
      setTagQuery({
        tag_id: selectedTag.map((tag) => tag.id),
      })
    } else setTagQuery(initialState)
  }, [selectedTag])

  return { tagQuery }
}

function useSortQuery() {
  const initialState = {
    sort_by: 'created_at',
    sort_direction: 'DESC',
  }
  const [sortQuery, setSortQuery] = useState(initialState)
  const [selectedSort] = useFeedStore((state) => [state.selectedSort])

  useEffect(() => {
    setSortQuery({
      sort_by: selectedSort.sortBy,
      sort_direction: selectedSort.sortDirection,
    })
  }, [selectedSort])

  return { sortQuery }
}

function useProductQuery() {
  const { cityQuery } = useCityQuery()
  const { subcategoryQuery } = useSubcategoryQuery()
  const { tagQuery } = useTagQuery()
  const { sortQuery } = useSortQuery()
  const [queryArray, setQueryArray] = useState({
    ...cityQuery,
    ...subcategoryQuery,
    ...tagQuery,
    ...sortQuery,
  })

  useEffect(() => {
    setQueryArray({
      ...cityQuery,
      ...subcategoryQuery,
      ...tagQuery,
      ...sortQuery,
    })
  }, [cityQuery, subcategoryQuery, tagQuery, sortQuery])

  return { queryArray }
}

export default useProductQuery
