import styled from 'styled-components'
import theme from '../../style/theme'

const StyleTag = styled.div`
  font-size: ${theme.size.text2XS};
  padding: 0.25rem 0.3rem 0.25rem 0.3rem;
  border: 0.0625rem solid;
  border-radius: 0.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-basis: content;
  flex-shrink: 0;
  > :nth-child(n) {
    margin-right: 0.3rem;
  }
  > :last-child {
    margin-right: 0;
  }
`

const WhiteTag = styled(StyleTag)`
  background-color: white;
  color: ${theme.color.main};
`

const BlueTag = styled(StyleTag)`
  border-color: ${theme.color.main};
  background-color: ${theme.color.tag};
  color: ${theme.color.main};
`

export { WhiteTag, BlueTag }
