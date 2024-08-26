import React from 'react'
import styled from 'styled-components'
import { Input, Rate } from 'antd'
import { useShallow } from 'zustand/react/shallow'

import useFormStore from '../../../../stores/useFormStore'
import theme from '../../../../styles/theme'
import NumberInputForm from './NumberInputForm'

export default function InfoSubmitForm() {
  const [name, description, rating] = useFormStore(
    useShallow((state) => [state.name, state.description, state.rating])
  )
  const setFormContents = useFormStore((state) => state.setFormContents)

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
          onBlur={(e) => setFormContents({ name: e.target.value.trim() })}
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
            setFormContents({ description: e.target.value.trim() })
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
        <h3>별점</h3>
        <Rate
          allowHalf
          defaultValue={rating}
          style={{ color: '#FFD700' }}
          onChange={(num) => setFormContents({ rating: num })}
        />
      </Wrapper>
    </>
  )
}

const Wrapper = styled.div`
  width: 600px;
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
