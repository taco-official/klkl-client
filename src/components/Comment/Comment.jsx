import { React, useState } from 'react'
import styled from 'styled-components'
import theme from '../../style/theme'
import StyledButton from '../Common/StyledButton'
import ProfileImage from '../UserProfile/ProfileImage'
import CommentList from './CommentList'

const sampleComments = {
  1: {
    user: 'sayoon',
    image:
      'https://i.namu.wiki/i/s4A1DnqxgN90LS1t9C4hfB12c6mkMj8J7PoK8EiUfWLPKXBS0TaN0108zVdg0sKLcMIO_bo9_eVPDA32-NHta56Y79aItocYCY5hy8UeeroGjZAYRocc2AmXBxTN9X970DguRlszklFsdYTdxMNB5Q.webp',
    date: '2024.07.03 01:54',
    content:
      '대통령은 필요하다고 인정할 때에는 외교·국방·통일 기타 국가안위에 관한 중요정책을 국민투표에 붙일 수 있다.',
  },
  2: {
    user: 'sanghwal',
    image:
      'https://i.namu.wiki/i/s4A1DnqxgN90LS1t9C4hfB12c6mkMj8J7PoK8EiUfWLPKXBS0TaN0108zVdg0sKLcMIO_bo9_eVPDA32-NHta56Y79aItocYCY5hy8UeeroGjZAYRocc2AmXBxTN9X970DguRlszklFsdYTdxMNB5Q.webp',
    date: '2024.07.03 01:54',
    content:
      '각급 선거관리위원회는 선거인명부의 작성등 선거사무와 국민투표사무에 관하여 관계 행정기관에 필요한 지시를 할 수 있다.',
  },
}

export default function Comment() {
  const [comments, updateComment] = useState(sampleComments)

  const addComment = () => {
    const inputValue = document.querySelector('input[name="comment"]').value
    if (inputValue.length === 0) return
    const newComments = { ...comments }
    newComments[Object.keys(comments).length + 1] = {
      user: 'hihi',
      image:
        'https://i.namu.wiki/i/s4A1DnqxgN90LS1t9C4hfB12c6mkMj8J7PoK8EiUfWLPKXBS0TaN0108zVdg0sKLcMIO_bo9_eVPDA32-NHta56Y79aItocYCY5hy8UeeroGjZAYRocc2AmXBxTN9X970DguRlszklFsdYTdxMNB5Q.webp',
      date: 'fuckyou',
      content: inputValue,
    }
    document.querySelector('input[name="comment"]').value = ''
    updateComment(newComments)
  }

  return (
    <CommentBox>
      <Head>
        댓글(<span>{Object.keys(comments).length}</span>)
      </Head>
      <CommentInputBox>
        <ProfileImage
          src="https://i.namu.wiki/i/s4A1DnqxgN90LS1t9C4hfB12c6mkMj8J7PoK8EiUfWLPKXBS0TaN0108zVdg0sKLcMIO_bo9_eVPDA32-NHta56Y79aItocYCY5hy8UeeroGjZAYRocc2AmXBxTN9X970DguRlszklFsdYTdxMNB5Q.webp"
          size="100%"
        />
        <CommentInputForm>
          <input
            type="text"
            name="comment"
          />
          <CommentSubmitButton
            type="button"
            $state
            onClick={addComment}
          >
            등록
          </CommentSubmitButton>
        </CommentInputForm>
      </CommentInputBox>
      <CommentList comments={comments} />
    </CommentBox>
  )
}

const Head = styled.h2`
  font-style: ${theme.style.mainEB};
  font-size: ${theme.size.titleMD};
  margin-bottom: 20px;
  margin-top: 20px;
`

const CommentBox = styled.div`
  width: 60%;
  margin: 0 auto;
`

const CommentInputBox = styled.div`
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  margin-bottom: 30px;
`

const CommentInputForm = styled.form`
  flex-grow: 0.95;
  height: 100%;

  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  padding-bottom: 10px;

  input {
    height: 70%;
    flex-grow: 0.9;

    border: none;
    border-bottom: 1px solid ${theme.color.lineGrey};
    outline: none;

    font-family: ${theme.style.main};
  }
`

const CommentSubmitButton = styled(StyledButton)`
  border-radius: 30px;
  width: 80px;
  height: 60%;
  font-family: ${theme.style.mainBold};

  display: inline-flex;
  justify-content: center;
  align-items: center;
`
