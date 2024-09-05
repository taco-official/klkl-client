import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { IconContext } from 'react-icons'

const ButtonBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`

function IconTextButton({ iconValue = null, Icon = null, text = null }) {
  return (
    <IconContext.Provider value={iconValue}>
      <ButtonBox>
        {Icon}
        {text}
      </ButtonBox>
    </IconContext.Provider>
  )
}

IconTextButton.propTypes = {
  iconValue: PropTypes.shape({}),
  Icon: PropTypes.element,
  text: PropTypes.string,
}

export default IconTextButton
