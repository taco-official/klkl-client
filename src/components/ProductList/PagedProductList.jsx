import React from 'react'
import PropTypes from 'prop-types'
import { Pagination, ConfigProvider } from 'antd'
import ProductList from './ProductList'
import StyledList from './ProductList.style'
import { FeedContainer } from '../../pages/FeedPage/FeedPage.style'
import theme from '../../styles/theme'

function PagedProductList({ data, pageData, setPageData }) {
  return (
    <FeedContainer>
      {data &&
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

PagedProductList.propTypes = {
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
}

export default PagedProductList
