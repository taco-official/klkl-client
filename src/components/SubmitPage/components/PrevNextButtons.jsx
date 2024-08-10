import React from 'react'
import { useShallow } from 'zustand/react/shallow'
import { useNavigate } from 'react-router-dom'

import submitSteps from '../constant/submitSteps'
import StyledButton from '../../Common/StyledButton'
import useReviewStore from '../stores/useReviewStore'
import useStepStore from '../stores/useStepStore'

export default function PrevNextButtons() {
  const { step, increaseStep, decreaseStep, resetStep } = useStepStore()

  const review = useReviewStore(useShallow((state) => state))
  const resetReviewContents = useReviewStore(
    (state) => state.resetReviewContents
  )

  const navigate = useNavigate()

  const checkNext = () => {
    switch (step) {
      case submitSteps.PICTURE:
        return true
      case submitSteps.REGION:
        return (
          review.continentId !== 0 &&
          review.countryId !== 0 &&
          review.cityId !== 0
        )
      case submitSteps.INFO:
        return (
          review.name !== '' &&
          review.description !== '' &&
          review.price !== 0 &&
          review.rate !== 0
        )
      case submitSteps.CATEGORY:
        return review.categoryId !== 0 && review.subCategoryId !== 0
      default:
        return false
    }
  }

  return (
    <div>
      {step !== submitSteps.PICTURE && (
        <StyledButton
          $state={false}
          onClick={decreaseStep}
          $width="10.9375rem"
        >
          이전
        </StyledButton>
      )}

      <StyledButton
        $state
        disabled={!checkNext()}
        onClick={() => {
          if (step === submitSteps.CATEGORY) {
            resetReviewContents()
            resetStep()
            navigate('/review')
          } else increaseStep()
        }}
        $width="10.9375rem"
      >
        {step === 3 ? '완료' : '다음'}
      </StyledButton>
    </div>
  )
}
