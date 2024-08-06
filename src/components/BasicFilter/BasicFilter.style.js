import styled from 'styled-components'

const FilterContainer = styled.aside`
  width: 10.625rem;
  display: flex;
  flex-direction: column;
  :nth-child(n) {
    flex-basis: content;
    flex-shrink: 0;
  }
`

const SectionContainer = styled.div``

const Title = styled.div``

const RegionContainer = styled.div``

const SubTitle = styled.div`
  display: flex;
  justify-content: space-between;
  .inBlock {
    display: inline-block;
  }
`

const RegionBox = styled.div``

const CheckboxContainer = styled.div``

const CheckboxWrapper = styled.div``

export {
  FilterContainer,
  SectionContainer,
  Title,
  RegionContainer,
  RegionBox,
  SubTitle,
  CheckboxContainer,
  CheckboxWrapper,
}
