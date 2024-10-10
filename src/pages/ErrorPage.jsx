import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Button } from 'antd'
import { useRouteError, useNavigate } from 'react-router-dom'

import theme from '@styles/theme'
import errorCode from '@constants/errorCode'

export default function ErrorPage() {
  const error = useRouteError()
  const navigate = useNavigate()

  useEffect(() => {
    if (error.message === errorCode.ERROR_UNAUTHORIZED) {
      alert('로그인 후 이용해주세요')
      navigate('/')
    }
  }, [])

  if (error.message === errorCode.ERROR_UNAUTHORIZED) return null

  return (
    <ErrorBody>
      <h1>😟 저런!</h1>
      <br />
      <span>에러가 발생했습니다</span>
      <Button
        type="primary"
        onClick={() => navigate('/')}
      >
        홈으로
      </Button>
    </ErrorBody>
  )
}

const ErrorBody = styled.div`
  height: 90vh;
  font-family: ${theme.style.main};
  font-size: 1.25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    font-family: ${theme.style.mainEB};
    font-size: 2rem;
    padding: 0;
  }

  button {
    margin-top: 1.25rem;
    width: 150px;
    font-family: ${theme.style.mainBold};
  }
`
