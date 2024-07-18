import React, { useCallback, useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { MdClose as CloseIcon } from 'react-icons/md'

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
  :first-child {
    margin-top: 0.05358rem;
  }
  :nth-child(2) {
    margin-left: 0.3rem;
  }
`

function SelectionField({ text }) {
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
          size="1rem"
          onClick={handleSelect}
        />
      ) : null}
    </StyledField>
  )
}

SelectionField.propTypes = {
  text: PropTypes.string.isRequired,
}

export default SelectionField
