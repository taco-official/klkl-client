import React from 'react'
import PropTypes from 'prop-types'
import { Button, ConfigProvider } from 'antd'
import theme from '@styles/theme'
import submitSteps from '@constants/submitSteps'
import useFormStore from '@stores/useFormStore'

const checkCanNext = (step, review) => {
  switch (step) {
    case submitSteps.IMAGE:
      return review.images.length !== 0
    case submitSteps.REGION:
      return review.region && review.country && review.city
    case submitSteps.INFO:
      return (
        review.name !== '' &&
        review.description !== '' &&
        review.price !== 0 &&
        review.rating !== 0
      )
    case submitSteps.CATEGORY:
      return review.category && review.subcategory
    default:
      return false
  }
}

export default function PrevNextButtons({ step, goNextStep, goPrevStep }) {
  const review = useFormStore()

  return (
    <div>
      <ConfigProvider
        theme={{
          token: {
            fontFamily: theme.style.mainBold,
            colorPrimary: theme.color.main,
            colorPrimaryHover: theme.color.mainDark,
          },
        }}
        wave={{ disabled: true }}
      >
        {step > submitSteps.IMAGE && (
          <Button
            onClick={goPrevStep}
            style={{ marginRight: '1.5625rem', width: '10.9375rem' }}
          >
            이전
          </Button>
        )}
        <Button
          type="primary"
          disabled={!checkCanNext(step, review)}
          onClick={goNextStep}
          style={{ marginRight: '1.5625rem', width: '10.9375rem' }}
        >
          {step === submitSteps.CATEGORY ? '완료' : '다음'}
        </Button>
      </ConfigProvider>
    </div>
  )
}

PrevNextButtons.propTypes = {
  step: PropTypes.number.isRequired,
  goNextStep: PropTypes.func.isRequired,
  goPrevStep: PropTypes.func.isRequired,
}
