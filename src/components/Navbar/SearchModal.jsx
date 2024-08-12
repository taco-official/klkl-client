import React, { useState } from 'react'
import styled from 'styled-components'
import { Modal, ConfigProvider } from 'antd'
import { useShallow } from 'zustand/react/shallow'
import { debounce } from 'lodash-es'

import Icons from '../Common/Icons'
import theme from '../../styles/theme'
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

  const [modalState, setModalState] = useModalStore(
    useShallow((state) => [state.searchModalState, state.setSearchModalState])
  )
  const setCurrentPage = useCurrentPageStore((state) => state.setCurrentPage)

  const debouncedSearch = debounce((inputValue) => {
    setValue(inputValue)
    console.log(value)
  }, 200)

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
          <input onChange={(e) => debouncedSearch(e.target.value)} />
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
