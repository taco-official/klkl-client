import React from 'react'
import PropTypes from 'prop-types'
import { Checkbox } from 'antd'
import useFeedStore from '../../../../stores/useFeedStore'
import inArray from '../../../../utils/inArray'
import { SelectWrapper } from './BasicFilter.style'

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
    <Checkbox
      id={subCategory.id}
      name={subCategory.name}
      checked={subCategoryInSelected}
      onChange={handleCheckboxChange}
    >
      {subCategory.name}
    </Checkbox>
  )
}

SubCategoryCheckbox.propTypes = {
  categoryId: PropTypes.number.isRequired,
  subCategory: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
}

function SubCategoryArray({ categoryId, subCategories }) {
  if (!subCategories.length)
    return <div className="empty">카테고리가 없습니다.</div>

  return subCategories.map((subCategory) => (
    <SelectWrapper key={subCategory.id}>
      <SubCategoryCheckbox
        categoryId={categoryId}
        subCategory={subCategory}
      />
    </SelectWrapper>
  ))
}

SubCategoryArray.propTypes = {
  categoryId: PropTypes.number.isRequired,
  subCategories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
}

export default SubCategoryArray
