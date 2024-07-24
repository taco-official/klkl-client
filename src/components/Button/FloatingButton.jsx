import React, { useMemo } from 'react'
import styled from 'styled-components'
import propTypes from 'prop-types'
import { IconContext } from 'react-icons'
import { FaRegPenToSquare as WriteIcon } from 'react-icons/fa6'
import theme from '../../style/theme'

const StyledButton = styled.div`
  position: fixed;
  border-radius: 20%;
  padding: 0.6rem 0.6rem 0.8rem 0.8rem;
  background-color: ${theme.color.main};
  z-index: 100;
  box-shadow: 0.13rem 0.13rem 0.22rem 0.06rem gray;
  display: flex;
  justify-content: center;
  align-items: center;
`

function FloatingButton({ iconSize = '2rem' }) {
  const iconValue = useMemo(
    () => ({ color: 'white', size: `${iconSize}` }),
    [iconSize]
  )
  return (
    <IconContext.Provider value={iconValue}>
      <StyledButton>
        <WriteIcon />
      </StyledButton>
    </IconContext.Provider>
  )
}

FloatingButton.propTypes = {
  iconSize: propTypes.oneOfType([propTypes.string, propTypes.number]),
}

export default FloatingButton
