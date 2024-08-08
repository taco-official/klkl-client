import styled from 'styled-components'
import { StyleSection, ContentContainer } from '../FeedPage.style'
import theme from '../../../style/theme'

const FilterSection = styled(StyleSection)`
  align-items: center;
  > h6.title {
    flex-basis: content;
    flex-shrink: 0;
  }
`

const FilterContainer = styled(ContentContainer)``

const FilterBox = styled.div`
  display: flex;
  align-items: center;
  column-gap: 0.5rem;
  div.filter-name {
    font-size: ${theme.size.textSM};
  }
`

export { FilterSection, FilterContainer, FilterBox }
