import React, { useState } from 'react'
import { Input, Button, ConfigProvider } from 'antd'
import styled from 'styled-components'

import { method } from '../../hooks/kyInstance'
import useKyMutation from '../../hooks/useKyMutation'
import theme from '../../styles/theme'
import ProfileImage from '../UserProfile/ProfileImage'

const inputTheme = {
  components: {
    Input: {
      activeShadow: 'none',
    },
  },
  token: {
    fontFamily: theme.style.main,
    fontSize: 12,
  },
}

export default function CommentInput() {
  const [inputValue, setInputValue] = useState('')
  const location = `${window.location.pathname.slice(1)}/comments`
  const { mutateAsync } = useKyMutation(method.POST, location)

  const addComment = async () => {
    if (inputValue === '') return

    const body = JSON.stringify({ content: inputValue })

    try {
      await mutateAsync(body)
    } catch (error) {
      console.error(error.response)
      window.alert('다시 시도해 주세요')
    }

    setInputValue('')
  }

  return (
    <CommentInputBox>
      <ProfileImage
        src="https://i.namu.wiki/i/w0zeVMmf9I79S1loLZ-y7rifOgf6XPo8iNuEfheNG3LItfP6MA5vxVYQ6Lkk31cM6u01TffiuGLNPsCqmuLJGtsrJcoY0Plq5a5LW-MbxM6m1oPEW6GIs3kLDhH5veWAcLm6YpBVpvek1H_F2UzMOQ.webp"
        $size="3.125rem"
      />
      <ConfigProvider theme={inputTheme}>
        <Input.TextArea
          rows={1}
          showCount
          maxLength={200}
          size="large"
          autoSize={{ maxRows: 1 }}
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value)
          }}
        />
        <Button
          type="default"
          onClick={addComment}
        >
          등록
        </Button>
      </ConfigProvider>
    </CommentInputBox>
  )
}

const CommentInputBox = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;

  & > span {
    width: 85%;
    margin: 0 15px;
    border: none;
    border-bottom: 1px solid lightgray;
    border-radius: 0;

    span {
      font-size: ${theme.size.text2XS};
    }
  }

  button {
    height: 35px;
    width: 60px;
    font-size: ${theme.size.textSM};
    font-family: ${theme.style.main};
  }
`
