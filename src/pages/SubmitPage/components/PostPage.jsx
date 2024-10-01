import React from 'react'
import { useParams } from 'react-router-dom'
import { method } from '@hooks/kyInstance'
import useReviewSubmit from '@hooks/useReviewSubmit'
import LoadingPage from '../../LoadingPage'

function PostPage() {
  const isCreate = window.location.pathname === '/submit'
  const { id } = useParams()

  const uri = isCreate ? 'products' : `products/${id}`
  const httpMethod = isCreate ? method.POST : method.PUT

  useReviewSubmit(httpMethod, uri)

  return <LoadingPage />
}

export default PostPage
