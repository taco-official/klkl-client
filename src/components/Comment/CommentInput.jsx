import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Input, Button, ConfigProvider } from 'antd'
import styled from 'styled-components'

import { method } from '../../hooks/kyInstance'
import useLoginModal from '../../hooks/useLoginModal'
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

export default function CommentInput({ userData }) {
  const [inputValue, setInputValue] = useState('')
  const location = `${window.location.pathname.slice(1)}/comments`
  const { mutateAsync } = useKyMutation(method.POST, location)

  const popLoginModal = useLoginModal()

  const addComment = async () => {
    if (inputValue === '') return

    const body = JSON.stringify({ content: inputValue.trim() })

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
        src={userData?.image}
        $size="2.5rem"
      />
      <ConfigProvider theme={inputTheme}>
        <Input.TextArea
          rows={1}
          showCount
          maxLength={200}
          size="large"
          autoSize={{ maxRows: 1 }}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onClick={() => {
            if (!userData) popLoginModal()
          }}
        />
        <SubmitButton
          type="text"
          onClick={addComment}
          $canSubmit={inputValue.length !== 0}
          disabled={!userData}
        >
          등록
        </SubmitButton>
      </ConfigProvider>
    </CommentInputBox>
  )
}
CommentInput.propTypes = {
  userData: PropTypes.shape({ image: PropTypes.string }),
}

const CommentInputBox = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;

  div {
    font-size: ${theme.size.textSM};
    color: ${theme.color.textGrey};
  }

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
`

const SubmitButton = styled(Button)`
  height: 35px;
  width: 60px;
  font-size: ${theme.size.textSM};
  font-family: ${theme.style.mainBold};

  ${({ $canSubmit }) =>
    $canSubmit
      ? `background-color: rgba(47, 167, 255, 0.1);
			color: ${theme.color.main};`
      : `background-color: white;
			color: black`};
`
