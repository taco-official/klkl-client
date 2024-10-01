import React from 'react'
import useUserData from '@hooks/useUserData'
import useProductData from '@hooks/useProductData'
import LoadingFeed from '@components/ProductFeed/LoadingFeed'
import ProductFeed from '@components/ProductFeed/ProductFeed'
import { StyledFeed } from '@components/ProductFeed/ProductFeed.style'

function ProductDataRenderer() {
  const { data: userData } = useUserData()
  const { isLoading, data, isError, setPageData } = useProductData()

  if (isLoading) return <LoadingFeed />

  if (isError)
    return <StyledFeed className="empty">로딩에 실패했습니다.</StyledFeed>

  return (
    <ProductFeed
      userData={userData}
      data={data.data}
      setPageData={setPageData}
    />
  )
}

export default ProductDataRenderer
