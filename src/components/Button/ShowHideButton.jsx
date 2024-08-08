import React, { useMemo } from 'react'
import { BiPlus, BiMinus } from 'react-icons/bi'
import PropTypes from 'prop-types'
import IconTextButton from './IconTextButton'

function ShowHideButton({
  handleClick,
  iconColor = 'black',
  iconSize = '1.3rem',
  isOption = false,
}) {
  const iconAttr = useMemo(() => ({ onClick: handleClick }), [handleClick])
  const iconValue = useMemo(
    () => ({ color: iconColor, size: iconSize, attr: iconAttr }),
    [iconColor, iconSize, iconAttr]
  )

  return (
    <IconTextButton
      iconValue={iconValue}
      Icon={isOption ? <BiMinus /> : <BiPlus />}
    />
  )
}

ShowHideButton.propTypes = {
  handleClick: PropTypes.func,
  iconColor: PropTypes.string,
  iconSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  isOption: PropTypes.bool.isRequired,
}

export default ShowHideButton
