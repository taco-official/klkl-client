import React, { useState, useCallback, useEffect } from 'react'
import { Checkbox } from 'antd'
import PropTypes from 'prop-types'
import useSelectedCategory from '../../hooks/useSelectedCategory'
import useSelectedSubCategory from '../../hooks/useSelectedSubCategory'
import SubCategoryContainer from './SubCategoryContainer'
import {
  SectionContainer,
  Title,
  CheckboxContainer,
  CheckboxWrapper,
} from './BasicFilter.style'

function CategoryCheckBox({ category }) {
  const { selectedCategory, setSelectedCategory } = useSelectedCategory()
  const { selectedSubCategory, setSelectedSubCategory } =
    useSelectedSubCategory()

  const handleCategoryCheckboxChange = useCallback(() => {
    if (
      selectedCategory.some((selected) => selected.id === category.categoryId)
    ) {
      setSelectedSubCategory(
        selectedSubCategory.filter(
          (selected) => selected.categoryId !== category.categoryId
        )
      )
      setSelectedCategory(
        selectedCategory.filter(
          (selected) => selected.id !== category.categoryId
        )
      )
    } else {
      setSelectedCategory([
        ...selectedCategory,
        { id: category.categoryId, name: category.name },
      ])
    }
  }, [
    selectedCategory,
    setSelectedCategory,
    selectedSubCategory,
    setSelectedSubCategory,
    category,
  ])

  useEffect(() => {
    console.log('selectedCategory', selectedCategory)
  }, [selectedCategory])

  return (
    <>
      <CheckboxWrapper>
        <Checkbox
          checked={selectedCategory.some(
            (selected) => selected.id === category.categoryId
          )}
          onChange={handleCategoryCheckboxChange}
        >
          {category.name}
        </Checkbox>
      </CheckboxWrapper>
      {selectedCategory.some(
        (selected) => selected.id === category.categoryId
      ) ? (
        <SubCategoryContainer categoryId={category.categoryId} />
      ) : null}
    </>
  )
}

CategoryCheckBox.propTypes = {
  category: PropTypes.shape({
    categoryId: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
}

function CategoryContainer() {
  const [categories, setCategories] = useState([])
  const fetchCategories = useCallback(() => {
    const categoriesData = {
      data: [
        {
          categoryId: 10000,
          name: '카테고리 1',
        },
        {
          categoryId: 20000,
          name: '카테고리 2',
        },
      ],
    }
    setCategories(categoriesData.data)
  }, [])

  useEffect(() => {
    fetchCategories()
  }, [fetchCategories])

  if (categories.length === 0)
    return <CheckboxContainer>카테고리가 없습니다.</CheckboxContainer>

  return (
    <CheckboxContainer>
      {categories.map((category) => (
        <CategoryCheckBox
          key={category.categoryId}
          category={category}
        />
      ))}
    </CheckboxContainer>
  )
}

function CategorySection() {
  return (
    <SectionContainer>
      <Title>상품</Title>
      <CategoryContainer />
    </SectionContainer>
  )
}

export default CategorySection
