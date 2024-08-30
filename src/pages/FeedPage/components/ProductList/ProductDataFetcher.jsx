import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useShallow } from 'zustand/react/shallow'
import { Pagination } from 'antd'
import useFeedStore from '../../../../stores/useFeedStore'
import { FeedContainer } from '../../FeedPage.style'
import useKyQuery from '../../../../hooks/useKyQuery'

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

function ProductDataFetcher({ children }) {
  const { queryArray: selectedQueryArray } = useProductQuery()
  const [page, setPage] = useState({ requestPage: 0, size: 9 })
  const [productDataList, setProductDataList] = useState([])
  const [requestQuery, setRequestQuery] = useState([
    {
      key: 'page',
      value: page.requestPage,
    },
    {
      key: 'size',
      value: page.size,
    },
    ...selectedQueryArray,
  ])
  const {
    isLoading,
    data: productData,
    isError,
    refetch,
  } = useKyQuery('products', requestQuery, undefined, {
    staleTime: 0,
    refetchOnMount: false,
  })

  useEffect(() => {
    setRequestQuery([
      {
        key: 'page',
        value: page.requestPage,
      },
      {
        key: 'size',
        value: page.size,
      },
      ...selectedQueryArray,
    ])
  }, [page, selectedQueryArray])

  useEffect(() => {
    refetch()
  }, [])

  useEffect(() => {
    if (!isLoading && !isError && productData) {
      setProductDataList(productData.data.content)
    }
  }, [isLoading, isError, productData])

  return (
    <FeedContainer>
      {children({ isLoading, productDataList, isError })}
      <Pagination
        defaultCurrent={1}
        current={page.requestPage + 1}
        total={productData?.data.totalElements || 0}
        pageSize={page.size}
        onChange={(pageNumber) =>
          setPage((prev) => ({ ...prev, requestPage: pageNumber - 1 }))
        }
      />
    </FeedContainer>
  )
}

ProductDataFetcher.propTypes = {
  children: PropTypes.func,
}

export default ProductDataFetcher
