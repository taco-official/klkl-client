import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import theme from '../../styles/theme'
import { method } from '../../hooks/kyInstance'
import useKyMutation from '../../hooks/useKyMutation'

function NotificationHeader({ isEmpty }) {
  const { mutateAsync } = useKyMutation(method.PUT, 'notifications/all', [
    'notifications',
  ])

  const readAll = async () => {
    try {
      await mutateAsync()
    } catch (error) {
      window.alert(error)
    }
  }

  return (
    <>
      <Header>
        알림
        <button
          type="button"
          onClick={readAll}
        >
          모두 읽기
        </button>
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
    padding: 0 3px;

    &:hover {
      background-color: rgba(0, 0, 0, 0.05);
    }
  }
`

export default NotificationHeader
