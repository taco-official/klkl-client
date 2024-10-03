import React from 'react'
import PropTypes from 'prop-types'
import { useLoaderData } from 'react-router-dom'
import { useShallow } from 'zustand/react/shallow'
import { Checkbox } from 'antd'
import inArray from '@utils/inArray'
import useFeedStore from '@stores/useFeedStore'
import SubcategoryArray from './SubcategoryArray'
import {
  SectionContainer,
  SelectContainer,
  SelectWrapper,
  SubSelectContainer,
} from './BasicFilter.style'

function CategoryCheckBox({ category }) {
  const [selectedCategory, selectedSubcategory] = useFeedStore(
    useShallow((state) => [state.selectedCategory, state.selectedSubcategory])
  )
  const [
    addSelectedCategory,
    deleteSelectedCategory,
    deleteSelectedSubcategoriesByCategoryId,
  ] = useFeedStore((state) => [
    state.addSelectedCategory,
    state.deleteSelectedCategory,
    state.deleteSelectedSubcategoriesByCategoryId,
  ])

  const subcategoryLength = category.subcategories.length

  const selectedSubcategoryLength = selectedSubcategory.filter(
    (selected) => selected.categoryId === category.id
  ).length

  const categoryInSelected = inArray(selectedCategory, category.id)

  const handleCategoryCheckboxChange = () => {
    if (categoryInSelected) {
      deleteSelectedSubcategoriesByCategoryId(category.id)
      deleteSelectedCategory(category.id)
    } else addSelectedCategory(category)
  }

  return (
    <>
      <Checkbox
        id={category.id}
        name={category.name}
        checked={
          categoryInSelected || selectedSubcategoryLength === subcategoryLength
        }
        indeterminate={
          selectedSubcategoryLength > 0 &&
          selectedSubcategoryLength < subcategoryLength
        }
        onChange={handleCategoryCheckboxChange}
      >
        {category.name}
      </Checkbox>
      {categoryInSelected && (
        <SubSelectContainer>
          <SubcategoryArray
            categoryId={category.id}
            subcategories={category.subcategories}
          />
        </SubSelectContainer>
      )}
    </>
  )
}

CategoryCheckBox.propTypes = {
  category: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    subcategories: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  }).isRequired,
}

function CategoryArray() {
  const { categoryData: data } = useLoaderData()

  if (!data) return <div className="empty">불러오는 중입니다.</div>

  if (!data.data.length)
    return <div className="empty">카테고리가 없습니다.</div>

  return data.data.map((category) => (
    <SelectWrapper key={category.id}>
      <CategoryCheckBox category={category} />
    </SelectWrapper>
  ))
}

function CategorySection() {
  return (
    <SectionContainer>
      <div className="title">상품</div>
      <SelectContainer>
        <CategoryArray />
      </SelectContainer>
    </SectionContainer>
  )
}

export default CategorySection
