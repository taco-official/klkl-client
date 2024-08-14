import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import theme from '../../../styles/theme'

function NotificationHeader({ count }) {
  return (
    <>
      <Header>
        알림 <button type="button">모두 읽기</button>
      </Header>
      {count && (
        <div style={{ margin: '10px 0', textAlign: 'center' }}>
          알림이 없습니다! 😊
        </div>
      )}
    </>
  )
}
NotificationHeader.propTypes = {
  count: PropTypes.bool.isRequired,
}

const Header = styled.div`
  color: black;
  display: flex;
  justify-content: space-between;
  font-family: ${theme.style.mainBold};
  width: 400px;

  button {
    border: none;
    background-color: transparent;
    cursor: pointer;
    border-radius: 5px;

    color: ${theme.color.main};
    font-family: inherit;
    font-size: ${theme.size.textXS};

    &:hover {
      background-color: rgba(0, 0, 0, 0.05);
    }
  }
`

export default NotificationHeader
