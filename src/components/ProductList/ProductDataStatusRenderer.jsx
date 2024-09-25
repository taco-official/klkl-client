import React from 'react'
import PropTypes from 'prop-types'
import { Pagination, ConfigProvider } from 'antd'
import LoadingContent from '../PreviewContent/LoadingContent'
import ProductList from './ProductList'
import StyledList from './ProductList.style'
import { FeedContainer } from '../../pages/FeedPage/FeedPage.style'
import theme from '../../styles/theme'

function ProductDataStatusRenderer({
  isLoading,
  data,
  isError,
  pageData,
  setPageData,
}) {
  if (isLoading)
    return (
      <StyledList>
        <LoadingContent />
      </StyledList>
    )

  if (isError)
    return <StyledList className="empty">로딩에 실패했습니다.</StyledList>

  return (
    <FeedContainer>
      {!data.data.content.length ? (
        <StyledList className="empty">해당 상품이 없습니다.</StyledList>
      ) : (
        <ProductList dataList={data.data.content} />
      )}
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
          current={pageData.page + 1}
          defaultPageSize={9}
          pageSize={data?.data.pageSize}
          total={data?.data.totalElements}
          showSizeChanger={false}
          onChange={(pageNumber) =>
            setPageData((prev) => ({
              ...prev,
              page: pageNumber - 1,
            }))
          }
        />
      </ConfigProvider>
    </FeedContainer>
  )
}

ProductDataStatusRenderer.propTypes = {
  isLoading: PropTypes.bool,
  data: PropTypes.shape({
    data: PropTypes.shape({
      content: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
      pageSize: PropTypes.number.isRequired,
      totalElements: PropTypes.number.isRequired,
    }),
  }),
  isError: PropTypes.bool,
  pageData: PropTypes.shape({
    page: PropTypes.number.isRequired,
  }),
  setPageData: PropTypes.func,
}

export default ProductDataStatusRenderer
