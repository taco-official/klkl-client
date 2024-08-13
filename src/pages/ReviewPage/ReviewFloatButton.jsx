import React from 'react'
import styled from 'styled-components'
import { FloatButton, notification, ConfigProvider } from 'antd'
import Icons from '../../components/Icons/Icons'
import theme from '../../styles/theme'

export default function ReviewFloatButton() {
  const [api, contextHolder] = notification.useNotification()

  const openNotification = () => {
    api.success({
      message: `클립보드에 복사되었습니다`,
      duration: 1,
      placement: 'bottomRight',
    })
  }

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(window.location.href)
      .then(() => openNotification())
  }

  return (
    <ConfigProvider
      theme={{
        token: {
          fontFamily: theme.style.mainBold,
        },
      }}
    >
      {contextHolder}
      <FloatButton.Group
        shape="circle"
        className="review--floatbutton"
      >
        <CustomFloatButton
          icon={<Icons $empty>link</Icons>}
          onClick={copyToClipboard}
          tooltip="링크복사"
        />

        <CustomFloatButton
          icon={<Icons>favorite</Icons>}
          tooltip="좋아요"
        />
        <CustomFloatButton
          icon={<Icons $empty>edit_square</Icons>}
          tooltip="리뷰 작성하러 가기"
        />
      </FloatButton.Group>
    </ConfigProvider>
  )
}

const CustomFloatButton = styled(FloatButton)`
  span {
    color: rgba(0, 0, 0, 0.65);
  }

  div {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`
