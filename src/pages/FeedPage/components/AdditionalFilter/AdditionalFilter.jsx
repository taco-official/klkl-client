import React from 'react'
import TagDataFetcher from './TagDataFetcher'
import TagSwitchList from './TagSwitch'
import { StyleSection, ContentContainer } from '../../FeedPage.style'

function AdditionalFilter() {
  return (
    <StyleSection>
      <h6 className="title">추가 필터</h6>
      <ContentContainer className="content">
        <TagDataFetcher>
          {({ queryData }) => <TagSwitchList queryData={queryData} />}
        </TagDataFetcher>
      </ContentContainer>
    </StyleSection>
  )
}

export default AdditionalFilter
