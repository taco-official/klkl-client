import React from 'react'
// import axios from 'axios'
import { BasicFilterProvider } from '../../contexts/BasicFilterContext'
import CountrySection from './CountrySection'
import CitySection from './CitySection'
import CategorySection from './CategorySection'
import { FilterContainer } from './BasicFilter.style'

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
