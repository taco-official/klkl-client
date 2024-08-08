import React, { useCallback } from 'react'
import PropTypes from 'prop-types'
import { CloseOutlined } from '@ant-design/icons'
import useSelectedCategory from '../../../hooks/useSelectedCategory'
import useSelectedSubCategory from '../../../hooks/useSelectedSubCategory'
import { BlueFieldTag, WhiteFieldTag } from '../../../components/tag/Tags.style'

function SubCategoryField({ categoryId }) {
  const { selectedSubCategory, setSelectedSubCategory } =
    useSelectedSubCategory()

  const deleteSubCategory = useCallback(
    (id) => {
      setSelectedSubCategory(
        selectedSubCategory.filter((selected) => selected.id !== id)
      )
      console.log('deleteSubCategory', id)
    },
    [selectedSubCategory]
  )

  return selectedSubCategory.map((selected) => {
    if (selected.categoryId !== categoryId) return null
    return (
      <BlueFieldTag key={selected.id}>
        <span>{selected.name}</span>
        <CloseOutlined onClick={() => deleteSubCategory(selected.id)} />
      </BlueFieldTag>
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
      <WhiteFieldTag>
        <span>카테고리 전체</span>
      </WhiteFieldTag>
    )

  return selectedCategory.map((category) => {
    if (!hasSelectedSubCategories(category.id))
      return (
        <WhiteFieldTag key={category.id}>
          <span>{category.name} 전체</span>
        </WhiteFieldTag>
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
