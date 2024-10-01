import React from 'react'
import PropTypes from 'prop-types'
import { Checkbox } from 'antd'
import useFeedStore from '@stores/useFeedStore'
import inArray from '@utils/inArray'
import { SelectWrapper } from './BasicFilter.style'

function SubcategoryCheckbox({ categoryId, subcategory }) {
  const selectedSubcategory = useFeedStore((state) => state.selectedSubcategory)
  const [addSelectedSubcategory, deleteSelectedSubcategory] = useFeedStore(
    (state) => [state.addSelectedSubcategory, state.deleteSelectedSubcategory]
  )

  const subcategoryInSelected = inArray(selectedSubcategory, subcategory.id)

  const handleCheckboxChange = () => {
    if (subcategoryInSelected) {
      deleteSelectedSubcategory(subcategory.id)
    } else {
      addSelectedSubcategory({ ...subcategory, categoryId })
    }
  }

  return (
    <Checkbox
      id={subcategory.id}
      name={subcategory.name}
      checked={subcategoryInSelected}
      onChange={handleCheckboxChange}
    >
      {subcategory.name}
    </Checkbox>
  )
}

SubcategoryCheckbox.propTypes = {
  categoryId: PropTypes.number.isRequired,
  subcategory: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
}

function SubcategoryArray({ categoryId, subcategories }) {
  if (!subcategories.length)
    return <div className="empty">카테고리가 없습니다.</div>

  return subcategories.map((subcategory) => (
    <SelectWrapper key={subcategory.id}>
      <SubcategoryCheckbox
        categoryId={categoryId}
        subcategory={subcategory}
      />
    </SelectWrapper>
  ))
}

SubcategoryArray.propTypes = {
  categoryId: PropTypes.number.isRequired,
  subcategories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
}

export default SubcategoryArray
