import styled from 'styled-components'
import theme from '../../../../styles/theme'

const StyledList = styled.article`
  min-width: 36rem;
  margin-top: 0.5rem;
  margin-bottom: 1.5rem;
  display: grid;
  grid-template-columns: repeat(3, minmax(auto, 11rem));
  gap: 1.4rem 1.5rem;
  &.empty {
    font-color: ${theme.color.textGrey};
    min-height: 15rem;
    margin-bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 1;
  }
`

export default StyledList
