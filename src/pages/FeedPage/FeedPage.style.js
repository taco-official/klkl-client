import styled from 'styled-components'

const PageMain = styled.main`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  column-gap: 2rem;
  > :nth-child(n) {
    border: 0.0625rem solid transparent;
  }
`

const FeedArea = styled.section`
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  row-gap: 0.1rem;
  > :nth-child(n) {
    border: 0.0625rem solid transparent;
  }
`

const StyleSection = styled.section`
  width: 42.275rem;
  padding: 0.5rem 0.8rem;
  display: flex;
  flex-basis: content;
  flex-grow: 0;
  flex-shrink: 0;
  column-gap: 1rem;
`

const ContentContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  column-gap: 1rem;
`

export { PageMain, FeedArea, StyleSection, ContentContainer }
