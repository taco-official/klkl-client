import React from 'react'
import styled from 'styled-components'
import { Button, ConfigProvider } from 'antd'
import theme from '../../styles/theme'

function Widthdrawl() {
  return (
    <ConfigProvider>
      <WidthdrawlBox>
        {`탈퇴하시면 개인정보는 모두 삭제되며 
				삭제된 정보는 복구할 수 없습니다
        탈퇴하시겠습니까?`}
        <Button
          danger
          type="primary"
        >
          탈퇴
        </Button>
      </WidthdrawlBox>
    </ConfigProvider>
  )
}

const WidthdrawlBox = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  row-gap: 30px;

  font-family: ${theme.style.mainBold};
  line-height: 1.5em;
  white-space: pre-line;
  text-justify: none;

  button {
    font-family: inherit;
    width: 9.375rem;
  }
`

export default Widthdrawl
