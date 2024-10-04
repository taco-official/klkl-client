import React, { useState } from 'react'
import styled from 'styled-components'

import submitSteps from '@constants/submitSteps'
import theme from '@styles/theme'
import useInitialData from '@hooks/useInitialData'
import useCheckAuth from '@/hooks/useCheckAuth'
import * as Form from './components/index'
import PostPage from './components/PostPage'
import PrevNextButtons from './components/PrevNextButtons'
import SubmitSteps from './components/SubmitSteps'

const useStep = () => {
  const [step, setStep] = useState(0)
  const goNextStep = () => {
    setStep((prev) => prev + 1)
  }
  const goPrevStep = () => {
    setStep((prev) => prev - 1)
  }

  return [step, goNextStep, goPrevStep]
}

export default function SubmitPage() {
  const [step, goNextStep, goPrevStep] = useStep()

  useCheckAuth()
  useInitialData()

  const pages = {
    [submitSteps.IMAGE]: <Form.ImageSubmitForm />,
    [submitSteps.REGION]: <Form.RegionSubmitForm />,
    [submitSteps.INFO]: <Form.InfoSubmitForm />,
    [submitSteps.CATEGORY]: <Form.CategorSubmitForm />,
    [submitSteps.LOADING]: <PostPage goPrevStep={goPrevStep} />,
  }

  return (
    <Wrapper>
      <SubmitSteps step={step} />
      <div>{pages[step]}</div>
      {step < 4 && (
        <PrevNextButtons
          step={step}
          goNextStep={goNextStep}
          goPrevStep={goPrevStep}
        />
      )}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 80%;
  max-width: 37.5rem;
  min-width: 31.25rem;
  margin: 0 auto;
  padding: 0 1.875rem;
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
  }
`
