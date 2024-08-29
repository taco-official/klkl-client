import React from 'react'
import styled from 'styled-components'
import { Input } from 'antd'
import theme from '../../styles/theme'
import useUserStore from '../../stores/useUserStore'

function NicknameInput() {
  const setNickname = useUserStore((state) => state.setNickname)

  return (
    <InfoBox>
      닉네임
      <StyledInput
        showCount
        maxLength={15}
        placeholder="닉네임 변경"
        onChange={(e) => setNickname(e.target.value)}
      />
    </InfoBox>
  )
}

const InfoBox = styled.div`
  margin: 2.5rem 0;
  font-size: ${theme.size.textSM};
  color: ${theme.color.textGrey};

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const StyledInput = styled(Input)`
  width: 50%;
  margin-top: 10px;
  font-family: ${theme.style.main};

  input {
    font-family: inherit;
  }

  span {
    font-size: ${theme.size.text2XS};
  }
`

export default NicknameInput
