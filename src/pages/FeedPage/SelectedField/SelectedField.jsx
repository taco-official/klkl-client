import React from 'react'
import CityField from './CityField'
import CategoryField from './CategoryField'
import FilterField from './FilterField'
import ResetButton from './ResetButton'
import SortButton from './SortButton'
import { FieldSection, FieldContainer } from './SelectedField.style'

function SelectedField() {
  return (
    <FieldSection>
      <div>
        <h6 className="title">선택 필드</h6>
        <FieldContainer className="content">
          <CityField />
          <CategoryField />
          <FilterField />
          <ResetButton />
        </FieldContainer>
      </div>
      <SortButton />
    </FieldSection>
  )
}

export default SelectedField
