import React from 'react'
import { BasicFilterProvider } from '../../contexts/BasicFilterContext'
import { AdditionalFilterProvider } from '../../contexts/AdditionalFilterContext'
import FilterSection from './FilterSection'

function AdditionalFilter() {
  return (
    <BasicFilterProvider>
      <AdditionalFilterProvider>
        <FilterSection />
      </AdditionalFilterProvider>
    </BasicFilterProvider>
  )
}

export default AdditionalFilter
