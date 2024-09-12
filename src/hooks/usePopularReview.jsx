import React from 'react'
import useKyQuery from './useKyQuery'

const usePopularReview = () => {
  const { data, isLoading, isError, error } = useKyQuery(
    'products?sort_by=like_count&sort_direction=DESC&size=12',
    null,
    undefined,
    { gcTime: 0 }
  )

  if (isError) return [<div>{error}</div>]
  if (isLoading) return []

  return data.data.content
}

export default usePopularReview
