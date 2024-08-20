import React from 'react'
import { useKyQuery } from './useKyQuery'

const usePopularReview = () => {
  const { data, isLoading, isError, error } = useKyQuery(
    'products?sort_by=like_count&sort_direction=DESC',
    { staleTime: 0 }
  )

  if (isError) return [<div>{error}</div>]
  if (isLoading) return []

  return data.data.content
}

export default usePopularReview
