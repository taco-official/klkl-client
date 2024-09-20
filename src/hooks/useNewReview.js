import React from 'react'
import useKyQuery from './useKyQuery'

const useNewReview = () => {
  const { data, isLoading, isError, error } = useKyQuery(
    'products?sort_by=created_at&sort_direction=DESC&size=12',
    undefined,
    { staleTime: 0 }
  )

  if (isError) return [<div>{error}</div>]
  if (isLoading) return []

  return data.data.content
}

export default useNewReview
