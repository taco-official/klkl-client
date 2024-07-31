import React from 'react'
// import axios from 'axios'
// import TestSection from './TestSection'
import CountrySection from './CountrySection'
import CitySection from './CitySection'
import CategorySection from './CategorySection'
import { BasicFilterProvider } from './BasicFilterContext'
// <TestSection />

function BasicFilter() {
  return (
    <BasicFilterProvider>
      <div>
        <CountrySection />
        <CitySection />
        <CategorySection />
      </div>
    </BasicFilterProvider>
  )
}

export default BasicFilter
