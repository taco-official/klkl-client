import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Steps, ConfigProvider } from 'antd'
import useStepStore from './stores/useStepStore'

import submitSteps from './constant/submitSteps'
import theme from '../../style/theme'
import PrevNextButtons from './components/PrevNextButtons'

import ImageSubmit from './ImageSubmit'
import RegionSubmitPage from './RegionSelect'
import InfoSubmitPage from './InfoSubmit'
import CategorySelctionPage from './CategorySelect'

export default function SubmitPage() {
  const preventClose = (e) => {
    e.preventDefault()
    e.returnValue = ''
  }

  useEffect(() => {
    window.addEventListener('beforeunload', preventClose)

    return () => {
      window.removeEventListener('beforeunload', preventClose)
    }
  }, [])

  const step = useStepStore((state) => state.step)

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

  const pages = {
    [submitSteps.PICTURE]: <ImageSubmit />,
    [submitSteps.REGION]: <RegionSubmitPage />,
    [submitSteps.INFO]: <InfoSubmitPage />,
    [submitSteps.CATEGORY]: <CategorySelctionPage />,
  }

  return (
    <Wrapper>
      <ConfigProvider theme={stepsTheme}>
        <Steps
          size="small"
          current={step}
          items={stepsItems}
          responsive={false}
          style={{ width: '100%', margin: '1.25rem 0' }}
        />
      </ConfigProvider>
      <div>{pages[step]}</div>
      <PrevNextButtons />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 80%;
  max-width: 37.5rem;
  margin: 1.875rem auto;
  display: flex;
  flex-direction: column;
  position: relative;

  h1 {
    width: 100%;
    font-family: ${theme.style.mainEB};
    border-bottom: 1px solid ${theme.color.lineGrey};
    position: sticky;
    padding: 10px 0;
    margin-bottom: 20px;
  }

  h2 {
    font-family: ${theme.style.mainBold};
    font-size: ${theme.size.titleLG};
    margin-bottom: 30px;
    line-height: 1.2em;
  }

  h3 {
    font-family: ${theme.style.mainBold};
    font-size: ${theme.size.titleMD};
    margin-bottom: 15px;

    @keyframes openModal {
      0% {
        opacity: 0;
      }
      50% {
        opacity: 0.5;
      }
      100% {
        opacity: 0.99;
      }
    }

    animation: openModal ease-in 0.3s;
  }
`
