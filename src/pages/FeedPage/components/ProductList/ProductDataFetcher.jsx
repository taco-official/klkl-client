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
  const [pageData, setPageData] = useState({
    requestPage: 0,
    responsePage: undefined,
    size: 9,
  })
  const [productDataList, setProductDataList] = useState([])
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

  useEffect(() => {
    if (!isLoading && !isError && productData) {
      setProductDataList(productData.data.content)
      setPageData((prev) => ({
        ...prev,
        responsePage: productData.data.pageNumber,
      }))
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
        align="center"
        current={pageData?.responsePage && pageData.responsePage + 1}
        defaultPageSize={9}
        pageSize={productData?.data.pageSize}
        total={productData?.data.totalElements}
        onChange={(page) =>
          setPageData((prev) => ({ ...prev, requestPage: page - 1 }))
        }
      />
    </FeedContainer>
  )
}

ProductDataFetcher.propTypes = {
  children: PropTypes.func,
}

export default ProductDataFetcher
