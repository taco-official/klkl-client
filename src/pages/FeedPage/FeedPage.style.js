import styled from 'styled-components'
import theme from '../../styles/theme'

const fontTheme = {
  token: {
    fontFamily: theme.style.main,
  },
}

const tagTheme = {
  ...fontTheme,
  token: {
    fontSize: theme.size.textXS,
  },
}

const FeedPageLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 1rem;
`

const FeedPageContent = styled.div`
  display: flex;
  justify-content: center;
  column-gap: 2.5rem;
`

const FeedArea = styled.section`
  display: flex;
  flex-direction: column;
  flex: 0 1 content;
  align-items: flex-start;
  row-gap: 1.1rem;
`

const FeedContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0 1;
  align-items: center;
  row-gap: 1.1rem;
`

const StyleSection = styled.section`
  width: 42rem;
  display: flex;
  align-items: flex-start;
  flex-basis: content;
  column-gap: 1rem;
  > h6.title {
    font-size: ${theme.size.textSM};
    padding: 0.3125rem 0;
    flex: 0 content;
  }
`

const ContentContainer = styled.div`
  flex-grow: 1;
  display: flex;
  align-content: flex-start;
  flex-wrap: wrap;
  gap: 0.4rem 0.5rem;
`

export {
  fontTheme,
  tagTheme,
  FeedPageLayout,
  FeedPageContent,
  FeedArea,
  FeedContainer,
  StyleSection,
  ContentContainer,
}
