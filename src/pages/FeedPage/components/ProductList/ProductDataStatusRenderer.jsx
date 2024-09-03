import React from 'react'
import PropTypes from 'prop-types'
import { Pagination } from 'antd'
import LoadingContent from '../../../../components/PreviewContent/LoadingContent'
import ProductList from './ProductList'
import StyledList from './ProductList.style'

function ProductDataStatusRenderer({
  isLoading,
  data,
  pageData,
  setPageData,
  isError,
}) {
  return (
    <>
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
      <Pagination
        align="center"
        current={pageData.requestPage + 1}
        defaultPageSize={9}
        pageSize={data?.data.pageSize}
        total={data?.data.totalElements}
        showSizeChanger={false}
        onChange={(page) =>
          setPageData((prev) => ({
            ...prev,
            requestPage: page - 1,
          }))
        }
      />
    </>
  )
}

ProductDataStatusRenderer.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  data: PropTypes.shape({
    data: PropTypes.shape({
      content: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          thumbnail: PropTypes.string,
          countryName: PropTypes.string.isRequired,
          categoryName: PropTypes.string.isRequired,
          name: PropTypes.string.isRequired,
          tags: PropTypes.arrayOf(
            PropTypes.shape({
              id: PropTypes.number.isRequired,
              name: PropTypes.string.isRequired,
            })
          ),
          rating: PropTypes.number,
          likeCount: PropTypes.number,
        })
      ),
      pageNumber: PropTypes.number.isRequired,
      pageSize: PropTypes.number.isRequired,
      totalElements: PropTypes.number.isRequired,
    }),
  }),
  pageData: PropTypes.shape({
    requestPage: PropTypes.number.isRequired,
    responsePage: PropTypes.number,
    size: PropTypes.number.isRequired,
  }).isRequired,
  setPageData: PropTypes.func.isRequired,
  isError: PropTypes.bool.isRequired,
}

export default ProductDataStatusRenderer
