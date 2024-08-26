import React from 'react'
import styled from 'styled-components'
import { Modal, ConfigProvider } from 'antd'
import { useShallow } from 'zustand/react/shallow'

import Icons from '../../Icons/Icons'
import theme from '../../../styles/theme'

import {
  useModalStore,
  useCurrentPageStore,
} from '../../../stores/navbarStores'

import useDebouncedSearch from '../../../hooks/useDebouncedSearch'

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
  const [modalState, setModalState] = useModalStore(
    useShallow((state) => [state.searchModalState, state.setSearchModalState])
  )
  const setCurrentPage = useCurrentPageStore((state) => state.setCurrentPage)
  const [results, debouncedSearch] = useDebouncedSearch(setModalState)

  return (
    <ConfigProvider theme={ModalTheme}>
      <Modal
        open={modalState}
        onCancel={() => {
          setModalState(false)
          setCurrentPage(0)
        }}
        width="600px"
        footer={null}
        closable={false}
        zIndex={100}
        destroyOnClose
      >
        <ModalContents>
          <ModalHeader>
            <Icons $size="2em">search</Icons>
            <input
              placeholder="검색어를 입력해주세요"
              onChange={(e) => debouncedSearch(e.target.value)}
            />
          </ModalHeader>

          {results.map((contents) => contents)}
        </ModalContents>
      </Modal>
    </ConfigProvider>
  )
}

const ModalContents = styled.div`
  width: 100%;
  max-height: 1000px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 5px 0;
`

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;

  span {
    color: grey;
  }

  input {
    width: 100%;

    border: none;
    border-bottom: 1px solid transparent;
    padding: 10px;

    font-family: ${theme.style.main};
    font-size: ${theme.size.textMD};

    transition: all ease-in-out 0.2s;

    &:focus {
      outline: none;
      border-bottom: 1px solid ${theme.color.main};
    }
  }
`
