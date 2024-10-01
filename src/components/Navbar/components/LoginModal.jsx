import React from 'react'
import styled from 'styled-components'
import { Modal, Button, ConfigProvider } from 'antd'

import { KakaoLogo, NaverLogo } from '../../../images/logos'
import { modalIndex } from '../../../constants/navIndex'
import { useModalStore } from '../../../stores/navbarStores'
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
  // backgroundColor: 'rgb(3, 199, 90)',
  color: 'white',
  width: '75%',
}

const KaKaoStyle = {
  backgroundColor: 'rgb(254, 229, 0)',
  color: 'black',
  width: '75%',
}

function LoginModal() {
  const { modalState, setModalState } = useModalStore()

  return (
    <ConfigProvider theme={ModalTheme}>
      <Modal
        open={modalState === modalIndex.LOGIN}
        onCancel={() => setModalState(modalIndex.NONE)}
        width="25rem"
        footer={null}
        destroyOnClose
      >
        <ModalContents>
          <h1>로그인</h1>
          <div>로그인 후 원활한 사용이 가능해용가뤼</div>
          <Button
            style={NaverStyle}
            disabled
          >
            <NaverLogo /> 네이버 로그인
          </Button>
          <Button
            style={KaKaoStyle}
            onClick={() => {
              window.location.href =
                'http://localhost:8080/v1/oauth2/authorization/kakao'
            }}
          >
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
  height: 18.75rem;

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
