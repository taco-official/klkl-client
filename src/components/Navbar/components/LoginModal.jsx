import React from 'react'
import styled from 'styled-components'
import { Modal, Button, ConfigProvider } from 'antd'
import { useShallow } from 'zustand/react/shallow'
import { KakaoLogo, NaverLogo } from '../../../images/logos'
import { useModalStore } from '../stores/navbarStores'
import theme from '../../../styles/theme'

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

const NaverStyle = {
  backgroundColor: 'rgb(3, 199, 90)',
  color: 'white',
  width: '75%',
}

const KaKaoStyle = {
  backgroundColor: 'rgb(254, 229, 0)',
  color: 'black',
  width: '75%',
}

function LoginModal() {
  const [modalState, setModalState] = useModalStore(
    useShallow((state) => [state.loginModalState, state.setLoginModalState])
  )

  return (
    <ConfigProvider theme={ModalTheme}>
      <Modal
        open={modalState}
        onCancel={() => setModalState(false)}
        width="25rem"
        footer={null}
        destroyOnClose
      >
        <ModalContents>
          <h1>로그인</h1>
          <div>로그인 후 원활한 사용이 가능해용가뤼</div>
          <Button style={NaverStyle}>
            <NaverLogo /> 네이버 로그인
          </Button>
          <Button style={KaKaoStyle}>
            <KakaoLogo />
            카카오 로그인
          </Button>
        </ModalContents>
      </Modal>
    </ConfigProvider>
  )
}

const ModalContents = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 21px;
    font-family: ${theme.style.mainEB};
  }

  button {
    margin: 0.3125rem 0;
  }
`

export default LoginModal
