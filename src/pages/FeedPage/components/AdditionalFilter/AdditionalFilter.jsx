import React from 'react'
import TagDataFetcher from './TagDataFetcher'
import TagSwitchList from './TagSwitch'
import { StyleSection, ContentContainer } from '../../FeedPage.style'
import MessageBox from './TagSwitch.style'

function AdditionalFilter() {
  return (
    <StyleSection>
      <h6 className="title">추가 필터</h6>
      <ContentContainer className="content">
        <TagDataFetcher>
          {({ tags, isError, error }) => {
            if (isError || error)
              return <MessageBox>로딩에 실패했습니다.</MessageBox>
            return <TagSwitchList tags={tags} />
          }}
        </TagDataFetcher>
      </ContentContainer>
    </StyleSection>
  )
}

export default AdditionalFilter
