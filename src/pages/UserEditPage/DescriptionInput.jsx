import React from 'react'
import styled from 'styled-components'
import { Input } from 'antd'
import theme from '@styles/theme'
import useLoginStore from '@stores/useLoginStore'
import useUserStore from '@stores/useUserStore'

function DescriptionInput() {
  const loginData = useLoginStore((state) => state.loginData)
  const setDescription = useUserStore((state) => state.setDescription)

  return (
    <InfoBox>
      자기소개
      <StyledTextArea
        showCount
        defaultValue={loginData.description}
        maxLength={50}
        placeholder="자기소개 변경"
        autoSize={{ minRows: 2 }}
        onBlur={(e) => {
          const newDescription = e.target.value.trim()
          if (newDescription && newDescription !== loginData.description)
            setDescription(e.target.value)
        }}
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

const StyledTextArea = styled(Input.TextArea)`
  width: 50%;
  margin-top: 10px;
  font-family: ${theme.style.main};

  textarea {
    font-family: inherit;
  }

  span {
    font-size: ${theme.size.text2XS};
  }
`

export default DescriptionInput
