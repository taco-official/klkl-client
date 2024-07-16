import React, { useCallback } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { IoMdMore } from 'react-icons/io'

const IconButton = styled.button`
  border: 0px;
  background-color: transparent;
`

function MoreButton({ size = 22 }) {
  const handleClick = useCallback(() => {
    alert('More button clicked')
  }, [])

  return (
    <IconButton
      type="button"
      onClick={handleClick}
    >
      <IoMdMore
        color="grey"
        size={size}
      />
    </IconButton>
  )
}

MoreButton.propTypes = {
  size: PropTypes.number,
}

export default MoreButton
