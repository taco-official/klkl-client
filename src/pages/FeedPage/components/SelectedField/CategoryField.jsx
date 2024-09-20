import React from 'react'
import PropTypes from 'prop-types'
import { useShallow } from 'zustand/react/shallow'
import { CloseOutlined } from '@ant-design/icons'
import useFeedStore from '../../../../stores/useFeedStore'
import {
  BlueFieldTag,
  WhiteFieldTag,
} from '../../../../components/Tags/Tags.style'

function SubcategoryField({ selectedSubcategory, categoryId }) {
  const deleteSelectedSubcategory = useFeedStore(
    (state) => state.deleteSelectedSubcategory
  )

  return selectedSubcategory.map((selected) => {
    if (selected.categoryId !== categoryId) return null
    return (
      <BlueFieldTag key={selected.id}>
        <span>{selected.name}</span>
        <CloseOutlined onClick={() => deleteSelectedSubcategory(selected.id)} />
      </BlueFieldTag>
    )
  })
}

SubcategoryField.propTypes = {
  selectedSubcategory: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      categoryId: PropTypes.number.isRequired,
    })
  ).isRequired,
  categoryId: PropTypes.number.isRequired,
}

function CategoryField() {
  const [selectedCategory, selectedSubcategory] = useFeedStore(
    useShallow((state) => [state.selectedCategory, state.selectedSubcategory])
  )
  const deleteSelectedCategory = useFeedStore(
    (state) => state.deleteSelectedCategory
  )

  const hasSelectedSubcategories = (categoryId) => {
    return selectedSubcategory.some(
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
    if (!hasSelectedSubcategories(selected.id))
      return (
        <BlueFieldTag key={selected.id}>
          <span>{selected.name} 전체</span>
          <CloseOutlined onClick={() => deleteSelectedCategory(selected.id)} />
        </BlueFieldTag>
      )
    return (
      <SubcategoryField
        key={selected.id}
        selectedSubcategory={selectedSubcategory}
        categoryId={selected.id}
      />
    )
  })
}

export default CategoryField
