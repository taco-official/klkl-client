import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import router from '@/router'
import theme from '@styles/theme'
import kyMethod from '@constants/kyMethod'
import useKyMutation from '@hooks/useKyMutation'

function NotificationContent({ content }) {
  const { mutateAsync } = useKyMutation(
    kyMethod.PUT,
    `notifications/${content.id}/read`,
    ['notifications']
  )

  const onClick = async () => {
    try {
      await mutateAsync()

      router.navigate(`/products/${content.product.id}`, {
        state: { from: window.location.pathname },
      })
    } catch (error) {
      if (error.response.status === 404) {
        alert('이미 삭제된 댓글입니다')
      } else {
        alert('다시 시도해 주세요')
        console.error(error.response)
      }
    }
  }

  return (
    <ContentWrapper onClick={onClick}>
      <ContentImage
        src={content.product.image?.url}
        $isRead={content.isRead}
        className="noti--img"
      />
      <div style={{ gridArea: 'content' }}>
        <Content className="noti--info">
          <Content
            className="noti--info__writer"
            $isRead={content.isRead}
          >
            {content.comment.userName} 님이 댓글을 달았습니다
          </Content>
          <Content
            className="noti--info__date"
            $isRead={content.isRead}
          >
            {content.comment.createdAt}
          </Content>
        </Content>
        <Content
          className="noti--content"
          $isRead={content.isRead}
        >
          {content.comment.content}
        </Content>
      </div>
    </ContentWrapper>
  )
}

NotificationContent.propTypes = {
  content: PropTypes.shape({
    id: PropTypes.number,
    createdAt: PropTypes.string,
    isRead: PropTypes.bool,
    comment: PropTypes.shape({
      createdAt: PropTypes.string,
      content: PropTypes.string,
      userName: PropTypes.string,
    }),
    product: PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      image: PropTypes.shape({ url: PropTypes.string }),
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
  border-radius: 0.3125rem;
  ${({ $isRead }) => $isRead && 'filter: grayscale(30%);'};
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
