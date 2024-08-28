import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useShallow } from 'zustand/react/shallow'
import { Pagination } from 'antd'
import { method } from '../../../../hooks/kyInstance'
import useKy from '../../../../hooks/useKy'
import useFeedStore from '../../../../stores/useFeedStore'
import parseQueryParams from '../../../../utils/parseQueryParams'

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

  const queryData = []

  useEffect(() => {
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
  }, [selectedCountry, selectedCity])

  useEffect(() => {
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
  }, [selectedCategory, selectedSubCategory])

  useEffect(() => {
    if (selectedTag.length) {
      queryData.push({
        key: 'tag_id',
        value: selectedTag.map((tag) => tag.id),
      })
    }
  }, [selectedTag])

  useEffect(() => {
    if (Object.keys(selectedSort).length) {
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
    }
  }, [selectedSort])

  useEffect(() => {
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
  const { queryArray } = useProductQuery()
  const [page, setPage] = useState({ requestPage: 0, size: 9 })
  const [productDataList, setProductDataList] = useState([])
  const [requestURI, setRequestURI] = useState(
    parseQueryParams('products', [
      {
        key: 'page',
        value: page.requestPage,
      },
      {
        key: 'size',
        value: page.size,
      },
      ...queryArray,
    ])
  )
  const { loading, data: productData, error, fetchData } = useKy()

  useEffect(() => {
    setRequestURI(
      parseQueryParams('products', [
        {
          key: 'page',
          value: page.requestPage,
        },
        {
          key: 'size',
          value: page.size,
        },
        ...queryArray,
      ])
    )
  }, [page, queryArray])

  useEffect(() => {
    fetchData({
      url: requestURI,
      method: method.GET,
    })
  }, [requestURI])

  useEffect(() => {
    if (!loading && !error && productData) {
      setProductDataList(productData.data.content)
    }
  }, [loading, error, productData])

  return (
    <>
      {children({ loading, productDataList, error })}
      <Pagination
        defaultCurrent={1}
        current={page.requestPage + 1}
        total={productData?.data.totalElements || 0}
        pageSize={page.size}
        onChange={(pageNumber) =>
          setPage((prev) => ({ ...prev, requestPage: pageNumber - 1 }))
        }
      />
    </>
  )
}

ProductDataFetcher.propTypes = {
  children: PropTypes.func,
}

export default ProductDataFetcher
