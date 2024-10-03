import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import theme from '@styles/theme'
import useReadNotificationAll from '@hooks/useReadNotificationAll'
import useDeleteNotificationAll from '@hooks/useDeleteNotificationAll'

function NotificationHeader({ isEmpty }) {
  const readAll = useReadNotificationAll()
  const deleteAll = useDeleteNotificationAll()

  return (
    <>
      <Header>
        알림
        <div>
          <button
            type="button"
            onClick={readAll}
          >
            모두 읽기
          </button>
          <button
            type="button"
            onClick={deleteAll}
            style={{ color: 'red' }}
          >
            모두 지우기
          </button>
        </div>
      </Header>
      {isEmpty && (
        <div style={{ margin: '10px 0', textAlign: 'center' }}>
          알림이 없습니다! 😊
        </div>
      )}
    </>
  )
}
NotificationHeader.propTypes = {
  isEmpty: PropTypes.bool.isRequired,
}

const Header = styled.div`
  color: black;
  display: flex;
  justify-content: space-between;
  font-family: ${theme.style.mainBold};
  width: 400px;
  margin-left: 10px;

  button {
    border: none;
    background-color: transparent;
    cursor: pointer;
    border-radius: 5px;

    color: ${theme.color.main};
    font-family: inherit;
    font-size: ${theme.size.text2XS};
    padding: 5px;

    &:hover {
      background-color: rgba(0, 0, 0, 0.05);
    }

    &:active {
      background-color: rgba(0, 0, 0, 0.1);
    }
  }
`

export default NotificationHeader
