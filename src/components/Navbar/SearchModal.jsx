import React, { useState, useRef } from 'react'
import styled from 'styled-components'
import { Modal, ConfigProvider } from 'antd'
import { useShallow } from 'zustand/react/shallow'

import Icons from '../Common/Icons'
import theme from '../../style/theme'
import { useModalStore, useCurrentPageStore } from './stores/navbarStores'

const ModalTheme = {
  components: {
    Button: {
      defaultHoverBorderColor: 'none',
      defaultHoverColor: 'black',
      defaultActiveBorderColor: 'lightgrey',
    },
  },
  token: {
    fontFamily: theme.style.mainBold,
  },
}

export default function SearchModal() {
  const [value, setValue] = useState('')
  const timeoutRef = useRef(null)

  const handleChange = (e) => {
    const newValue = e.target.value

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }

    timeoutRef.current = setTimeout(() => {
      setValue(newValue)
      console.log(newValue)
    }, 200)
  }
  console.log(value)

  const [modalState, setModalState] = useModalStore(
    useShallow((state) => [state.searchModalState, state.setSearchModalState])
  )
  const setCurrentPage = useCurrentPageStore((state) => state.setCurrentPage)

  return (
    <ConfigProvider theme={ModalTheme}>
      <Modal
        open={modalState}
        onCancel={() => {
          setModalState(false)
          setCurrentPage(0)
        }}
        width="50%"
        footer={null}
        closable={false}
        zIndex={100}
      >
        <ModalContents>
          <Icons $size="2em">search</Icons>
          <input onChange={handleChange} />
        </ModalContents>
      </Modal>
    </ConfigProvider>
  )
}

const ModalContents = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  padding: 5px 0;
  border-bottom: 1px solid lightgrey;

  span {
    color: grey;
  }

  input {
    width: 91%;
    border: none;

    font-family: ${theme.style.main};
    font-size: ${theme.size.textMD};

    &:focus {
      outline: none;
    }
  }
`
