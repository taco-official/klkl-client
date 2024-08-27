import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { method } from '../../../hooks/kyInstance'
import LoadingPage from '../../LoadingPage'
import useKyMutation from '../../../hooks/useKyMutation'
import useFormStore from '../../../stores/useFormStore'

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

    navigate(`/products/${data.data.id}`, {
      state: { from: window.location.pathname },
    })
    resetReviewContents()
  }, [isSuccess])
}

function PostingPage() {
  useReviewPost()

  return <LoadingPage />
}

export default PostingPage
