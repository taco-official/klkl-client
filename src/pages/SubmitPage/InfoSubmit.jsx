import React from 'react'
import styled from 'styled-components'
import { Input, Rate } from 'antd'
import { useShallow } from 'zustand/react/shallow'

import useReviewStore from './stores/useReviewStore'
import theme from '../../styles/theme'
import NumberInputForm from './components/NumberInputForm'

export default function InfoSubmitPage() {
  const [name, description, rate] = useReviewStore(
    useShallow((state) => [state.name, state.description, state.rate])
  )

  const setReviewContent = useReviewStore((state) => state.setReviewContents)

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
          defaultValue={name}
          placeholder="상품명을 입력해주세요"
          onBlur={(e) => setReviewContent({ name: e.target.value.trim() })}
          style={{ fontSize: theme.size.textSM }}
          size="large"
        />
      </Wrapper>
      <Wrapper>
        <h3>후기</h3>
        <Input.TextArea
          showCount
          maxLength={1000}
          defaultValue={description}
          placeholder="리뷰를 입력해 주세요"
          onBlur={(e) =>
            setReviewContent({ description: e.target.value.trim() })
          }
          size="large"
          autoSize={{ minRows: 3 }}
          style={{ fontSize: theme.size.textSM }}
        />
      </Wrapper>
      <Wrapper>
        <h3>구매가격</h3>
        <NumberInputForm />
      </Wrapper>
      <Wrapper>
        <h3>끼룩스타</h3>
        <Rate
          allowHalf
          defaultValue={rate}
          style={{ color: '#FFD700' }}
          onChange={(num) => setReviewContent({ rate: num })}
        />
      </Wrapper>
    </>
  )
}

const Wrapper = styled.div`
  width: 600px;
  position: relative;
  margin-bottom: 1.875rem;

  @keyframes openModal {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 0.99;
    }
  }

  animation: openModal ease-in 0.3s;

  input,
  textarea {
    font-family: ${theme.style.main};
  }

  span > span {
    font-size: 10px;
  }
`
