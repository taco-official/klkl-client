import React from 'react'
import PropTypes from 'prop-types'
import { CloseOutlined } from '@ant-design/icons'
import useFeedStore from '../../stores/useFeedStore'
import {
  BlueFieldTag,
  WhiteFieldTag,
} from '../../../../components/Tags/Tags.style'

function SubCategoryField({ categoryId }) {
  const selectedSubCategory = useFeedStore((state) => state.selectedSubCategory)
  const setSelectedSubCategory = useFeedStore(
    (state) => state.setSelectedSubCategory
  )

  const deleteSubCategory = (id) => {
    setSelectedSubCategory(
      selectedSubCategory.filter((selected) => selected.id !== id)
    )
  }

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
  const selectedCategory = useFeedStore((state) => state.selectedCategory)
  const setSelectedCategory = useFeedStore((state) => state.setSelectedCategory)
  const selectedSubCategory = useFeedStore((state) => state.selectedSubCategory)

  const hasSelectedSubCategories = (categoryId) => {
    return selectedSubCategory.some(
      (selected) => selected.categoryId === categoryId
    )
  }

  if (selectedCategory.length === 0)
    return (
      <WhiteFieldTag>
        <span>카테고리 전체</span>
      </WhiteFieldTag>
    )

  const deleteCategory = (id) => {
    setSelectedCategory(
      selectedCategory.filter((selected) => selected.id !== id)
    )
  }

  return selectedCategory.map((selected) => {
    if (!hasSelectedSubCategories(selected.id))
      return (
        <BlueFieldTag key={selected.id}>
          <span>{selected.name} 전체</span>
          <CloseOutlined onClick={() => deleteCategory(selected.id)} />
        </BlueFieldTag>
      )
    return (
      <SubCategoryField
        key={selected.id}
        categoryId={selected.id}
      />
    )
  })
}

export default CategoryField
