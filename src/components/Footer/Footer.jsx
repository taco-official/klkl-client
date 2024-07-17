/* eslint-disable react/react-in-jsx-scope */
import styled from 'styled-components'

const StyledFooter = styled.footer`
  height: 200px;
  font-size: 1.1rem;
  text-align: center;
  color: grey;
  padding: 24px;
  border-top: 1px solid lightgrey;
`

function Footer() {
  return (
    <StyledFooter>
      끼룩 by yham, sayoon, yeongo, jeelee, sanghwal, youngmch
    </StyledFooter>
  )
}

export default Footer
