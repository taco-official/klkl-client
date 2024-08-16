import React from 'react'
import CountrySection from './CountrySection'
import CitySection from './CitySection'
import CategorySection from './CategorySection'
import { FilterContainer } from './BasicFilter.style'

function BasicFilter() {
  return (
    <FilterContainer>
      <CountrySection className="section" />
      <CitySection className="section" />
      <CategorySection className="section" />
    </FilterContainer>
  )
}

export default BasicFilter
