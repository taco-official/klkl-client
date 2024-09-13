import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { FloatButton, notification } from 'antd'
import { useNavigate } from 'react-router-dom'

import Icons from '../../components/Icons/Icons'
import theme from '../../styles/theme'
import LikeButton from './LikeButton'

export default function ReviewFloatButton({ productId }) {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href).then(() =>
      notification.success({
        message: `클립보드에 복사되었습니다`,
        duration: 1,
        placement: 'bottomLeft',
        style: { fontFamily: theme.style.main, width: '16.875rem' },
        closeIcon: false,
      })
    )
  }

  const navigate = useNavigate()

  return (
    <CustomFloatButtonGroup>
      <CustomFloatButton
        icon={<Icons $empty>link</Icons>}
        onClick={copyToClipboard}
        tooltip="링크복사"
      />

      <LikeButton productId={productId} />

      <CustomFloatButton
        icon={<Icons $empty>edit_square</Icons>}
        onClick={() => navigate('/submit')}
        tooltip="리뷰 작성하러 가기"
      />
    </CustomFloatButtonGroup>
  )
}
ReviewFloatButton.propTypes = {
  productId: PropTypes.number.isRequired,
}

const CustomFloatButton = styled(FloatButton)`
  span {
    font-size: 1.3em;
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

const CustomFloatButtonGroup = styled(FloatButton.Group).attrs({
  shape: 'square',
})`
  height: 9.375rem;
  width: 3.125rem;
  background-color: rgba(255, 255, 255, 1);

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  box-shadow: 0 0 0.3125rem rgba(0, 0, 0, 0.1);

  position: sticky;
  top: 50%;

  @media (max-width: 768px) {
    display: none;
  }
`
