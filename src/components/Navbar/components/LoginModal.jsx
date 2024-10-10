import React from 'react'
import styled from 'styled-components'
import { Modal, Button, ConfigProvider } from 'antd'
import theme from '@styles/theme'
import { modalIndex } from '@constants/navIndex'
import { KakaoLogo } from '@images/logos'
import { useModalStore } from '@stores/navbarStores'

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
        footer={null}
        destroyOnClose
      >
        <ModalContents>
          <div>
            <img src="" />
          </div>
          <div>
            <h1>
              로그인 후<br />
              원활한 사용이 가능합니다
            </h1>
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
          </div>
        </ModalContents>
      </Modal>
    </ConfigProvider>
  )
}

const ModalContents = styled.div`
  display: flex;
  justify-content: space-between;
  height: 250px;

  div {
    font-size: 16px;
    width: 21.875rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    gap: 2.5rem;
    margin: 1.25rem 0;
  }

  button {
    margin: 0.3125rem 0;
  }
`

export default LoginModal
