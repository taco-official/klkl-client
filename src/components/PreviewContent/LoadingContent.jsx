import React from 'react'
import {
  PreviewContainer,
  ThumbnailContainer,
  LoadingIcon,
  DescriptionContainer,
  TitleContainer,
  SubDesBox,
  CategoryWrapper,
  ProductNameBox,
  TagsContainer,
  IconBox,
} from './PreviewContent.style'

function LoadingContent() {
  return (
    <PreviewContainer>
      <ThumbnailContainer className="loading">
        <LoadingIcon size="2rem" />
      </ThumbnailContainer>
      <DescriptionContainer className="loading">
        <TitleContainer>
          <SubDesBox className="loading">
            <CategoryWrapper className="loading" />
          </SubDesBox>
          <ProductNameBox className="loading" />
        </TitleContainer>
        <TagsContainer className="loading" />
        <IconBox className="loading" />
      </DescriptionContainer>
    </PreviewContainer>
  )
}

export default LoadingContent
