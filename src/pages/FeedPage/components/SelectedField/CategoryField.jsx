import React from 'react'
import PropTypes from 'prop-types'
import { useShallow } from 'zustand/react/shallow'
import { CloseOutlined } from '@ant-design/icons'
import useFeedStore from '../../../../stores/useFeedStore'
import {
  BlueFieldTag,
  WhiteFieldTag,
} from '../../../../components/Tags/Tags.style'

function SubCategoryField({ selectedSubCategory, categoryId }) {
  const deleteSelectedSubCategory = useFeedStore(
    (state) => state.deleteSelectedSubCategory
  )

  return selectedSubCategory.map((selected) => {
    if (selected.categoryId !== categoryId) return null
    return (
      <BlueFieldTag key={selected.id}>
        <span>{selected.name}</span>
        <CloseOutlined onClick={() => deleteSelectedSubCategory(selected.id)} />
      </BlueFieldTag>
    )
  })
}

SubCategoryField.propTypes = {
  selectedSubCategory: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      categoryId: PropTypes.number.isRequired,
    })
  ).isRequired,
  categoryId: PropTypes.number.isRequired,
}

function CategoryField() {
  const [selectedCategory, selectedSubCategory] = useFeedStore(
    useShallow((state) => [state.selectedCategory, state.selectedSubCategory])
  )
  const deleteSelectedCategory = useFeedStore(
    (state) => state.deleteSelectedCategory
  )

  const hasSelectedSubCategories = (categoryId) => {
    return selectedSubCategory.some(
      (selected) => selected.categoryId === categoryId
    )
  }

  if (!selectedCategory.length)
    return (
      <WhiteFieldTag>
        <span>카테고리 전체</span>
      </WhiteFieldTag>
    )

  return selectedCategory.map((selected) => {
    if (!hasSelectedSubCategories(selected.id))
      return (
        <BlueFieldTag key={selected.id}>
          <span>{selected.name} 전체</span>
          <CloseOutlined onClick={() => deleteSelectedCategory(selected.id)} />
        </BlueFieldTag>
      )
    return (
      <SubCategoryField
        key={selected.id}
        selectedSubCategory={selectedSubCategory}
        categoryId={selected.id}
      />
    )
  })
}

export default CategoryField
