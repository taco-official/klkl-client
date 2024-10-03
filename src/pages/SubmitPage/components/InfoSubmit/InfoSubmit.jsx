import React from 'react'
import styled from 'styled-components'
import theme from '@styles/theme'
import useKyQuery from '@hooks/useKyQuery'
import NameInput from './NameInput'
import DescriptionInput from './DescriptionInput'
import RatingInput from './RatingInput'
import NumberInputForm from './NumberInputForm'

export default function InfoSubmitForm() {
  const { data: currencies, isLoading } = useKyQuery('currencies')

  return (
    <>
      <h2>
        상품 정보를 <br />
        작성해주세요
      </h2>
      <Wrapper>
        <h3>상품명</h3>
        <NameInput />
      </Wrapper>
      <Wrapper>
        <h3>후기</h3>
        <DescriptionInput />
      </Wrapper>
      <Wrapper>
        <h3>구매가격</h3>
        {!isLoading && <NumberInputForm currencies={currencies.data} />}
      </Wrapper>
      <Wrapper>
        <h3>별점</h3>
        <RatingInput />
      </Wrapper>
    </>
  )
}

const Wrapper = styled.div`
  width: 37.5rem;
  position: relative;
  margin-bottom: 1.875rem;

  input,
  textarea {
    font-family: ${theme.style.main};
  }

  span > span {
    font-size: 10px;
  }
`
