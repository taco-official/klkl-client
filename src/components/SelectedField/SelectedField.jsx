import React from 'react'
import CityField from './CityField'
import CategoryField from './CategoryField'
import FilterField from './FilterField'
import { FieldSection, FieldContainer } from './SelectedField.style'

function SelectedField() {
  return (
    <FieldSection>
      <h5>선택 필드</h5>
      <FieldContainer>
        <CityField />
        <CategoryField />
        <FilterField />
      </FieldContainer>
    </FieldSection>
  )
}

export default SelectedField
