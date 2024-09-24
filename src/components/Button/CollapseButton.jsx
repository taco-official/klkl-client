import React from 'react'
import PropTypes from 'prop-types'
import { BiPlus, BiMinus } from 'react-icons/bi'
import IconTextButton from './IconTextButton'

function CollapseButton({
  isOpen = false,
  setIsOpen = null,
  iconSize = '1.3rem',
}) {
  const toggleOpen = () => setIsOpen((prev) => !prev)
  const iconValue = { color: 'silver', size: iconSize }

  return (
    <div>
      <IconTextButton
        value={iconValue}
        icon={isOpen ? <BiMinus /> : <BiPlus />}
        handleClick={toggleOpen}
      />
    </div>
  )
}

CollapseButton.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func,
  iconSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default CollapseButton
