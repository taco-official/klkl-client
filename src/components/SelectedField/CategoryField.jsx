import React, { useCallback } from 'react'
import PropTypes from 'prop-types'
import { CloseOutlined } from '@ant-design/icons'
import useSelectedCategory from '../../hooks/useSelectedCategory'
import useSelectedSubCategory from '../../hooks/useSelectedSubCategory'
import { BlueTag, WhiteTag } from '../tag/Tags.style'

function SubCategoryField({ categoryId }) {
  const { selectedSubCategory, setSelectedSubCategory } =
    useSelectedSubCategory()

  const deleteSubCategory = useCallback((id) => {
    setSelectedSubCategory(
      selectedSubCategory.filter((subCategory) => subCategory.id !== id)
    )
  }, [])

  return selectedSubCategory.map((subCategory) => {
    if (subCategory.categoryId !== categoryId) return null
    return (
      <BlueTag key={subCategory.id}>
        <span>{subCategory.name}</span>
        <CloseOutlined onClick={() => deleteSubCategory(subCategory.id)} />
      </BlueTag>
    )
  })
}

SubCategoryField.propTypes = {
  categoryId: PropTypes.number.isRequired,
}

function CategoryField() {
  const { selectedCategory } = useSelectedCategory()
  const { selectedSubCategory } = useSelectedSubCategory()

  const hasSelectedSubCategories = useCallback(
    (categoryId) => {
      return selectedSubCategory.some(
        (subCategory) => subCategory.categoryId === categoryId
      )
    },
    [selectedSubCategory]
  )

  if (selectedCategory.length === 0)
    return (
      <WhiteTag>
        <span>카테고리 전체</span>
      </WhiteTag>
    )

  return selectedCategory.map((category) => {
    if (!hasSelectedSubCategories(category.id))
      return (
        <WhiteTag key={category.id}>
          <span>{category.name} 전체</span>
        </WhiteTag>
      )
    return (
      <SubCategoryField
        key={category.id}
        categoryId={category.id}
      />
    )
  })
}

export default CategoryField
