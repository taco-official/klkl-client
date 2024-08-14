import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import theme from '../../../styles/theme'

function NotificationContent({ content }) {
  return (
    <Link to="/review">
      <ContentWrapper>
        <img
          src={content.product.image}
          className="noti--img"
        />
        <div style={{ gridArea: 'content' }}>
          <div className="noti--info">
            <div className="noti--info__writer">
              {content.comment.writer} 님이 댓글을 작성했습니다
            </div>
            <div className="noti--info__date">{content.comment.date}</div>
          </div>
          <div className="noti--content">{content.comment.content}</div>
        </div>
      </ContentWrapper>
    </Link>
  )
}
NotificationContent.propTypes = {
  content: PropTypes.shape({
    product: {
      name: PropTypes.string,
      image: PropTypes.string,
    },
    comment: {
      writer: PropTypes.string,
      content: PropTypes.string,
    },
  }).isRequired,
}

const ContentWrapper = styled.div`
  display: grid;
  grid-template-areas: 'image content';
  grid-template-columns: 60px;
  grid-gap: 10px;
  margin: 5px 0;

  width: 400px;
  height: 60px;

  div {
    overflow: hidden;
    white-space: wrap;
    text-overflow: ellipsis;
    word-break: break-word;
    font-family: ${theme.style.main};
    font-size: ${theme.size.textXS};
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  .noti--img {
    height: 60px;
    aspect-ratio: 1/1;
    object-fit: cover;
    border-radius: 5px;
  }

  .noti--info {
    display: flex;
    justify-content: space-between;
  }

  .noti--info__date {
    font-size: ${theme.size.text2XS};
  }

  .noti--info__writer {
    font-size: ${theme.size.textSM};
    font-family: ${theme.style.mainBold};
  }
`

export default NotificationContent
