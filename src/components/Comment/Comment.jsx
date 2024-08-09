import { React, useState, useRef } from 'react'
import { Input, ConfigProvider } from 'antd'
import styled from 'styled-components'
import theme from '../../styles/theme'
import ProfileImage from '../UserProfile/ProfileImage'
import CommentList from './CommentList'

const sampleComments = [
  {
    user: 'sayoon',
    image: 'https://i.ytimg.com/vi/bOJdHU99OO8/maxresdefault.jpg',
    date: '2024.07.03 01:54',
    content:
      '대통령은 필요하다고 인정할 때에는 외교·국방·통일 기타 국가안위에 관한 중요정책을 국민투표에 붙일 수 있다.',
  },
  {
    user: 'sanghwal',
    image: 'https://i.ytimg.com/vi/bOJdHU99OO8/maxresdefault.jpg',
    date: '2024.07.03 01:54',
    content:
      '각급 선거관리위원회는 선거인명부의 작성등 선거사무와 국민투표사무에 관하여 관계 행정기관에 필요한 지시를 할 수 있다.',
  },
]

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

export default function Comment() {
  const inputRef = useRef(null)
  const [comments, updateComment] = useState(sampleComments)

  const addComment = () => {
    const { textArea } = inputRef.current.resizableTextArea
    const date = new Date()
    const year = date.getUTCFullYear()
    const month = String(date.getUTCMonth() + 1).padStart(2, '0') // 월은 0부터 시작하므로 +1 필요
    const day = String(date.getUTCDate()).padStart(2, '0')
    const hour = String(date.getUTCHours()).padStart(2, '0')
    const minute = String(date.getUTCMinutes()).padStart(2, '0')

    if (textArea.value.length === 0) return

    const newComments = [...comments]
    newComments.push({
      user: 'anonymous',
      image: 'https://i.ytimg.com/vi/bOJdHU99OO8/maxresdefault.jpg',
      date: `${year}.${month}.${day} ${hour}:${minute}`,
      content: textArea.value,
    })
    textArea.value = ''
    updateComment(newComments)
  }

  return (
    <CommentBox>
      <h2>
        댓글(<span>{Object.keys(comments).length}</span>)
      </h2>
      <CommentInputBox>
        <ProfileImage
          src="https://i.ytimg.com/vi/bOJdHU99OO8/maxresdefault.jpg"
          $size="50px"
        />
        <ConfigProvider theme={inputTheme}>
          <Input.TextArea
            ref={inputRef}
            rows={1}
            showCount
            maxLength={200}
            size="large"
            autoSize={{ minRows: 1, maxRows: 3 }}
          />
          <button
            type="button"
            onClick={addComment}
          >
            등록
          </button>
        </ConfigProvider>
      </CommentInputBox>
      <CommentList comments={comments} />
    </CommentBox>
  )
}

const CommentBox = styled.div`
  width: 95%;
  margin: 0 auto;

  h2 {
    font-style: ${theme.style.mainEB};
    font-size: ${theme.size.titleSM};
    margin-bottom: 20px;
    margin-top: 20px;
  }
`

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
    height: 40px;
    width: 50px;
    border: none;
    box-shadow: none;
    background-color: white;
    font-size: ${theme.size.textSM};
    font-family: ${theme.style.main};

    border-radius: 0.625rem;

    transition: all ease-in-out 0.2s;
    cursor: pointer;

    &:hover {
      background-color: rgba(0, 0, 0, 0.05);
    }
  }
`
