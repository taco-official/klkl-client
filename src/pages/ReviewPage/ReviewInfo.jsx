import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Breadcrumb, Rate, ConfigProvider } from 'antd'
import { BlueTag } from '../../components/Tags/Tags.style'

import dateParser from '../../utils/dateParser'
import ReviewOptions from './components/ReviewOptions'
import theme from '../../styles/theme'

const breadCrumbStyle = {
  fontFamily: theme.style.mainBold,
  fontSize: theme.size.textXS,
}

const ConfigProviderTheme = {
  token: {
    fontFamily: theme.style.mainBold,
  },
}

export default function ReviewInfoBlock({ review }) {
  const breadCrumbItems = [
    {
      title: review.city.name,
      href: '',
    },
    {
      title: review.subcategory.name,
      href: '',
    },
  ]

  return (
    <InfoWrapper>
      <ConfigProvider theme={ConfigProviderTheme}>
        <CategoryWrapper>
          <Breadcrumb
            style={breadCrumbStyle}
            separator="/"
            items={breadCrumbItems}
          />
        </CategoryWrapper>

        <h2>{review.name}</h2>
        <TagWrapper>
          {review.tags.map((tag) => (
            <BlueTag key={tag.id}>{tag.name}</BlueTag>
          ))}
        </TagWrapper>

        <EndWrapper>
          <Rate
            allowHalf
            disabled
            defaultValue={review.rating}
          />
          <div>
            {dateParser(review.createdAt)}
            <ReviewOptions />
          </div>
        </EndWrapper>
      </ConfigProvider>
    </InfoWrapper>
  )
}
ReviewInfoBlock.propTypes = {
  review: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    description: PropTypes.string,
    address: PropTypes.string,
    price: PropTypes.number,
    rating: PropTypes.number,
    likeCount: PropTypes.number,
    user: PropTypes.shape({
      id: PropTypes.number,
      profile: PropTypes.string,
      name: PropTypes.string,
      description: PropTypes.string,
      totalLikeCount: PropTypes.number,
    }),
    city: PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
    }),
    subcategory: PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
    }),
    currency: PropTypes.shape({
      id: PropTypes.number,
      code: PropTypes.string,
      flag: PropTypes.string,
    }),
    tags: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
      })
    ),
    createdAt: PropTypes.string,
  }).isRequired,
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

const EndWrapper = styled.div`
  height: 17px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: ${theme.size.textXS};

  & > div {
    display: flex;
    align-items: center;
  }

  .ant-rate {
    height: 100%;
    * {
      height: 100%;
    }
    .ant-rate-star {
      margin-inline-end: 0;
    }
  }
`

const TagWrapper = styled.div`
  display: flex;
  margin: 0.8125rem 0;

  & > div {
    margin: 0 3px;
  }
`
