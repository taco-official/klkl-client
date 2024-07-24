import React from 'react'
import {
  PreviewContainer,
  DescriptionContainer,
  SubDesContainer,
} from './PreviewContent.style'
import {
  LoadingContainer,
  LoadingIcon,
  CategoryMaskBox,
  TitleMaskBox,
  TagsMaskBox,
  LikeMaskBox,
} from './LoadingContent.style'

function LoadingContent() {
  return (
    <PreviewContainer>
      <LoadingContainer>
        <LoadingIcon size="2rem" />
      </LoadingContainer>
      <DescriptionContainer>
        <SubDesContainer>
          <CategoryMaskBox />
        </SubDesContainer>
        <TitleMaskBox />
        <TagsMaskBox />
        <LikeMaskBox />
      </DescriptionContainer>
    </PreviewContainer>
  )
}

export default LoadingContent
