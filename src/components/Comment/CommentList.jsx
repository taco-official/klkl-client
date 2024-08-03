import { React } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import ProfileImage from '../UserProfile/ProfileImage'
import theme from '../../style/theme'

export default function CommentList({ comments }) {
  return (
    <CommentListWrapper>
      {Object.entries(comments).map(([key, value]) => {
        return (
          <CommentListContent key={key}>
            <ProfileImage
              src={value.image}
              $size="70px"
            />
            <ContentBox>
              <div className="comment--info__user">
                {value.user}
                <span className="comment--info__date">{value.date}</span>
              </div>
              <div className="comment--info__content">{value.content}</div>
            </ContentBox>
          </CommentListContent>
        )
      })}
    </CommentListWrapper>
  )
}
CommentList.propTypes = {
  comments: PropTypes.shape({}).isRequired,
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
