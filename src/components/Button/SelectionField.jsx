import React, { useCallback, useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { IoClose as CloseIcon } from 'react-icons/io5'

const StyledField = styled.div`
  padding: 0.3rem 0.35rem 0.25rem 0.35rem;
  border: ${(props) =>
    props.$selected ? '0.08rem solid transparent' : '0.08rem solid #2fa7ff'};
  border-radius: 0.3rem;
  color: ${(props) => (props.$selected ? 'white' : '#2fa7ff')};
  background-color: ${(props) => (props.$selected ? '#2fa7ff' : 'white')};
  font-size: 0.8rem;
  display: flex inline;
  justify-content: space-between;
  align-items: center;
  :not(:last-child) {
    margin-top: 0.05358rem;
    margin-right: 0.3rem;
  }
`

function SelectionField({ text = '도쿄' }) {
  const [selected, setSelected] = useState(false)
  const handleSelect = useCallback(() => {
    setSelected((current) => !current)
  }, [])

  return (
    <StyledField
      onClick={selected ? null : handleSelect}
      $selected={selected}
    >
      <span>{text}</span>
      {selected ? (
        <CloseIcon
          size="0.8rem"
          onClick={handleSelect}
        />
      ) : null}
    </StyledField>
  )
}

SelectionField.propTypes = {
  text: PropTypes.string,
}

export default SelectionField
