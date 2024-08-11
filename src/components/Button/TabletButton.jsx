import React, { useCallback, useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { IoIosArrowDown as ArrowDown } from 'react-icons/io'

const StyledToggle = styled.div`
  display: flex inline;
  flex-direction: column;
  align-items: flex-end;
  :last-child {
    margin-top: 0.15rem;
  }
`

const StyledTabletButton = styled.div`
  padding: 0.3rem 0.35rem 0.25rem 0.35rem;
  border: 0.08rem solid black;
  border-radius: 1rem;
  font-size: 0.8rem;
  display: flex inline;
  justify-content: space-between;
  align-items: center;
  :not(:last-child) {
    margin-top: 0.05358rem;
    margin-right: 0.2rem;
  }
`

function TabletButton({ text, size, ChildComponent }) {
  const [dropDown, setDropDown] = useState(false)
  const handleToggle = useCallback(() => {
    setDropDown((current) => !current)
  }, [])

  return (
    <StyledToggle>
      <StyledTabletButton>
        <span>{text}</span>
        <ArrowDown
          size={size}
          onClick={handleToggle}
        />
      </StyledTabletButton>
      {dropDown ? <ChildComponent /> : null}
    </StyledToggle>
  )
}

TabletButton.propTypes = {
  text: PropTypes.string.isRequired,
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  ChildComponent: PropTypes.elementType,
}

export default TabletButton
