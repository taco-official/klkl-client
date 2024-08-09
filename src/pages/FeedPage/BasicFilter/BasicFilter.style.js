import styled from 'styled-components'
import theme from '../../../style/theme'

const FilterContainer = styled.aside`
  width: 168px;
  padding: 1.7rem 1.1rem 0.5rem 1rem;
  display: flex;
  flex-direction: column;
  flex-basis: content;
  flex-shrink: 0;
  > div.title {
    font-size: ${theme.size.titleXL};
    margin-bottom: 0.7rem;
  }
`

const SectionContainer = styled.div`
  margin-top: 1.3rem;
  margin-bottom: 1.3rem;
  flex-basis: content;
  flex-shrink: 0;
  > div.title {
    font-size: ${theme.size.titleLG};
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
    border-bottom: 1px solid ${theme.color.lineGrey};
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
  padding: 0rem 0rem 0rem 0.5rem;
  margin-top: 0.5rem;
  > :not(:last-child) {
    margin-bottom: 0.1rem;
  }
`

const SubSelectContainer = styled.div`
  margin: 0.15rem 0rem 0.2rem 0.6rem;
  > :not(:last-child) {
    margin-bottom: 0.1rem;
  }
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
