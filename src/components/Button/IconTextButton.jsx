import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'antd'
import { IconContext } from 'react-icons'

function IconTextButton({
  value = null,
  type = 'text',
  shape = 'default',
  size = 'small',
  icon = null,
  iconPosition = 'start',
  handleClick = null,
  text = null,
}) {
  return (
    <Button
      type={type}
      shape={shape}
      size={size}
      icon={<IconContext.Provider value={value}>{icon}</IconContext.Provider>}
      iconPosition={iconPosition}
      onClick={handleClick}
    >
      {text}
    </Button>
  )
}

IconTextButton.propTypes = {
  value: PropTypes.shape({}),
  type: PropTypes.oneOf(['primary', 'dashed', 'link', 'text', 'default']),
  shape: PropTypes.oneOf(['circle', 'round', 'default']),
  size: PropTypes.oneOf(['small', 'middle', 'large']),
  icon: PropTypes.element,
  iconPosition: PropTypes.oneOf(['start', 'end']),
  handleClick: PropTypes.func,
  text: PropTypes.string,
}

export default IconTextButton
