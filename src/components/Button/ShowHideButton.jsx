import React, { useMemo } from 'react'
import { BiPlus, BiMinus } from 'react-icons/bi'
import PropTypes from 'prop-types'
import IconTextButton from './IconTextButton'
// import theme from '../../style/theme'

function ShowHideButton({
  handleClick,
  iconSize = '1.3rem',
  isOption = false,
}) {
  const iconAttr = useMemo(() => ({ onClick: handleClick }), [handleClick])
  const iconValue = useMemo(
    () => ({ color: 'black', size: iconSize, attr: iconAttr }),
    [iconSize, iconAttr]
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
  iconSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  isOption: PropTypes.bool.isRequired,
}

export default ShowHideButton
