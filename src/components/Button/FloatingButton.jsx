import React from 'react'
import styled from 'styled-components'
import propTypes from 'prop-types'
import { FaRegPenToSquare as Icon } from 'react-icons/fa6'

const StyledButton = styled.button`
  position: fixed;
  background-color: #2fa7ff;
  border: none;
  border-radius: 20%;
  padding: 0.6rem 0.6rem 0.8rem 0.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  box-shadow: 0.13rem 0.13rem 0.22rem 0.06rem gray;
`

function FloatingButton({ size = '2rem' }) {
  return (
    <StyledButton>
      <Icon
        size={size}
        color="white"
      />
    </StyledButton>
  )
}

FloatingButton.propTypes = {
  size: propTypes.oneOfType([propTypes.string, propTypes.number]),
}

export default FloatingButton
