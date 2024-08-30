import styled from 'styled-components'
import theme from '../../../../styles/theme'

const FilterContainer = styled.aside`
  min-width: 9.5rem;
  padding-top: 1.5rem;
  display: flex;
  flex-direction: column;
  flex: 0 1 content;
`

const SectionContainer = styled.div`
  margin-top: 1.3rem;
  margin-bottom: 1.3rem;
  flex-basis: content;
  flex-shrink: 0;
  > div.title {
    font-size: ${theme.size.titleLG};
    font-weight: 800;
    margin-bottom: 0.7rem;
    margin-left: 0.3rem;
    flex-basis: content;
    flex-shrink: 0;
  }
`

const RegionContainer = styled.div`
  margin-top: 0.9rem;
  flex-basis: content;
  flex-shrink: 0;
  > :nth-child(n) {
    margin-top: 1rem;
  }
`

const RegionBox = styled.div``

const SubTitle = styled.div`
  margin-top: 0.3rem;
  margin-bottom: 0.2rem;
  &.region {
    padding-bottom: 0.3rem;
    border-bottom: 0.08rem solid ${theme.color.lineGrey};
    display: flex;
    justify-content: space-between;
    align-items: center;
    > div.region {
      font-size: ${theme.size.textSM};
      margin-right: 2.5rem;
    }
  }
  &.empty {
    font-size: ${theme.size.textSM};
    margin-top: 0.7rem;
  }
`

const SelectContainer = styled.div`
  padding-left: 0.5rem;
  margin-top: 0.5rem;
  display: flex;
  flex-direction: column;
  row-gap: 0.3rem;
`

const SubSelectContainer = styled.div`
  margin: 0.3rem 0;
  margin-left: 0.6rem;
  display: flex;
  flex-direction: column;
  row-gap: 0.3rem;
`

const SelectWrapper = styled.div``

export {
  FilterContainer,
  SectionContainer,
  RegionContainer,
  RegionBox,
  SubTitle,
  SelectContainer,
  SubSelectContainer,
  SelectWrapper,
}
