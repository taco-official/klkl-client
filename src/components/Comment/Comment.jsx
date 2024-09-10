import React from 'react'
import styled from 'styled-components'

import theme from '../../styles/theme'
import useKyQuery from '../../hooks/useKyQuery'
import CommentInput from './CommentInput'
import CommentList from './CommentList'

export default function Comment() {
  const location = window.location.pathname.slice(1)
  const {
    data: comments,
    isError,
    error,
    isLoading,
  } = useKyQuery(`${location}/comments`)

  if (isError) return <div>{error}</div>
  if (isLoading) return <div>loading</div>

  return (
    <CommentSection>
      <h2>
        댓글 (<span>{Object.keys(comments.data).length}</span>)
      </h2>
      <CommentInput />
      <CommentList comments={comments.data} />
    </CommentSection>
  )
}

const CommentSection = styled.section`
  width: 95%;
  margin: 0 auto;

  h2 {
    font-style: ${theme.style.mainEB};
    font-size: ${theme.size.textSM};
    margin-bottom: 20px;
    margin-top: 20px;
  }
`
