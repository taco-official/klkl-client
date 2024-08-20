import styled from 'styled-components'
import theme from '../../styles/theme'

const antdTheme = {
  token: {
    fontFamily: theme.style.main,
  },
}

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const PageContent = styled.div`
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
  align-items: flex-start;
  flex-basis: content;
  column-gap: 1rem;
  > h6.title {
    font-size: ${theme.size.textSM};
    padding: 0.3125rem 0rem;
    flex-basis: content;
    flex-shrink: 0;
  }
`

const ContentContainer = styled.div`
  flex-grow: 1;
  display: flex;
  align-content: flex-start;
  flex-wrap: wrap;
  row-gap: 0.4rem;
  column-gap: 0.5rem;
`

export {
  antdTheme,
  PageContainer,
  PageContent,
  FeedArea,
  StyleSection,
  ContentContainer,
}
