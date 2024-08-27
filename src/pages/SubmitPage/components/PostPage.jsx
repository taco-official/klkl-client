import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { method } from '../../../hooks/kyInstance'
import LoadingPage from '../../LoadingPage'
import useKyMutation from '../../../hooks/useKyMutation'
import useFormStore from '../../../stores/useFormStore'

const useReviewSubmit = (httpMethod, uri) => {
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
    httpMethod,
    uri
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

function PostPage() {
  const isCreate = window.location.pathname === '/submit'
  const { id } = useParams()

  const uri = isCreate ? '/products' : `products/${id}`
  const httpMethod = isCreate ? method.POST : method.PUT

  useReviewSubmit(httpMethod, uri)

  return <LoadingPage />
}

export default PostPage
