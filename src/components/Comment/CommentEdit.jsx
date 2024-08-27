import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Input, Button, ConfigProvider } from 'antd'
import styled from 'styled-components'

import { method } from '../../hooks/kyInstance'
import useKyMutation from '../../hooks/useKyMutation'
import theme from '../../styles/theme'

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

export default function CommentEdit({
  commentId,
  commentContent,
  disableEditMode,
}) {
  const [inputValue, setInputValue] = useState(commentContent)
  const location = `${window.location.pathname.slice(1)}/comments`
  const { mutateAsync } = useKyMutation(
    method.PUT,
    `${location}/${commentId}`,
    [location]
  )

  const editComment = async () => {
    if (inputValue === '') return

    const body = JSON.stringify({ content: inputValue.trim() })

    try {
      await mutateAsync(body)
      disableEditMode()
    } catch (error) {
      console.error(error.response)
      window.alert('다시 시도해 주세요')
    }

    setInputValue('')
  }

  return (
    <CommentEditBox>
      <ConfigProvider theme={inputTheme}>
        <Input.TextArea
          rows={1}
          showCount
          maxLength={200}
          size="large"
          autoSize={{ maxRows: 3 }}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <Button
          type="text"
          onClick={disableEditMode}
        >
          취소
        </Button>
        <Button
          type="text"
          onClick={editComment}
        >
          수정
        </Button>
      </ConfigProvider>
    </CommentEditBox>
  )
}
CommentEdit.propTypes = {
  commentId: PropTypes.number.isRequired,
  commentContent: PropTypes.string.isRequired,
  disableEditMode: PropTypes.func.isRequired,
}

const CommentEditBox = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  & > span {
    margin: 0 10px;
    border: none;
    border-bottom: 1px solid lightgray;
    border-radius: 0;

    span {
      font-size: ${theme.size.text2XS};
    }
  }

  button {
    width: 50px;
  }
`
