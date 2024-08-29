import styled, { css, keyframes } from 'styled-components'
import { CgSpinner } from 'react-icons/cg'
import theme from '../../styles/theme'

const spinAnimation = keyframes`
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

const PreviewContainer = styled.div`
  min-width: 12.5rem;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const ThumbnailContainer = styled.div`
  width: 100%;
  aspect-ratio: 1;
  border: 0.0625rem solid transparent;
  &#productThumbnail {
    position: relative;
    > img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    > :last-child {
      position: absolute;
      bottom: 0.6rem;
      right: 0.8rem;
    }
  }
  &.loading {
    border-color: ${theme.color.lineGrey};
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

const LoadingIcon = styled(CgSpinner)`
  color: ${theme.color.textGrey};
  animation: ${spinAnimation} 1000ms linear infinite;
`

const DescriptionContainer = styled.div`
  margin: 0.3rem 0.1rem;
  &.loading {
    padding-left: 0.1rem;
  }
`

const TitleContainer = styled.div`
  margin-bottom: 0.7rem;
`

const SubDesBox = styled.div`
  margin-bottom: 0.3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  &.loading {
    height: 1.4125rem;
  }
`

const CategoryWrapper = styled.div`
  font-size: ${theme.size.textXS};
  color: ${theme.color.textGrey};
  padding-left: 0.1rem;
  display: flex;
  justify-content: space-between;
  > #country {
    margin-right: 0.5rem;
  }
  &.loading {
    ${maskBackground}
    width: 70%;
    height: 0.8rem;
  }
`

const ProductNameBox = styled.div`
  font-size: ${theme.size.textMD};
  &.loading {
    ${maskBackground}
    width: 40%;
    height: ${theme.size.titleMD};
  }
`

const TagsContainer = styled.div`
  margin-bottom: 0.7rem;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  > :not(:last-child) {
    margin-right: 0.45rem;
  }
  &.loading {
    ${maskBackground}
    width: 50%;
    height: ${theme.size.textSM};
  }
`

const IconContainer = styled.div`
  display: flex;
  > :not(:last-child) {
    margin-right: 0.6rem;
  }
`

const IconBox = styled.div`
  font-size: ${theme.size.text2XS};
  color: ${(props) => props.color};
  display: flex inline;
  align-items: flex-start;
  > :not(:last-child) {
    margin-right: 0.3rem;
  }
  &.loading {
    ${maskBackground}
    width: 20%;
    height: ${theme.size.textXS};
    display: block;
  }
`

export {
  PreviewContainer,
  ThumbnailContainer,
  LoadingIcon,
  DescriptionContainer,
  TitleContainer,
  SubDesBox,
  CategoryWrapper,
  ProductNameBox,
  TagsContainer,
  IconContainer,
  IconBox,
}
