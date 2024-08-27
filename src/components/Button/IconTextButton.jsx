import React from 'react'
import PropTypes from 'prop-types'
import { IconContext } from 'react-icons'

function IconTextButton({ iconValue = null, Icon = null, text = null }) {
  return (
    <IconContext.Provider value={iconValue}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        {Icon}
        {text}
      </div>
    </IconContext.Provider>
  )
}

IconTextButton.propTypes = {
  iconValue: PropTypes.shape({
    color: PropTypes.string,
    size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    className: PropTypes.string,
    attr: PropTypes.shape({
      onClick: PropTypes.func,
    }),
  }),
  Icon: PropTypes.element,
  text: PropTypes.string,
}

export default IconTextButton
