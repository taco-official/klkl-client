import React, { useState, useEffect } from 'react'
import { useShallow } from 'zustand/react/shallow'
import { Checkbox } from 'antd'
import PropTypes from 'prop-types'
import { useKyQuery } from '../../../../hooks/useKyQuery'
import useFeedStore from '../../../../stores/useFeedStore'
import inArray from '../../../../utils/inArray'
import SubCategoryContainer from './SubCategoryContainer'
import {
  SectionContainer,
  SelectContainer,
  SelectWrapper,
} from './BasicFilter.style'

function CategoryCheckBox({ category }) {
  const [selectedCategory, selectedSubCategory] = useFeedStore(
    useShallow((state) => [state.selectedCategory, state.selectedSubCategory])
  )
  const [
    addSelectedCategory,
    deleteSelectedCategory,
    deleteSelectedSubCategoriesByCategoryId,
  ] = useFeedStore((state) => [
    state.addSelectedCategory,
    state.deleteSelectedCategory,
    state.deleteSelectedSubCategoriesByCategoryId,
  ])
  const {
    isLoading,
    data: subCategoriesData,
    isError,
  } = useKyQuery(`categories/${category.id}/subcategories`, null, [
    'categories/subcategories',
    category.id,
  ])

  if (isLoading || isError) return null

  const subCategoryLength = subCategoriesData.data.subcategories.length

  const selectedArrayLength = selectedSubCategory.filter(
    (selected) => selected.categoryId === category.id
  ).length

  const handleCategoryCheckboxChange = () => {
    if (inArray(selectedCategory, category.id)) {
      deleteSelectedSubCategoriesByCategoryId(category.id)
      deleteSelectedCategory(category.id)
    } else
      addSelectedCategory({
        ...category,
        subCategories: subCategoriesData.data.subcategories,
      })
  }

  return (
    <>
      <SelectWrapper>
        <Checkbox
          checked={
            inArray(selectedCategory, category.id) ||
            selectedArrayLength === subCategoryLength
          }
          indeterminate={
            selectedArrayLength > 0 && selectedArrayLength < subCategoryLength
          }
          onChange={handleCategoryCheckboxChange}
        >
          {category.name}
        </Checkbox>
      </SelectWrapper>
      {inArray(selectedCategory, category.id) && (
        <SubCategoryContainer categoryId={category.id} />
      )}
    </>
  )
}

CategoryCheckBox.propTypes = {
  category: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
}

function CategoryArray() {
  const [categories, setCategories] = useState([])
  const { isLoading, data: categoriesData, isError } = useKyQuery('categories')

  useEffect(() => {
    if (!isLoading && !isError && categoriesData)
      setCategories(categoriesData.data)
  }, [isLoading, isError, categoriesData])

  if (isLoading)
    return (
      <SelectContainer>
        <div className="empty">불러오는 중입니다.</div>
      </SelectContainer>
    )

  if (isError)
    return (
      <SelectContainer>
        <div className="empty">로딩에 실패했습니다.</div>
      </SelectContainer>
    )

  if (!categories.length)
    return (
      <SelectContainer>
        <div className="empty">카테고리가 없습니다.</div>
      </SelectContainer>
    )

  return categories.map((category) => (
    <SelectContainer key={category.id}>
      <CategoryCheckBox category={category} />
    </SelectContainer>
  ))
}

function CategorySection() {
  return (
    <SectionContainer>
      <div className="title">상품</div>
      <CategoryArray />
    </SectionContainer>
  )
}

export default CategorySection
