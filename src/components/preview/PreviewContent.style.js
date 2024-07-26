import styled from 'styled-components'
import theme from '../../style/theme'

const PreviewContainer = styled.div`
  width: 13rem;
  background-color: white;
  border: 0.1rem solid black;
  padding: 0.5rem;
  margin: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const ThumbnailContainer = styled.div`
  height: 13rem;
  border: 0.09rem solid transparent;
  margin-bottom: 0.25rem;
  position: relative;
  justify-content: center;
  img {
    width: 100%;
    height: 100%;
  }
  :nth-child(2) {
    position: absolute;
    bottom: 0.3rem;
    right: 0.7rem;
  }
`

const DescriptionContainer = styled.div`
  padding: 0.1rem 0.1rem 0rem 0.1rem;
`

const SubDesContainer = styled.div`
  height: 1.2rem;
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.15rem;
`

const CategoryBox = styled.div`
  font-size: ${theme.size.textXS};
  padding-left: 0.1rem;
  color: ${theme.color.textGrey};
  display: flex inline-block;
  align-items: space-between;
  :nth-child(n) {
    display: inline-block;
  }
  .city {
    margin-right: 0.4rem;
  }
`

const TitleBox = styled.div`
  font-size: ${theme.size.titleMD};
  margin-bottom: 0.1rem;
`

const TagsContainer = styled.div`
  margin-top: 0.5rem;
  margin-bottom: 0.4rem;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  :nth-child(n) {
    margin-right: 0.3rem;
  }
  :last-child {
    margin-right: 0rem;
  }
`

const LikeBox = styled.div`
  display: flex;
  font-size: ${theme.size.textXS};
  color: red;
  align-items: flex-start;
  :first-child {
    margin-right: 0.3rem;
  }
`

export {
  PreviewContainer,
  ThumbnailContainer,
  DescriptionContainer,
  SubDesContainer,
  CategoryBox,
  TitleBox,
  TagsContainer,
  LikeBox,
}
