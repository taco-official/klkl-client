import React from 'react'
import PropTypes from 'prop-types'
import { Steps, ConfigProvider } from 'antd'

import theme from '../../../styles/theme'

const stepsItems = [
  {
    title: '사진',
  },
  {
    title: '구매한 곳',
  },
  {
    title: '상세 정보',
  },
  {
    title: '분류',
  },
]

const stepsTheme = {
  components: {
    Steps: { iconSizeSM: 20, iconFontSize: 10 },
  },
  token: {
    fontFamily: theme.style.mainBold,
    fontSize: theme.size.textXS,
    colorPrimary: theme.color.main,
    colorPrimaryHover: theme.color.mainDark,
  },
}

function SubmitSteps({ step }) {
  return (
    <ConfigProvider theme={stepsTheme}>
      <Steps
        size="small"
        current={step}
        items={stepsItems}
        responsive={false}
        style={{ width: '100%', margin: '2.5rem 0' }}
      />
    </ConfigProvider>
  )
}
SubmitSteps.propTypes = {
  step: PropTypes.number.isRequired,
}

export default SubmitSteps
