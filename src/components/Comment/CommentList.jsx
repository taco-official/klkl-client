import { React } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import dateParser from '../../utils/dateParser'
import ProfileImage from '../UserProfile/ProfileImage'
import theme from '../../styles/theme'

export default function CommentList({ comments }) {
  return (
    <CommentListWrapper>
      {comments.map((comment) => {
        return (
          <CommentListContent key={comment.id}>
            <ProfileImage
              src={comment.user.profile}
              $size="50px"
            />
            <ContentBox>
              <div className="comment--info__user">
                {comment.user.name}
                <span className="comment--info__date">
                  {dateParser(comment.createdAt)}
                </span>
              </div>
              <div className="comment--info__content">{comment.content}</div>
            </ContentBox>
          </CommentListContent>
        )
      })}
    </CommentListWrapper>
  )
}
CommentList.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      commentId: PropTypes.number,
      content: PropTypes.string,
      createdAt: PropTypes.string,
      user: PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        profile: PropTypes.string,
      }),
    })
  ).isRequired,
}

const CommentListWrapper = styled.ul`
  display: flex;
  flex-direction: column;
`

const CommentListContent = styled.li`
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
  }

  .comment--info__date {
    font-size: ${theme.size.text2XS};
    color: ${theme.color.textGrey};
    margin-left: 10px;
  }

  .comment--info__content {
    font-size: ${theme.size.textSM};
    line-height: 1.5em;
  }
`
