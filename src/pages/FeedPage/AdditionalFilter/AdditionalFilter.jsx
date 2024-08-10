import React from 'react'
import FilterSwitchArray from './FilterSection'
import { StyleSection, ContentContainer } from '../FeedPage.style'

function AdditionalFilter() {
  return (
    <StyleSection>
      <h6 className="title">추가 필터</h6>
      <ContentContainer className="content">
        <FilterSwitchArray />
      </ContentContainer>
    </StyleSection>
  )
}

export default AdditionalFilter
