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
  pageData,
  setPageData,
  error,
}) {
  return (
    <FeedContainer>
      {error && <StyledList className="empty">로딩에 실패했습니다.</StyledList>}
      {(isLoading || (!data && !error)) && (
        <StyledList>
          <LoadingContent />
        </StyledList>
      )}
      {!isLoading &&
        !error &&
        data &&
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

ProductDataStatusRenderer.propTypes = {
  isLoading: PropTypes.bool,
  data: PropTypes.shape({
    data: PropTypes.shape({
      content: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
      pageSize: PropTypes.number.isRequired,
      totalElements: PropTypes.number.isRequired,
    }),
  }),
  pageData: PropTypes.shape({
    requestPage: PropTypes.number.isRequired,
  }),
  setPageData: PropTypes.func,
  error: PropTypes.shape({}),
}

export default ProductDataStatusRenderer
