import React from 'react'
import FilterSection from './FilterSection'
import { FilterContainer } from './AdditionalFilter.style'

function AdditionalFilter() {
  return (
    <FilterContainer>
      <h5>추가 필터</h5>
      <FilterSection />
    </FilterContainer>
  )
}

export default AdditionalFilter
