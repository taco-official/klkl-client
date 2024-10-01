import React, { useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'

import CommentEdit from './CommentEdit'
import ProfileImage from '../UserProfile/ProfileImage'
import CommentOptions from './CommentOptions'
import theme from '../../styles/theme'

export default function CommentListContent({ comment, canEdit }) {
  const navigate = useNavigate()
  const [isEdit, setEditState] = useState(false)

  const enableEditMode = () => setEditState(true)
  const disableEditMode = () => setEditState(false)

  return (
    <CommentListContentWrapper>
      <ProfileImage
        src={comment.member.image?.url}
        $size="2.5rem"
        onClick={() => navigate(`/users/${comment.member.id}`)}
      />
      {isEdit ? (
        <CommentEdit
          commentId={comment.id}
          commentContent={comment.content}
          disableEditMode={disableEditMode}
        />
      ) : (
        <ContentBox>
          <div className="comment--info__user">
            <span
              aria-hidden
              className="comment--info__name"
              onClick={() => navigate(`/users/${comment.member.id}`)}
            >
              {comment.member.name}
            </span>
            <span className="comment--info__date">{comment.createdAt}</span>
            {canEdit && (
              <CommentOptions
                commentId={comment.id}
                setEditMode={enableEditMode}
              />
            )}
          </div>
          <div className="comment--info__content">{comment.content}</div>
        </ContentBox>
      )}
    </CommentListContentWrapper>
  )
}
CommentListContent.propTypes = {
  comment: PropTypes.shape({
    id: PropTypes.number,
    content: PropTypes.string,
    createdAt: PropTypes.string,
    member: PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      image: PropTypes.shape({ url: PropTypes.string }),
    }),
  }).isRequired,
  canEdit: PropTypes.bool.isRequired,
}

const CommentListContentWrapper = styled.li`
  margin-bottom: 30px;
  display: flex;

  div {
    margin-left: 0.4375rem;
  }
`

const ContentBox = styled.div`
  font-size: ${theme.size.textXS};

  .comment--info__user {
    font-family: ${theme.style.mainBold};
    margin-bottom: 0.3125rem;
    display: flex;
    align-items: center;
  }

  .comment--info__name {
    cursor: pointer;
  }

  .comment--info__date {
    font-size: ${theme.size.text2XS};
    color: ${theme.color.textGrey};
    margin-left: 0.625rem;
  }

  .comment--info__content {
    font-size: ${theme.size.textSM};
    line-height: 1.5em;
    white-space: pre-line;
    text-justify: none;
  }
`
