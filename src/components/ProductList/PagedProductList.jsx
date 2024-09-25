import React from 'react'
import PropTypes from 'prop-types'
import { Pagination, ConfigProvider } from 'antd'
import ProductList from './ProductList'
import { FeedContainer } from '../../pages/FeedPage/FeedPage.style'
import StyledList from './ProductList.style'
import theme from '../../styles/theme'

function PagedProductList({ data, setPageData }) {
  return (
    <FeedContainer>
      {!data.content.length ? (
        <StyledList className="empty">해당 상품이 없습니다.</StyledList>
      ) : (
        <ProductList dataList={data.content} />
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
          current={data.pageNumber + 1}
          defaultPageSize={9}
          pageSize={data.pageSize}
          total={data.totalElements}
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

PagedProductList.propTypes = {
  data: PropTypes.shape({
    content: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    pageNumber: PropTypes.number.isRequired,
    pageSize: PropTypes.number.isRequired,
    totalElements: PropTypes.number.isRequired,
  }),
  setPageData: PropTypes.func,
}

export default PagedProductList
