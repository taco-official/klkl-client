import React from 'react'
import styled from 'styled-components'
import theme from '@styles/theme'
import router from '@/router'
import PlainButton from '../../Button/PlainButton'

export default function HomeButton() {
  return (
    <LogoButton
      onClick={() =>
        router.navigate('/', {
          state: { from: window.location.pathname },
        })
      }
    >
      끼룩끼룩
    </LogoButton>
  )
}

const LogoButton = styled(PlainButton)`
  font-family: ${theme.style.logo};
  font-size: 30px;
`
