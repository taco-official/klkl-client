import React, { useState, useEffect } from 'react'
import { useShallow } from 'zustand/react/shallow'
import { Checkbox } from 'antd'
import PropTypes from 'prop-types'
// import useKy from '../../../../hooks/useKy'
import useFeedStore from '../../../../stores/useFeedStore'
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
    inArray,
    addSelectedCategory,
    deleteSelectedCategory,
    deleteSelectedSubCategoriesByCategoryId,
  ] = useFeedStore((state) => [
    state.inArray,
    state.addSelectedCategory,
    state.deleteSelectedCategory,
    state.deleteSelectedSubCategoriesByCategoryId,
  ])

  const handleCategoryCheckboxChange = () => {
    if (inArray(selectedCategory, category.categoryId)) {
      deleteSelectedSubCategoriesByCategoryId(category.categoryId)
      deleteSelectedCategory(category.categoryId)
    } else {
      addSelectedCategory({ id: category.categoryId, name: category.name })
    }
  }

  const selectedArrayLength = selectedSubCategory.filter(
    (selected) => selected.categoryId === category.categoryId
  ).length

  return (
    <>
      <SelectWrapper>
        <Checkbox
          checked={
            inArray(selectedCategory, category.categoryId) ||
            selectedArrayLength === category.subCategoryCount
          }
          indeterminate={
            selectedArrayLength > 0 &&
            selectedArrayLength < category.subCategoryCount
          }
          onChange={handleCategoryCheckboxChange}
        >
          {category.name}
        </Checkbox>
      </SelectWrapper>
      {inArray(selectedCategory, category.categoryId) ? (
        <SubCategoryContainer categoryId={category.categoryId} />
      ) : null}
    </>
  )
}

CategoryCheckBox.propTypes = {
  category: PropTypes.shape({
    categoryId: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    subCategoryCount: PropTypes.number.isRequired,
  }).isRequired,
}

function CategoryArray() {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    const fetchCategories = () => {
      const categoriesData = {
        data: [
          {
            categoryId: 10000,
            name: '카테고리 1',
            subCategoryCount: 3,
          },
          {
            categoryId: 20000,
            name: '카테고리 2',
            subCategoryCount: 3,
          },
        ],
      }
      setCategories(categoriesData.data)
    }

    fetchCategories()
  }, [])

  if (categories.length === 0)
    return <SelectContainer>카테고리가 없습니다.</SelectContainer>

  return categories.map((category) => (
    <SelectContainer key={category.categoryId}>
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
