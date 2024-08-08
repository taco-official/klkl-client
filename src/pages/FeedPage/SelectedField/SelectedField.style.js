import styled from 'styled-components'
import { StyleSection, ContentContainer } from '../FeedPage.style'

const FieldSection = styled(StyleSection)`
  justify-content: space-between;
  align-items: flex-start;
  > div {
    display: flex;
    align-items: flex-start;
    column-gap: 1rem;
    > h6.title {
      padding-top: 0.2rem;
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
