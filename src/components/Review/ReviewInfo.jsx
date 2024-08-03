import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { MoreOutlined, HeartFilled, LinkOutlined } from '@ant-design/icons'
import { Breadcrumb, Rate, Dropdown, ConfigProvider, Modal } from 'antd'
import theme from '../../style/theme'

const reviewDataType = {
  productId: PropTypes.number,
  userId: PropTypes.number,
  name: PropTypes.string,
  description: PropTypes.string,
  likeCount: PropTypes.number,
  createdAt: PropTypes.string,
  price: PropTypes.number,
  cityId: PropTypes.number,
  subcategoryId: PropTypes.number,
  currencyId: PropTypes.number,
  tags: PropTypes.array,
  star: PropTypes.number,
}

const breadCrumbItems = [
  {
    title: '국가',
    href: '',
  },
  {
    title: '도시',
    href: '',
  },
  {
    title: '상품대분류',
    href: '',
  },
]

const breadCrumbStyle = {
  fontFamily: theme.style.mainBold,
  fontSize: theme.size.textXS,
}

const ConfigProviderTheme = {
  token: {
    fontFamily: theme.style.mainBold,
  },
}

const DeleteModal = () => {
  Modal.confirm({
    title: '리뷰 삭제',
    content: (
      <div>
        <p>삭제한 리뷰는 복구할 수 없습니다</p>
        <p>삭제하시겠습니까?</p>
      </div>
    ),
    centered: true,
    okText: '삭제',
    cancelText: '취소',
    okButtonProps: { danger: true },
    // onOk() {삭제로직},
  })
}

const ReportModal = () => {
  Modal.info({
    title: '신고하기',
    content: (
      <div>
        <p>삭제한 리뷰는 복구할 수 없습니다</p>
        <p>삭제하시겠습니까?</p>
      </div>
    ),
    centered: true,
    okText: '신고',
    cancelText: '취소',
    okButtonProps: { danger: true, style: { width: '200px' } },
    // onOk() {삭제로직},
  })
}

const items = [
  {
    key: '1',
    label: (
      <a
        target="_blank"
        href="수정링크"
      >
        수정
      </a>
    ),
  },
  {
    key: '2',
    label: (
      <div
        aria-hidden
        type="button"
        onClick={DeleteModal}
        style={{ color: 'red' }}
      >
        삭제
      </div>
    ),
  },
  {
    key: '3',
    label: (
      <div
        aria-hidden
        type="button"
        onClick={ReportModal}
        style={{ color: 'red' }}
      >
        신고
      </div>
    ),
  },
]

export default function ReviewInfo({ review }) {
  function parseDate(dateString) {
    const date = new Date(dateString)
    const year = date.getUTCFullYear()
    const month = String(date.getUTCMonth() + 1).padStart(2, '0') // 월은 0부터 시작하므로 +1 필요
    const day = String(date.getUTCDate()).padStart(2, '0')
    return `${year}.${month}.${day}`
  }

  return (
    <InfoWrapper>
      <ConfigProvider theme={ConfigProviderTheme}>
        <Breadcrumb
          style={breadCrumbStyle}
          separator="/"
          items={breadCrumbItems}
        />

        <CustomDropdown
          placement="bottomLeft"
          arrow={false}
          menu={{
            items,
          }}
          trigger={['click']}
        >
          <MoreOutlined />
        </CustomDropdown>

        <ForMobile>
          <div
            aria-hidden
            type="button"
            onClick={() => {
              console.log('하트누르기')
            }}
          >
            <HeartFilled />
          </div>
          <div
            aria-hidden
            type="button"
            onClick={() => {
              console.log('하트누르기')
            }}
          >
            <LinkOutlined />
          </div>
        </ForMobile>

        <h2>{review.name}</h2>
        <div>
          {review.tags.map((tagName) => (
            <ReviewTag
              key={tagName}
              $convenienceStore={tagName === '편의점'}
              $gosu={tagName === '고수'}
            >
              {tagName}
            </ReviewTag>
          ))}
        </div>

        <EndWrapper>
          <Rate
            allowHalf
            disabled
            defaultValue={review.rate}
          />
          <div>{parseDate(review.createdAt)}</div>
        </EndWrapper>
      </ConfigProvider>
    </InfoWrapper>
  )
}
ReviewInfo.propTypes = {
  review: PropTypes.shape(reviewDataType).isRequired,
}

const InfoWrapper = styled.div`
  position: relative;

  & > h2 {
    font-family: ${theme.style.mainBold};
    font-size: ${theme.size.titleLG};
    margin: 10px 0;
  }

  @media (max-width: 800px) {
    .review--float__mobile {
      display: flex;
    }
  }
`

const ReviewTag = styled.div`
  width: 3.125rem;
  height: 1.375rem;

  display: inline-flex;
  justify-content: center;
  align-items: center;

  margin-right: 0.4375rem;

  font-family: ${theme.style.main};
  font-size: ${theme.size.textXS};

  ${({ $convenienceStore }) =>
    $convenienceStore &&
    `background-color: ${theme.color.tag};
		color: ${theme.color.main};
		border-radius: 5px;`}

  ${({ $gosu }) =>
    $gosu &&
    `background-color: #54ce54;
		color: #006d00;
		border-radius: 5px;
		`}
`

const CustomDropdown = styled(Dropdown)`
  position: absolute;
  top: 0;
  right: 0;

  padding: 3px;
  border-radius: 35%;

  cursor: pointer;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`

const EndWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  margin-top: 0.9375rem;

  & > div {
    font-size: ${theme.size.textXS};
    display: flex;
    align-items: flex-end;
  }
`

const ForMobile = styled.div.attrs({
  className: 'review--float__mobile',
})`
  position: absolute;
  top: 0;
  right: 20px;

  display: none;

  div {
    padding: 3px;
    border-radius: 35%;
    cursor: pointer;

    &:hover {
      background-color: rgba(0, 0, 0, 0.1);
    }
  }
`
