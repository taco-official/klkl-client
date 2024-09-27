import React from 'react'
import LoadingContent from '../PreviewContent/LoadingContent'
import { StyledFeed } from './ProductFeed.style'

function LoadingFeed() {
  return (
    <StyledFeed>
      <LoadingContent />
    </StyledFeed>
  )
}

export default LoadingFeed
