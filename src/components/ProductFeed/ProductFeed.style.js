import styled from 'styled-components'
import theme from '../../styles/theme'

const FeedContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0 1;
  row-gap: 2.725rem;
`

const StyledFeed = styled.article`
  min-width: 36rem;
  margin-top: 0.5rem;
  margin-bottom: 1.5rem;
  display: grid;
  grid-template-columns: repeat(3, minmax(auto, 11rem));
  gap: 1.4rem 1.5rem;
  &.empty {
    color: ${theme.color.textGrey};
    min-height: 15rem;
    margin-bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 1;
  }
`

export { FeedContainer, StyledFeed }
