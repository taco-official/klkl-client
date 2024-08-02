import React, { useCallback, useState, useReducer } from 'react'
import styled from 'styled-components'
import { Steps, ConfigProvider } from 'antd'
import theme from '../../style/theme'
import PictureSubmitPage from './PictureSubmit'
import RegionSubmitPage from './RegionSelect'
import InfoSubmitPage from './InfoSubmit'
import CategorySelctionPage from './CategorySelect'
import StyledButton from '../Common/StyledButton'
import { SmoothAnimation } from './Commons/CommonVariable'
import { initialState, reducer } from './Commons/reviewReducer'

const itmes = [
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

export default function SubmitPage() {
  const [step, setStep] = useState(0)
  const [review, dispatch] = useReducer(reducer, initialState)

  const setReviewContent = useCallback((type, value) => {
    dispatch({ type, value })
  }, [])

  function checkCanNext() {
    switch (step) {
      case 0:
        return true
      case 1:
        return review.cityId !== 0
      case 2:
        return (
          review.name.length !== 0 &&
          review.description.length !== 0 &&
          review.price !== 0
        )
      case 3:
        return review.subCategoryId !== 0
      default:
        return false
    }
  }

  return (
    <Wrapper>
      <ConfigProvider theme={stepsTheme}>
        <Steps
          size="small"
          current={step}
          items={itmes}
          style={{ width: '37.5rem', padding: '0', marginBottom: '2.5rem' }}
        />
      </ConfigProvider>
      <div>
        {
          {
            0: <PictureSubmitPage setStep={setStep} />,
            1: (
              <RegionSubmitPage
                review={review}
                setReviewContent={setReviewContent}
              />
            ),
            2: (
              <InfoSubmitPage
                review={review}
                setReviewContent={setReviewContent}
              />
            ),
            3: (
              <CategorySelctionPage
                review={review}
                setReviewContent={setReviewContent}
              />
            ),
          }[step]
        }
      </div>
      <div>
        {step !== 0 && (
          <StyledButton
            $state={false}
            onClick={() => {
              setStep(step - 1)
            }}
            $width="10.9375rem"
          >
            이전
          </StyledButton>
        )}
        {checkCanNext() && (
          <StyledButton
            $state
            onClick={() => {
              setStep(step + 1 > 3 ? 3 : step + 1)
              if (step === 3) console.log(review)
            }}
            $width="10.9375rem"
          >
            {step === 3 ? '완료' : '다음'}
          </StyledButton>
        )}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 80%;
  min-width: 50rem;
  margin: 1.875rem auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;

  & > div {
    width: 600px;
  }

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
    ${SmoothAnimation}
  }
`
