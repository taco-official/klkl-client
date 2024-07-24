import styled, { css, keyframes } from 'styled-components'
import { CgSpinner } from 'react-icons/cg'
import theme from '../../style/theme'
import {
  ThumbnailContainer,
  CategoryBox,
  TitleBox,
  TagsContainer,
  LikeBox,
} from './PreviewContent.style'

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

const loadingAnimation = keyframes`
  0% {
    background-position: 200% 50%;
  }
  100% {
    background-position: -100% 50%;
  }
`

const maskBackground = css`
  background: linear-gradient(
    90deg,
    white 25%,
    ${theme.color.lineGrey} 50%,
    white 75%
  );
  background-size: 300% 300%;
  animation: ${loadingAnimation} 3500ms linear infinite;
`

const LoadingContainer = styled(ThumbnailContainer)`
  border: 0.09rem solid ${theme.color.lineGrey};
  display: flex;
  align-items: center;
  justify-content: center;
`

const LoadingIcon = styled(CgSpinner)`
  color: ${theme.color.textGrey};
  animation: ${spin} 1000ms linear infinite;
`

const CategoryMaskBox = styled(CategoryBox)`
  ${maskBackground}
  width: 70%;
  height: 0.8rem;
`

const TitleMaskBox = styled(TitleBox)`
  ${maskBackground}
  width: 40%;
  height: ${theme.size.titleMD};
`

const TagsMaskBox = styled(TagsContainer)`
  ${maskBackground}
  width: 50%;
  height: ${theme.size.titleMD};
`

const LikeMaskBox = styled(LikeBox)`
  ${maskBackground}
  width: 20%;
  height: ${theme.size.textXS};
`

export {
  LoadingContainer,
  LoadingIcon,
  CategoryMaskBox,
  TitleMaskBox,
  TagsMaskBox,
  LikeMaskBox,
}
