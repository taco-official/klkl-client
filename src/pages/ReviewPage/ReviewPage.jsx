import React from 'react'
import styled from 'styled-components'
import { Divider } from 'antd'
import { useLocation } from 'react-router-dom'
import { createPortal } from 'react-dom'

import { useKyQuery } from '../../hooks/useKyQuery'
import theme from '../../styles/theme'

import ReviewFloatButton from './components/ReviewFloatButton'
import ReviewImageBlock from './ReviewImageBlock'
import ReviewInfoBlock from './ReviewInfo'
import ReviewMiddleBlock from './ReviewMiddle'
import UserProfile from '../../components/UserProfile/UserProfile'
import Comment from '../../components/Comment/Comment'

export default function ReviewDetailPage() {
  const location = useLocation()
  const { data, isLoading, isError, error } = useKyQuery(
    `${location.pathname}`.slice(1)
  )

  if (isLoading) return <div>loading</div>
  if (isError) {
    if (error.response.status === 404) return <div>cannot found!</div>
    return <div>error</div>
  }

  return (
    <Wrapper>
      {createPortal(
        <ReviewFloatButton />,
        document.getElementById('root-aside')
      )}
      <ReviewImageBlock imageURLs={[]} />
      <ReviewInfoBlock review={data.data} />
      <Divider />
      <ReviewMiddleBlock
        address={data.data.address}
        price={data.data.price}
        currency={data.data.currency}
      />
      <Divider />
      <Description>{data.data.description}</Description>
      <Divider />
      <UserProfile userData={data.data.user} />
      <Divider />
      <Comment />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 50%;
  min-width: 37.5rem;
  max-width: 62.5rem;
  padding: 0 3.125rem;
  margin: 0 auto;
  position: relative;

  @media (max-width: 600px) {
    .review--floatbutton {
      display: none;
    }
  }

  & > h2 {
    font-style: ${theme.style.mainEB};
    font-size: ${theme.size.titleSM};
    margin-bottom: 10px;
  }
`

const Description = styled.div`
  width: 95%;
  margin: 0 auto;
  font-size: ${theme.size.textSM};
  line-height: 1.5rem;
  white-space: pre-line;
  text-justify: none;
`
