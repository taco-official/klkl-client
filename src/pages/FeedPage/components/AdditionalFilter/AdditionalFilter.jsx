import React from 'react'
import { StyleSection, ContentContainer } from '../../FeedPage.style'
import TagSwitchArray from './TagSwitchArray'

function AdditionalFilter() {
  return (
    <StyleSection>
      <h6 className="title">추가 필터</h6>
      <ContentContainer className="content">
        <TagSwitchArray />
      </ContentContainer>
    </StyleSection>
  )
}

export default AdditionalFilter
