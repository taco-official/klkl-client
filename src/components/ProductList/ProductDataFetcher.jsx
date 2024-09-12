import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import useKyQuery from '../../hooks/useKyQuery'
import useProductQuery from '../../hooks/useProductQuery'
import { FeedContainer } from '../../pages/FeedPage/FeedPage.style'

function ProductDataFetcher({ children }) {
  const { queryArray: selectedQueryArray } = useProductQuery()
  const [pageData, setPageData] = useState({
    requestPage: 0,
    size: 9,
  })
  const [requestQuery, setRequestQuery] = useState([
    {
      key: 'page',
      value: pageData.requestPage,
    },
    {
      key: 'size',
      value: pageData.size,
    },
    ...selectedQueryArray,
  ])
  const { isLoading, data, isError, refetch } = useKyQuery(
    'products',
    requestQuery,
    undefined,
    {
      gcTime: 0,
      refetchOnMount: false,
    }
  )

  useEffect(() => {
    setRequestQuery([
      {
        key: 'page',
        value: pageData.requestPage,
      },
      {
        key: 'size',
        value: pageData.size,
      },
      ...selectedQueryArray,
    ])
  }, [pageData, selectedQueryArray])

  useEffect(() => {
    refetch()
  }, [requestQuery])

  return (
    <FeedContainer>
      {children({ isLoading, data, pageData, setPageData, isError })}
    </FeedContainer>
  )
}

ProductDataFetcher.propTypes = {
  children: PropTypes.func,
}

export default ProductDataFetcher
