import React, { useEffect } from 'react'
import { Spin } from 'antd'
import { useNavigate } from 'react-router-dom'

import useFormStore from '../../../stores/useFormStore'
import { method, useKyMutation } from '../../../hooks/useKyQuery'

const useReviewPost = () => {
  const postBody = useFormStore((state) => ({
    name: state.name,
    description: state.description,
    currencyId: state.currencyId,
    price: state.price,
    rating: state.rating,
    cityId: state.cityId,
    address: state.address,
    subcategoryId: state.subcategoryId,
    tagIds: [...state.tags],
  }))

  console.log(postBody)

  const resetReviewContents = useFormStore((state) => state.resetFormContents)
  const navigate = useNavigate()

  const { data, mutate, isSuccess, isError, error } = useKyMutation(
    method.POST,
    'products'
  )

  useEffect(() => {
    if (!isSuccess) {
      mutate(JSON.stringify(postBody))
      return
    }

    if (isError) console.log(error)

    navigate(`/products/${data.data.id}`)
    resetReviewContents()
  }, [isSuccess])
}

function LoadingPage() {
  useReviewPost()

  return (
    <Spin
      fullscreen
      tip="전송중입니다..."
      size="large"
      percent="auto"
    />
  )
}

export default LoadingPage
