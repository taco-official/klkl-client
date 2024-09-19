import React from 'react'
import { useShallow } from 'zustand/react/shallow'
import { Checkbox } from 'antd'
import PropTypes from 'prop-types'
import useFeedStore from '../../../../stores/useFeedStore'
import inArray from '../../../../utils/inArray'
import SubCategoryArray from './SubCategoryArray'
import {
  SectionContainer,
  SelectContainer,
  SelectWrapper,
  SubSelectContainer,
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

  const subCategoryLength = category.subcategories.length

  const selectedSubCategoryLength = selectedSubCategory.filter(
    (selected) => selected.categoryId === category.id
  ).length

  const categoryInSelected = inArray(selectedCategory, category.id)

  const handleCategoryCheckboxChange = () => {
    if (categoryInSelected) {
      deleteSelectedSubCategoriesByCategoryId(category.id)
      deleteSelectedCategory(category.id)
    } else
      addSelectedCategory({
        id: category.id,
        name: category.name,
        subCategories: category.subcategories,
      })
  }

  return (
    <>
      <Checkbox
        id={category.id}
        name={category.name}
        checked={
          categoryInSelected || selectedSubCategoryLength === subCategoryLength
        }
        indeterminate={
          selectedSubCategoryLength > 0 &&
          selectedSubCategoryLength < subCategoryLength
        }
        onChange={handleCategoryCheckboxChange}
      >
        {category.name}
      </Checkbox>
      {categoryInSelected && (
        <SubSelectContainer>
          <SubCategoryArray
            categoryId={category.id}
            subCategories={category.subcategories}
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

function CategoryArray({ data }) {
  if (!data.data.length)
    return <div className="empty">카테고리가 없습니다.</div>

  return data.data.map((category) => (
    <SelectWrapper key={category.id}>
      <CategoryCheckBox category={category} />
    </SelectWrapper>
  ))
}

CategoryArray.propTypes = {
  data: PropTypes.shape({
    data: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
      })
    ).isRequired,
  }).isRequired,
}

function CategorySection({ data }) {
  return (
    <SectionContainer>
      <div className="title">상품</div>
      <SelectContainer>
        <CategoryArray data={data} />
      </SelectContainer>
    </SectionContainer>
  )
}

CategorySection.propTypes = {
  data: PropTypes.shape({}).isRequired,
}

export default CategorySection
