import { useState, useEffect } from 'react'
import { useShallow } from 'zustand/react/shallow'
import { useQueries } from '@tanstack/react-query'
import PropTypes from 'prop-types'
import kyInstance from '../../../../hooks/kyInstance'
import { useKyQuery } from '../../../../hooks/useKyQuery'
import useFeedStore from '../../../../stores/useFeedStore'

function TagDataFetcher({ children }) {
  const [selectedCategory, selectedSubCategory] = useFeedStore(
    useShallow((state) => [state.selectedCategory, state.selectedSubCategory])
  )
  const { isLoading: CategoriesLoading, data: CategoryFetchList } = useKyQuery(
    'categories',
    null,
    null,
    {
      select: (data) => {
        const categories = data.data.map((category) => category.id)
        if (!selectedCategory.length) return categories
        const filteredCategories = categories.filter(
          (category) =>
            selectedCategory.some((selected) => selected.id === category) &&
            !selectedSubCategory.some(
              (subCategory) => subCategory.categoryId === category
            )
        )
        return filteredCategories
      },
    }
  )
  const combinedQueries = useQueries({
    queries:
      !CategoriesLoading && CategoryFetchList
        ? CategoryFetchList.map((categoryId) => ({
            queryKey: ['categories/subcategories', categoryId],
            queryFn: () =>
              kyInstance.get(`categories/${categoryId}/subcategories`).json(),
            select: (data) => {
              return data.data.subcategories.map(
                (subCategory) => subCategory.id
              )
            },
            enabled: !!categoryId,
          }))
        : [],
    combine: (queryResult) => {
      return {
        data: queryResult.reduce((acc, item) => {
          if (item?.data) acc.push(...item.data)
          return acc
        }, []),
        pending: queryResult.some((result) => result.isPending),
      }
    },
  })

  const [queryData, setQueryData] = useState([])

  useEffect(() => {
    const subCategoryValue = []
    if (!combinedQueries.pending && combinedQueries.data) {
      subCategoryValue.push(...combinedQueries.data)
    }
    if (selectedSubCategory.length) {
      subCategoryValue.push(
        ...selectedSubCategory.map((subCategory) => subCategory.id)
      )
    }
    setQueryData([
      {
        key: 'subcategory_id',
        value: subCategoryValue,
      },
    ])
  }, [combinedQueries, selectedSubCategory])

  return children({ queryData })
}

TagDataFetcher.propTypes = {
  children: PropTypes.func,
}

export default TagDataFetcher
