import React from 'react'
import {
  PreviewContainer,
  ThumbnailContainer,
  LoadingIcon,
  DescriptionContainer,
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
        <CategoryWrapper className="loading" />
        <ProductNameBox className="loading" />
        <TagsContainer className="loading" />
        <IconBox className="loading" />
      </DescriptionContainer>
    </PreviewContainer>
  )
}

export default LoadingContent
