import React from 'react'
import { useParams } from 'react-router-dom'
import PropTypes from 'prop-types'
import kyMethod from '@constants/kyMethod'
import useReviewSubmit from '@hooks/useReviewSubmit'
import LoadingPage from '../../LoadingPage'

function PostPage({ goPrevStep }) {
  const isCreate = window.location.pathname === '/submit'
  const { id } = useParams()

  const uri = isCreate ? 'products' : `products/${id}`
  const httpMethod = isCreate ? kyMethod.POST : kyMethod.PUT

  useReviewSubmit(httpMethod, uri, goPrevStep)

  return <LoadingPage />
}
PostPage.propTypes = {
  goPrevStep: PropTypes.func.isRequired,
}

export default PostPage
