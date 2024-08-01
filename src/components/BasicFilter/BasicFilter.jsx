import React from 'react'
// import axios from 'axios'
import { BasicFilterProvider } from './BasicFilterContext'
import { FilterContainer } from './BasicFilter.style'
import CountrySection from './CountrySection'
import CitySection from './CitySection'
import CategorySection from './CategorySection'

function BasicFilter() {
  return (
    <BasicFilterProvider>
      <FilterContainer>
        <CountrySection />
        <CitySection />
        <CategorySection />
      </FilterContainer>
    </BasicFilterProvider>
  )
}

export default BasicFilter
