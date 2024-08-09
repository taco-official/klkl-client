import React from 'react'
import FilterSwitchArray from './FilterSection'
import { FilterContainer, FilterSection } from './AdditionalFilter.style'

function AdditionalFilter() {
  return (
    <FilterSection>
      <h6 className="title">추가 필터</h6>
      <FilterContainer className="content">
        <FilterSwitchArray />
      </FilterContainer>
    </FilterSection>
  )
}

export default AdditionalFilter
