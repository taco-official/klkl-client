import React from 'react'
import { Pagination, ConfigProvider } from 'antd'
import useProductData from '../../hooks/useProductData'
import LoadingContent from '../PreviewContent/LoadingContent'
import ProductList from './ProductList'
import StyledList from './ProductList.style'
import { FeedContainer } from '../../pages/FeedPage/FeedPage.style'
import theme from '../../styles/theme'

function ProductDataStatusRenderer() {
  const { isLoading, data, pageData, setPageData, isError } = useProductData()

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
      {!isLoading &&
        !isError &&
        (!data.data.content.length ? (
          <StyledList className="empty">해당 상품이 없습니다.</StyledList>
        ) : (
          <ProductList dataList={data.data.content} />
        ))}
      <ConfigProvider
        theme={{
          token: {
            fontFamily: theme.style.main,
            fontSize: theme.size.textXS,
            colorPrimary: theme.color.main,
          },
        }}
      >
        <Pagination
          align="center"
          current={pageData.requestPage + 1}
          defaultPageSize={9}
          pageSize={data?.data.pageSize}
          total={data?.data.totalElements}
          showSizeChanger={false}
          onChange={(pageNumber) =>
            setPageData((prev) => ({
              ...prev,
              requestPage: pageNumber - 1,
            }))
          }
        />
      </ConfigProvider>
    </FeedContainer>
  )
}

export default ProductDataStatusRenderer
