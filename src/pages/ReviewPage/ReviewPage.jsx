import React from 'react'
import styled from 'styled-components'
import { Divider } from 'antd'
import { useLoaderData } from 'react-router-dom'

import theme from '../../styles/theme'
import UserFollowButton from '../../components/UserProfile/UserFollowButton'
import ReviewFloatButton from './ReviewFloatButton'
import ReviewImageSection from './ReviewImageBlock'
import ReviewInfoBlock from './ReviewInfo'
import ReviewMiddleBlock from './ReviewMiddle'
import UserProfile from '../../components/UserProfile/UserProfile'
import Comment from '../../components/Comment/Comment'
import useUserData from '../../hooks/useUserData'

export default function ReviewDetailPage() {
  const { data: review } = useLoaderData()
  const { data: client } = useUserData()

  return (
    <Article>
      <div>
        <ReviewImageSection images={review.images} />
        <ReviewInfoBlock
          review={review}
          canEdit={review.user.id === client.data.id}
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
          userData={review.user}
          profileButton={<UserFollowButton id={review.user.id} />}
        />
        <Divider />
        <Comment userData={client.data} />
      </div>
      <ReviewFloatButton />
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
