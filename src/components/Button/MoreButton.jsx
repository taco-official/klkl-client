import React, { useCallback } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { IoMdMore } from 'react-icons/io'

const IconButtonBox = styled.button`
  border: 0rem;
  background-color: transparent;
`

function MoreButton({ size = '0.8rem' }) {
  const handleClick = useCallback(() => {
    alert('More button clicked')
  }, [])

  return (
    <IconButtonBox
      type="button"
      onClick={handleClick}
    >
      <IoMdMore
        color="grey"
        size={size}
      />
    </IconButtonBox>
  )
}

MoreButton.propTypes = {
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
}

export default MoreButton
