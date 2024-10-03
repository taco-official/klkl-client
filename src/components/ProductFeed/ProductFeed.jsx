import React from 'react'
import PropTypes from 'prop-types'
import { Pagination, ConfigProvider } from 'antd'
import theme from '@styles/theme'
import PreviewContent from '../PreviewContent/PreviewContent'
import { FeedContainer, StyledFeed } from './ProductFeed.style'

function ProductFeed({ userData, data, setPageData }) {
  return (
    <FeedContainer>
      {!data.content.length ? (
        <StyledFeed className="empty">해당 상품이 없습니다.</StyledFeed>
      ) : (
        <StyledFeed>
          {data.content.map((content) => (
            <PreviewContent
              key={content.id}
              userData={userData}
              productData={content}
            />
          ))}
        </StyledFeed>
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

ProductFeed.propTypes = {
  userData: PropTypes.shape({}),
  data: PropTypes.shape({
    content: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    pageNumber: PropTypes.number.isRequired,
    pageSize: PropTypes.number.isRequired,
    totalElements: PropTypes.number.isRequired,
  }),
  setPageData: PropTypes.func,
}

export default ProductFeed
