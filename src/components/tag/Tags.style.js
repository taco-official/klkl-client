import styled from 'styled-components'
import theme from '../../styles/theme'

const StyleTag = styled.div`
  font-size: ${theme.size.text2XS};
  padding: ${(props) => props.$padding || '0.3rem'};
  border: 0.0625rem solid;
  border-radius: 0.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-basis: content;
  flex-shrink: 0;
  column-gap: 0.3rem;
`

const WhiteTag = styled(StyleTag)`
  background-color: white;
  color: ${theme.color.main};
`

const BlueTag = styled(StyleTag)`
  border-color: ${theme.color.tag};
  background-color: ${theme.color.tag};
  color: ${theme.color.main};
`

const WhiteFieldTag = styled(WhiteTag)`
  font-size: ${theme.size.textXS};
`

const BlueFieldTag = styled(BlueTag)`
  border-color: ${theme.color.main};
  background-color: ${theme.color.main};
  color: white;
  font-size: ${theme.size.textXS};
`

export { StyleTag, WhiteTag, BlueTag, WhiteFieldTag, BlueFieldTag }
