import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyleTag = styled.span`
  font-size: 0.625rem;
  padding: 0.25rem 0.3rem;
  border-radius: 0.3rem;
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
