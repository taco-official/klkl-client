import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyleTag = styled.span`
  font-size: 0.8rem;
  padding: 5px 8px;
  border-radius: 5px;
  margin: 1px 3px;
  display: flex;
  justify-content: center;
  algn-items: center;
`
const BlueTag = styled(StyleTag)`
  color: #2fa7ff;
  background-color: #ddf1ff;
`

function Tag({ tagName = '태그' }) {
  return <BlueTag>{tagName}</BlueTag>
}

Tag.propTypes = {
  tagName: PropTypes.string.isRequired,
}

export default Tag
