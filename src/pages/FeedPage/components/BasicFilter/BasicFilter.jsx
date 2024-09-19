import React from 'react'
import { ConfigProvider } from 'antd'
import CountrySection from './CountrySection'
import CitySection from './CitySection'
import CategorySection from './CategorySection'
import { FilterContainer } from './BasicFilter.style'
import { fontTheme } from '../../FeedPage.style'

function BasicFilter() {
  return (
    <FilterContainer>
      <ConfigProvider theme={fontTheme}>
        <CountrySection className="section" />
        <CitySection className="section" />
        <CategorySection className="section" />
      </ConfigProvider>
    </FilterContainer>
  )
}

export default BasicFilter
