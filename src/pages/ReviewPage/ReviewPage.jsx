import React from 'react'
import styled from 'styled-components'
import { useLoaderData } from 'react-router-dom'
import { Divider } from 'antd'
import theme from '@styles/theme'
import useLoginStore from '@stores/useLoginStore'
import UserProfile from '@components/UserProfile/UserProfile'
import UserFollowButton from '@components/UserProfile/UserFollowButton'
import Comment from '@components/Comment/Comment'
import ReviewFloatButton from './ReviewFloatButton'
import ReviewImageSection from './ReviewImageBlock'
import ReviewInfoBlock from './ReviewInfo'
import ReviewMiddleBlock from './ReviewMiddle'

export default function ReviewDetailPage() {
  const { data: review } = useLoaderData()
  const loginData = useLoginStore((state) => state.loginData)

  return (
    <Article>
      <div>
        <ReviewImageSection images={review.images} />
        <ReviewInfoBlock
          review={review}
          canEdit={review.member.id === loginData?.id}
        />
        <Divider />
        <ReviewMiddleBlock
          address={review.address}
          price={review.price}
          currency={review.currency}
        />
        <Divider />
        <Description>
          <p>{review.description}</p>
        </Description>
        <Divider />
        <UserProfile
          userData={review.member}
          profileButton={<UserFollowButton id={review.member.id} />}
        />
        <Divider />
        <Comment userData={loginData} />
      </div>
      <ReviewFloatButton
        userData={loginData}
        productId={review.id}
        likeContent={review.isLiked}
      />
    </Article>
  )
}

const Article = styled.article`
  width: 600px;
  padding: 0 3.125rem;
  margin: 0 auto;
  position: relative;
  align-items: start;

  display: grid;
  grid-template-columns: 550px auto;
  grid-column-gap: 40px;

  & > h2 {
    font-style: ${theme.style.mainEB};
    font-size: ${theme.size.titleSM};
    margin-bottom: 10px;
  }
`

const Description = styled.section`
  width: 95%;
  margin: 0 auto;
  font-size: ${theme.size.textMD};
  line-height: 1.8rem;
  white-space: pre-line;
  text-justify: none;
`
