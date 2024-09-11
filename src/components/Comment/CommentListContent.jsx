import React, { useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import CommentEdit from './CommentEdit'

import dateParser from '../../utils/dateParser'
import ProfileImage from '../UserProfile/ProfileImage'
import CommentOptions from './CommentOptions'
import theme from '../../styles/theme'

export default function CommentListContent({ comment, canEdit }) {
  const [isEdit, setEditState] = useState(false)

  const enableEditMode = () => setEditState(true)
  const disableEditMode = () => setEditState(false)

  return (
    <CommentListContentWrapper>
      <ProfileImage
        src={comment.user.profileUrl}
        $size="2.5rem"
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
            {comment.user.name}
            <span className="comment--info__date">
              {dateParser(comment.createdAt)}
            </span>
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
    user: PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      profileUrl: PropTypes.string,
    }),
  }).isRequired,
  canEdit: PropTypes.bool.isRequired,
}

const CommentListContentWrapper = styled.li`
  margin-bottom: 30px;
  display: flex;

  div {
    margin-left: 10px;
  }
`

const ContentBox = styled.div`
  font-size: ${theme.size.textXS};

  .comment--info__user {
    font-family: ${theme.style.mainBold};
    margin-bottom: 10px;
    display: flex;
    align-items: center;
  }

  .comment--info__date {
    font-size: ${theme.size.text2XS};
    color: ${theme.color.textGrey};
    margin-left: 10px;
  }

  .comment--info__content {
    font-size: ${theme.size.textSM};
    line-height: 1.5em;
    white-space: pre-line;
    text-justify: none;
  }
`
