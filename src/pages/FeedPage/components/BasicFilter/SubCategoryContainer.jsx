import React from 'react'
import PropTypes from 'prop-types'
import { Checkbox } from 'antd'
import useFeedStore from '../../../../stores/useFeedStore'
import inArray from '../../../../utils/inArray'
import { SubSelectContainer, SelectWrapper } from './BasicFilter.style'

function SubCategoryCheckbox({ categoryId, subCategory }) {
  const selectedSubCategory = useFeedStore((state) => state.selectedSubCategory)
  const [addSelectedSubCategory, deleteSelectedSubCategory] = useFeedStore(
    (state) => [state.addSelectedSubCategory, state.deleteSelectedSubCategory]
  )

  const subCategoryInSelected = inArray(selectedSubCategory, subCategory.id)

  const handleCheckboxChange = () => {
    if (subCategoryInSelected) {
      deleteSelectedSubCategory(subCategory.id)
    } else {
      addSelectedSubCategory({ ...subCategory, categoryId })
    }
  }

  return (
    <SelectWrapper>
      <Checkbox
        id={subCategory.id}
        name={subCategory.name}
        checked={subCategoryInSelected}
        onChange={handleCheckboxChange}
      >
        {subCategory.name}
      </Checkbox>
    </SelectWrapper>
  )
}

SubCategoryCheckbox.propTypes = {
  categoryId: PropTypes.number.isRequired,
  subCategory: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
}

function SubCategoryContainer({ categoryId, subCategories }) {
  if (!subCategories.length)
    return (
      <SubSelectContainer>
        <div className="empty">카테고리가 없습니다.</div>
      </SubSelectContainer>
    )

  return (
    <SubSelectContainer>
      {subCategories.map((subCategory) => (
        <SubCategoryCheckbox
          key={subCategory.id}
          categoryId={categoryId}
          subCategory={subCategory}
        />
      ))}
    </SubSelectContainer>
  )
}

SubCategoryContainer.propTypes = {
  categoryId: PropTypes.number.isRequired,
  subCategories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
}

export default SubCategoryContainer
