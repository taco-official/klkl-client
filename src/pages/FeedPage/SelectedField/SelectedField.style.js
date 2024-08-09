import styled from 'styled-components'
import { StyleSection, ContentContainer } from '../FeedPage.style'
import theme from '../../../styles/theme'

const FieldSection = styled(StyleSection)`
  justify-content: space-between;
  align-items: flex-end;
  > div {
    display: flex;
    align-items: flex-start;
    column-gap: 1rem;
    > h6.title {
      font-size: ${theme.size.textSM};
      padding: 0.3125rem 0rem;
      flex-basis: content;
      flex-shrink: 0;
    }
  }
`

const FieldContainer = styled(ContentContainer)`
  row-gap: 0.3rem;
  column-gap: 0.5rem;
`

export { FieldSection, FieldContainer }
