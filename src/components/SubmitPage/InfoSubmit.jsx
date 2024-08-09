import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Input, Rate } from 'antd'
import theme from '../../styles/theme'
import NumberInputForm from './Commons/NumberInputForm'
import { SmoothAnimation } from './Commons/CommonVariable'
import { reviewDataType } from './Commons/reviewReducer'

export default function InfoSubmitPage({ review, setReviewContent }) {
  console.log(review)
  return (
    <>
      <h2>
        상품 정보를 <br />
        작성해주세요
      </h2>
      <Wrapper>
        <h3>상품명</h3>
        <Input
          showCount
          maxLength={50}
          defaultValue={review.name}
          placeholder="상품명을 입력해주세요"
          onBlur={(e) => setReviewContent('SET_NAME', e.target.value)}
          style={{ fontSize: theme.size.textSM }}
          size="large"
        />
      </Wrapper>
      <Wrapper>
        <h3>후기</h3>
        <Input.TextArea
          showCount
          maxLength={1000}
          defaultValue={review.description}
          placeholder="리뷰를 입력해 주세요"
          onBlur={(e) => setReviewContent('SET_DESCRIPTION', e.target.value)}
          size="large"
          autoSize={{ minRows: 3 }}
          style={{ fontSize: theme.size.textSM }}
        />
      </Wrapper>
      <Wrapper>
        <h3>구매가격</h3>
        <NumberInputForm
          setPrice={(num) => setReviewContent('SET_PRICE', num)}
          defaultValue={review.price ? review.price : null}
        />
      </Wrapper>
      <Wrapper>
        <h3>끼룩스타</h3>
        <Rate
          allowHalf
          style={{ color: '#FFD700' }}
        />
      </Wrapper>
    </>
  )
}
InfoSubmitPage.propTypes = {
  review: PropTypes.shape(reviewDataType).isRequired,
  setReviewContent: PropTypes.func.isRequired,
}

const Wrapper = styled.div`
  width: 600px;
  position: relative;
  margin-bottom: 1.875rem;

  ${SmoothAnimation}

  span > span {
    font-size: 10px;
  }
`
