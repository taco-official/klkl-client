import styled from 'styled-components'
import { StyleSection, ContentContainer } from '../FeedPage.style'
import theme from '../../../styles/theme'

const FilterSection = styled(StyleSection)`
  align-items: center;
  > h6.title {
    font-size: ${theme.size.textSM};
    flex-basis: content;
    flex-shrink: 0;
  }
`

const FilterContainer = styled(ContentContainer)``

const FilterWrapper = styled.div`
  display: flex;
  align-items: center;
  column-gap: 0.5rem;
  div.filter-name {
    font-size: ${theme.size.textSM};
  }
`

export { FilterSection, FilterContainer, FilterWrapper }
