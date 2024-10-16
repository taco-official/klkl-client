import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import theme from '@styles/theme'

export default function SelectionList({
  optionList,
  optionState,
  setOptionState,
  $width = '100%',
}) {
  if (!optionList || optionList.length === 0)
    return <SelectBoxes $width={$width} />
  const [id, name] = Object.keys(optionList[0])

  return (
    <SelectBoxes $width={$width}>
      {optionList.map((option) => (
        <SelectButton
          key={option[name]}
          onClick={() => setOptionState(option)}
          className={optionState === option[id] ? 'selected' : null}
        >
          {option[name]}
        </SelectButton>
      ))}
    </SelectBoxes>
  )
}

SelectionList.propTypes = {
  optionList: PropTypes.arrayOf(Object),
  optionState: PropTypes.number,
  setOptionState: PropTypes.func,
  $width: PropTypes.string,
}

const SelectBoxes = styled.ul`
  width: ${({ $width }) => $width};
  height: 10.9375rem;
  overflow: auto;
  transition: all ease-in-out 0.5s;

  border-top: 1px solid ${theme.color.lineGrey};
  border-bottom: 1px solid ${theme.color.lineGrey};

  position: relative;
  z-index: 10;

  @keyframes openModal {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  animation: openModal ease-in-out 0.2s;

  .selected {
    background-color: ${theme.color.selectedCategory};
    color: white;
    font-family: ${theme.style.mainBold};
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.15);
    border-radius: 8px;
    cursor: pointer;
  }

  &::-webkit-scrollbar {
    background-color: transparent;
    width: 0;
  }

  &:hover {
    &::-webkit-scrollbar {
      width: 0.4375rem;
    }
  }
`

const SelectButton = styled.li`
  width: 95%;
  height: 20%;
  align-content: center;
  cursor: pointer;

  background-color: white;
  border: none;

  transition: background-color ease-in-out 0.3s;
  font-family: ${theme.style.main};
  font-size: ${theme.size.textSM};

  padding-left: 5%;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }

  &:active {
    background-color: rgba(0, 0, 0, 0.3);
  }
`
