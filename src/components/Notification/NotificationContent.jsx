import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

import { method, useKyMutation } from '../../hooks/useKyQuery'
import dateParser from '../../utils/dateParser'
import theme from '../../styles/theme'

function NotificationContent({ content }) {
  const navigate = useNavigate()
  const { mutateAsync } = useKyMutation(
    method.PUT,
    `notifications/${content.notification.id}`
  )

  const onClick = async () => {
    try {
      await mutateAsync()
      navigate(`/products/${content.product.id}`)
    } catch (error) {
      window.alert('다시 시도해 주세요!')
      console.error(error.response)
    }
  }

  return (
    <ContentWrapper onClick={onClick}>
      <ContentImage
        src={content.comment.user.profile}
        className="noti--img"
      />
      <div style={{ gridArea: 'content' }}>
        <Content className="noti--info">
          <Content
            className="noti--info__writer"
            $isRead={content.notification.isRead}
          >
            {content.comment.user.name} 님이 댓글을 달았습니다
          </Content>
          <Content
            className="noti--info__date"
            $isRead={content.notification.isRead}
          >
            {dateParser(content.comment.createdAt)}
          </Content>
        </Content>
        <Content
          className="noti--content"
          $isRead={content.notification.isRead}
        >
          {content.comment.content}
        </Content>
      </div>
    </ContentWrapper>
  )
}
NotificationContent.propTypes = {
  content: PropTypes.shape({
    notification: PropTypes.shape({
      id: PropTypes.number,
      createdAt: PropTypes.string,
      isRead: PropTypes.bool,
    }),
    comment: PropTypes.shape({
      id: PropTypes.number,
      createdAt: PropTypes.string,
      content: PropTypes.string,
      user: PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        profile: PropTypes.string,
      }),
    }),
    product: PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      likeCount: PropTypes.number,
      rating: PropTypes.number,
      countryName: PropTypes.string,
      categoryName: PropTypes.string,
    }),
  }).isRequired,
}

const ContentWrapper = styled.div`
  display: grid;
  grid-template-areas: 'image content';
  grid-template-columns: 60px;
  grid-gap: 10px;
  margin: 5px 0;

  position: relative;
  width: 400px;
  height: 60px;
`

const ContentImage = styled.img`
  grid-area: 'image';
  height: 60px;
  aspect-ratio: 1/1;
  object-fit: cover;
  border-radius: 0.5rem;
  ${({ $isRead }) => $isRead && 'filter: grayscale(50%);'};
`

const Content = styled.div`
  color: ${({ $isRead }) => ($isRead ? 'rgba(0,0,0, 0.3)' : 'inherit')};
  overflow: hidden;
  white-space: wrap;
  text-overflow: ellipsis;
  word-break: break-word;

  font-family: ${theme.style.main};
  font-size: ${theme.size.textXS};

  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  &.noti--info {
    display: flex;
    justify-content: space-between;
  }

  &.noti--info__date {
    font-size: ${theme.size.text2XS};
  }

  &.noti--info__writer {
    font-size: 13px;
    font-family: ${theme.style.mainBold};
  }
`

export default NotificationContent
