import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Input, Rate } from 'antd'
import theme from '../../style/theme'
import NumberInputForm from './Commons/NumberInputForm'
import { SmoothAnimation } from './Commons/CommonVariable'
import { reviewDataType } from './Commons/reviewReducer'

const { TextArea } = Input

export default function InfoSubmitPage({ review, setReviewContent }) {
  return (
    <>
      <h2>
        상품 정보를 <br />
        작성해주세요
      </h2>
      <Wrapper>
        <h3>상품명</h3>
        <Input
          maxLength={50}
          defaultValue={review.name}
          placeholder="상품명을 입력해주세요"
          onChange={(e) => setReviewContent('SET_NAME', e.target.value)}
          style={{ fontSize: theme.size.textSM, fontFamily: theme.style.main }}
          size="large"
        />
        <span>{`${review.name.length}/50`}</span>
      </Wrapper>
      <Wrapper>
        <h3>후기</h3>
        <TextArea
          maxLength={1000}
          rows={6}
          defaultValue={review.description}
          placeholder="리뷰를 입력해 주세요"
          onChange={(e) => setReviewContent('SET_DESCRIPTION', e.target.value)}
          size="large"
          style={{ fontSize: theme.size.textSM, fontFamily: theme.style.main }}
        />
        <span>{`${review.description.length}/1000`}</span>
      </Wrapper>
      <Wrapper>
        <h3>구매가격</h3>
        <NumberInputForm
          setPrice={(num) => setReviewContent('SET_PRICE', num)}
          defaultValue={review.price}
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

  & > span {
    font-size: 0.625rem;
    color: ${theme.color.textGrey};

    position: absolute;
    right: 0.3125rem;
    bottom: -0.9375rem;
  }
`
