import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import CommentListContent from './CommentListContent'

export default function CommentList({ comments, userId }) {
  return (
    <CommentListWrapper>
      {comments.map((comment) => (
        <CommentListContent
          key={comment.id}
          comment={comment}
          canEdit={comment.member.id === userId}
        />
      ))}
    </CommentListWrapper>
  )
}
CommentList.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      user: PropTypes.shape({
        id: PropTypes.number,
      }),
    })
  ).isRequired,
  userId: PropTypes.number,
}

const CommentListWrapper = styled.ul`
  display: flex;
  flex-direction: column;
`
