/* eslint-disable react/react-in-jsx-scope */
import styled from 'styled-components'
import { Divider } from 'antd'

const StyledFooter = styled.footer`
  font-size: 0.75rem;
  height: 6.25rem;
  padding: 0 3.125rem;
`

function Footer() {
  return (
    <>
      <Divider />
      <StyledFooter>
        이건 끼룩끼룩 푸터입니다
        <br />
        <br />
        <a
          href="https://github.com/taco-official"
          alt="깃허브"
        >
          <img src="https://img.shields.io/badge/github-181717?style=plastic&logo=github&logoColor=white" />
        </a>
      </StyledFooter>
    </>
  )
}

export default Footer
