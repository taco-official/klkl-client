import React from 'react'
import { LinkOutlined, HeartFilled, FormOutlined } from '@ant-design/icons'
import { FloatButton, notification } from 'antd'

export default function ReviewDetailFloatButton() {
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
    <>
      {contextHolder}
      <FloatButton.Group
        shape="circle"
        style={{
          insetInlineEnd: 40,
        }}
        className="review--floatbutton"
      >
        <FloatButton
          icon={<LinkOutlined />}
          onClick={copyToClipboard}
        />
        <FloatButton icon={<HeartFilled style={{ color: 'red' }} />} />
        <FloatButton icon={<FormOutlined />} />
      </FloatButton.Group>
    </>
  )
}
