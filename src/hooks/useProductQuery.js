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

function useSubCategoryQuery() {
  const initialState = {}
  const [subCategoryQuery, setSubCategoryQuery] = useState(initialState)
  const [selectedCategory, selectedSubCategory] = useFeedStore(
    useShallow((state) => [state.selectedCategory, state.selectedSubCategory])
  )

  useEffect(() => {
    if (selectedCategory.length) {
      const subCategoryValue = selectedCategory.reduce((acc, selected) => {
        if (
          !selectedSubCategory.some(
            (selectedSub) => selectedSub.categoryId === selected.id
          )
        )
          acc.push(
            ...selected.subCategories.map((subCategory) => subCategory.id)
          )
        return acc
      }, [])
      subCategoryValue.push(
        ...selectedSubCategory.map((selected) => selected.id)
      )
      setSubCategoryQuery({
        subcategory_id: subCategoryValue,
      })
    } else setSubCategoryQuery(initialState)
  }, [selectedCategory, selectedSubCategory])

  return { subCategoryQuery }
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
  const { subCategoryQuery } = useSubCategoryQuery()
  const { tagQuery } = useTagQuery()
  const { sortQuery } = useSortQuery()
  const [queryArray, setQueryArray] = useState({
    ...cityQuery,
    ...subCategoryQuery,
    ...tagQuery,
    ...sortQuery,
  })

  useEffect(() => {
    setQueryArray({
      ...cityQuery,
      ...subCategoryQuery,
      ...tagQuery,
      ...sortQuery,
    })
  }, [cityQuery, subCategoryQuery, tagQuery, sortQuery])

  return { queryArray }
}

export default useProductQuery
