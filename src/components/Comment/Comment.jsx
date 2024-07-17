import { React } from 'react'
import styled from 'styled-components'
import theme from '../../style/theme'
import ProfileImage from '../UserProfile/ProfileImage'

const comments = {
  1: {
    user: '사윤사윤',
    image:
      'https://i.namu.wiki/i/s4A1DnqxgN90LS1t9C4hfB12c6mkMj8J7PoK8EiUfWLPKXBS0TaN0108zVdg0sKLcMIO_bo9_eVPDA32-NHta56Y79aItocYCY5hy8UeeroGjZAYRocc2AmXBxTN9X970DguRlszklFsdYTdxMNB5Q.webp',
    date: '2024.07.03 01:54',
    content: '곤니치와 와따시와 윤상정데수웅',
  },
  2: {
    user: '사윤사윤',
    image:
      'https://i.namu.wiki/i/s4A1DnqxgN90LS1t9C4hfB12c6mkMj8J7PoK8EiUfWLPKXBS0TaN0108zVdg0sKLcMIO_bo9_eVPDA32-NHta56Y79aItocYCY5hy8UeeroGjZAYRocc2AmXBxTN9X970DguRlszklFsdYTdxMNB5Q.webp',
    date: '2024.07.03 01:54',
    content: '곤니치와 와따시와 윤상정데수웅',
  },
}

export default function Comment() {
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
        <CommentInputForm />
        <button type="button">등록</button>
      </CommentInputBox>
    </CommentBox>
  )
}

const Head = styled.h2`
  font-style: ${theme.style.mainEB};
  font-size: ${theme.size.titleMD};
  margin-bottom: 20px;
`

const CommentBox = styled.div`
  width: 80%;
  margin: 0 auto;
`

const CommentInputBox = styled.div`
  height: 45px;
  display: flex;
`

const CommentInputForm = styled.input`
  border: none;
  border-bottom: 1px solid ${theme.color.lineGrey};
`

const CommentSubmitButton = styled.button``
