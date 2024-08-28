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

  const handleCheckboxChange = () => {
    if (inArray(selectedSubCategory, subCategory.id)) {
      deleteSelectedSubCategory(subCategory.id)
    } else {
      addSelectedSubCategory({ ...subCategory, categoryId })
    }
  }

  return (
    <SelectWrapper>
      <Checkbox
        checked={inArray(selectedSubCategory, subCategory.id)}
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

function SubCategoryContainer({ categoryId }) {
  const selectedCategory = useFeedStore((state) => state.selectedCategory)
  const { subCategories } = selectedCategory.find(
    (selected) => selected.id === categoryId
  )

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
}

export default SubCategoryContainer
