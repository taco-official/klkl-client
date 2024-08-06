import React from 'react'
// import axios from 'axios'
import CountrySection from './CountrySection'
import CitySection from './CitySection'
import CategorySection from './CategorySection'
import { FilterContainer } from './BasicFilter.style'

function BasicFilter() {
  return (
    <FilterContainer>
      <CountrySection />
      <CitySection />
      <CategorySection />
    </FilterContainer>
  )
}

export default BasicFilter
