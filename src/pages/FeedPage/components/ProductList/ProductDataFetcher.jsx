import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Pagination } from 'antd'
import useKyQuery from '../../../../hooks/useKyQuery'
import useProductQuery from '../../../../hooks/useProductQuery'
import LoadingContent from '../../../../components/PreviewContent/LoadingContent'
import { FeedContainer } from '../../FeedPage.style'
import StyledList from './ProductList.style'

function ProductDataFetcher({ children }) {
  const { queryArray: selectedQueryArray } = useProductQuery()
  const [page, setPage] = useState({ requestPage: 0, size: 9 })
  const [productDataList, setProductDataList] = useState([])
  const [requestQuery, setRequestQuery] = useState([
    {
      key: 'page',
      value: page.requestPage,
    },
    {
      key: 'size',
      value: page.size,
    },
    ...selectedQueryArray,
  ])
  const {
    isLoading,
    data: productData,
    isError,
    refetch,
  } = useKyQuery('products', requestQuery, undefined, {
    staleTime: 0,
    refetchOnMount: false,
  })

  useEffect(() => {
    setRequestQuery([
      {
        key: 'page',
        value: page.requestPage,
      },
      {
        key: 'size',
        value: page.size,
      },
      ...selectedQueryArray,
    ])
  }, [page, selectedQueryArray])

  useEffect(() => {
    refetch()
  }, [requestQuery])

  useEffect(() => {
    if (!isLoading && !isError && productData) {
      setProductDataList(productData.data.content)
    }
  }, [isLoading, isError, productData])

  return (
    <FeedContainer>
      {isLoading && (
        <StyledList>
          <LoadingContent />
        </StyledList>
      )}
      {isError && (
        <StyledList className="empty">로딩에 실패했습니다.</StyledList>
      )}
      {!isLoading && !isError && children({ productDataList })}
      <Pagination
        defaultCurrent={1}
        current={page.requestPage + 1}
        total={productData?.data.totalElements || 0}
        pageSize={page.size}
        onChange={(pageNumber) =>
          setPage((prev) => ({ ...prev, requestPage: pageNumber - 1 }))
        }
      />
    </FeedContainer>
  )
}

ProductDataFetcher.propTypes = {
  children: PropTypes.func,
}

export default ProductDataFetcher
