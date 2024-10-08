import React from 'react'
import TagSwitchArray from './TagSwitchArray'
import { StyleSection, ContentContainer } from '../../FeedPage.style'

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
