import React from 'react'
import TagDataFetcher from './TagDataFetcher'
import TagDataStatusRenderer from './TagDataStatusRenderer'
import { StyleSection, ContentContainer } from '../../FeedPage.style'

function AdditionalFilter() {
  return (
    <StyleSection>
      <h6 className="title">추가 필터</h6>
      <ContentContainer className="content">
        <TagDataFetcher>
          {({ isLoading, loading, data, isError, error }) => (
            <TagDataStatusRenderer
              isLoading={isLoading}
              loading={loading}
              data={data}
              isError={isError}
              error={error}
            />
          )}
        </TagDataFetcher>
      </ContentContainer>
    </StyleSection>
  )
}

export default AdditionalFilter
