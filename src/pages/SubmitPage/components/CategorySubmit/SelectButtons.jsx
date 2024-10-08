import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Button, ConfigProvider } from 'antd'
import theme from '@styles/theme'

const buttonTheme = {
  token: {
    fontFamily: theme.style.mainBold,
    colorPrimary: theme.color.main,
    colorPrimaryHover: theme.color.mainDark,
  },
}

function SelectButtons({ isSelected, enable, disable }) {
  return (
    <ConfigProvider theme={buttonTheme}>
      <Wrapper style={{ marginBottom: '1.875rem' }}>
        <Button
          type={isSelected ? 'primary' : 'default'}
          onClick={enable}
          style={{ marginRight: '1.5625rem', width: '6.25rem' }}
        >
          YES
        </Button>
        <Button
          type={isSelected ? 'default' : 'primary'}
          onClick={disable}
          style={{ marginRight: '1.5625rem', width: '6.25rem' }}
        >
          NO
        </Button>
      </Wrapper>
    </ConfigProvider>
  )
}

SelectButtons.propTypes = {
  isSelected: PropTypes.bool.isRequired,
  enable: PropTypes.func.isRequired,
  disable: PropTypes.func.isRequired,
}

const Wrapper = styled.div`
  width: 37.5rem;
  display: flex;
  margin-bottom: 1.875rem;
`

export default SelectButtons
