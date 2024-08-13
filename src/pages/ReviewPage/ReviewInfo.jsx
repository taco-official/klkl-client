import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Breadcrumb, Rate, Dropdown, ConfigProvider, Modal } from 'antd'
import Icons from '../../components/Icons/Icons'
import { BlueTag } from '../../components/Tags/Tags.style'
import theme from '../../styles/theme'

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

export default function ReviewInfoBlock({ review }) {
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
        <CategoryWrapper>
          <Breadcrumb
            style={breadCrumbStyle}
            separator="/"
            items={breadCrumbItems}
          />

          <ForMobile>
            <SmallButton
              onClick={() => {
                console.log('하트누르기')
              }}
            >
              <Icons>favorite</Icons>
            </SmallButton>
            <SmallButton
              onClick={() => {
                console.log('하트누르기')
              }}
            >
              <Icons>link</Icons>
            </SmallButton>
          </ForMobile>
        </CategoryWrapper>

        <h2>{review.name}</h2>
        <TagWrapper>
          {review.tags.map((tagName) => (
            <BlueTag key={tagName}>{tagName}</BlueTag>
          ))}
        </TagWrapper>

        <EndWrapper>
          <Rate
            allowHalf
            disabled
            defaultValue={review.rate}
          />
          <div>
            {parseDate(review.createdAt)}
            <CustomDropdown
              placement="bottomLeft"
              arrow={false}
              menu={{
                items,
              }}
              trigger={['click']}
            >
              <Icons>more_vert</Icons>
            </CustomDropdown>
          </div>
        </EndWrapper>
      </ConfigProvider>
    </InfoWrapper>
  )
}
ReviewInfoBlock.propTypes = {
  review: PropTypes.shape(reviewDataType).isRequired,
}

const CategoryWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

const InfoWrapper = styled.div`
  position: relative;

  & > h2 {
    font-family: ${theme.style.mainBold};
    font-size: ${theme.size.titleLG};
    margin: 10px 0;
  }

  @media (max-width: 600px) {
    .review--float__mobile {
      display: flex;
    }
  }
`

const CustomDropdown = styled(Dropdown)`
  margin: 0 2px;
  border-radius: 35%;

  cursor: pointer;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`

const EndWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  margin-top: 0.3125rem;

  & > div {
    font-size: ${theme.size.textXS};
    display: flex;
    align-items: flex-end;
  }

  :where(.css-dev-only-do-not-override-1enioam).ant-rate {
    height: 17px;

    * {
      height: 100%;
    }
  }

  :where(.css-dev-only-do-not-override-1enioam).ant-rate .ant-rate-star {
    margin-inline-end: 0.125rem;
    width: 15px;
  }
`

const ForMobile = styled.div.attrs({
  className: 'review--float__mobile',
})`
  display: none;

  span {
    padding: 3px;
    border-radius: 35%;
    cursor: pointer;

    & > span:hover {
      background-color: rgba(0, 0, 0, 0.1);
    }
  }
`

const SmallButton = styled.button.attrs({ type: 'button' })`
  background-color: transparent;
  border: none;
  height: 100%;
  padding: 0;
  color: ${theme.color.textGrey};

  :hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`

const TagWrapper = styled.div`
  display: flex;
  & > div {
    margin: 0 3px;
  }
`
