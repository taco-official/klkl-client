import { useState, useEffect } from 'react'
import { useShallow } from 'zustand/react/shallow'
import PropTypes from 'prop-types'
import useKyQuery from '../../../../hooks/useKyQuery'
import useFeedStore from '../../../../stores/useFeedStore'

function TagDataFetcher({ children }) {
  const [selectedCategory, selectedSubCategory] = useFeedStore(
    useShallow((state) => [state.selectedCategory, state.selectedSubCategory])
  )
  const {
    isLoading,
    data: filteredSubCategories,
    isError,
  } = useKyQuery('categories', null, undefined, {
    select: (data) => {
      if (!selectedCategory.length) {
        const allSubCategories = data.data.reduce((acc, category) => {
          acc.push(...category.subcategories)
          return acc
        }, [])
        return allSubCategories
      }
      const filteredCategories = data.data.filter(
        (category) =>
          selectedCategory.some((selected) => selected.id === category.id) &&
          !selectedSubCategory.some(
            (subCategory) => subCategory.categoryId === category.id
          )
      )
      return filteredCategories.reduce((acc, filteredCategory) => {
        acc.push(...filteredCategory.subcategories)
        return acc
      }, [])
    },
  })

  const [queryData, setQueryData] = useState([])

  useEffect(() => {
    const subCategoryValue = []
    if (!isLoading && !isError && filteredSubCategories.length) {
      subCategoryValue.push(
        ...filteredSubCategories.map((subCategory) => subCategory.id)
      )
    }
    if (selectedSubCategory.length) {
      subCategoryValue.push(
        ...selectedSubCategory.map((subCategory) => subCategory.id)
      )
    }
    if (subCategoryValue.length)
      setQueryData([
        {
          key: 'subcategory_id',
          value: subCategoryValue,
        },
      ])
  }, [filteredSubCategories, selectedSubCategory])

  return children({ queryData })
}

TagDataFetcher.propTypes = {
  children: PropTypes.func,
}

export default TagDataFetcher
