import React from 'react'
import PropTypes from 'prop-types'
import { ConfigProvider } from 'antd'
import CountrySection from './CountrySection'
import CitySection from './CitySection'
import CategorySection from './CategorySection'
import { FilterContainer } from './BasicFilter.style'
import { fontTheme } from '../../FeedPage.style'

function BasicFilter({ regionData, categoryData, defaultOpenRegion }) {
  return (
    <FilterContainer>
      <ConfigProvider theme={fontTheme}>
        <CountrySection
          className="section"
          data={regionData}
          defaultOpenId={defaultOpenRegion}
        />
        <CitySection className="section" />
        <CategorySection
          className="section"
          data={categoryData}
        />
      </ConfigProvider>
    </FilterContainer>
  )
}

BasicFilter.propTypes = {
  regionData: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  categoryData: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  defaultOpenRegion: PropTypes.number,
}

export default BasicFilter
