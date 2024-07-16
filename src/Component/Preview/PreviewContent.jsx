/* eslint-disable prettier/prettier */
import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { FaHeart } from 'react-icons/fa6'
import LikeButton from '../Icons/LikeButton'
import MoreButton from '../Icons/MoreButton'
import Tag from '../Tag/Tag'

const StyledReview = styled.div`
  width: 240px;
  height: 320px;
  background-color: white;
  border: 1px solid #000000;
  padding: 5px;
  margin: 2px;
  display: flex inline-block;
  flex-direction: column;
  justify-content: center;
`

const ThumbnailDiv = styled.div`
  width: 240px;
  height: 210px;
  margin-bottom: 4px;
  position: relative;
  justify-content: center;
`

const LikeDiv = styled.div`
  display: inline-block;
  position: absolute;
  bottom: 5px;
  right: 15px;
  :first-child {
    font-weight:;
  }
`

const DescriptionDiv = styled.div``

const SubDesDiv = styled.div`
  display: flex;
  justify-content: space-between;
`

const CategoryDiv = styled.div`
  color: #8d8d8d;
  font-size: 0.8rem;
  margin-right: 4px;
  display: flex;
  align-items: center;
`

const TitleDiv = styled.div`
  font-size: 1.2rem;
  margin-bottom: 3px;
  margin-right: 1px;
`

const TagsDiv = styled.div`
  margin-bottom: 5px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`

const LikeCountDiv = styled.div`
  margin-top: 6px;
  margin-right: 2px;
  display: flex;
  align-items: flex-start;
  :first-child {
    margin-right: 5px;
  }
`

function PreviewContent({
  userId = undefined,
  productId,
  city,
  subcategory,
  name,
  tags,
  likeCount,
}) {
  return (
    <StyledReview>
      <ThumbnailDiv className="productThumbnail">
        <img
          className="previewContentImg"
          src={`nginx/products/${productId}.jpg`}
          width="100%"
          height="100%"
        />
        <LikeDiv>
          <LikeButton
            userId={userId}
            productId={productId}
            size={25}
          />
        </LikeDiv>
      </ThumbnailDiv>
      <DescriptionDiv>
        <SubDesDiv>
          <CategoryDiv>
            {city} {subcategory}
          </CategoryDiv>
          <MoreButton size={18} />
        </SubDesDiv>
        <TitleDiv id="productName">
          <b>{name}</b>
        </TitleDiv>
        <TagsDiv>
          {tags.map((tag) => (
            <Tag
              key={tag}
              tagName={tag}
            />
          ))}
        </TagsDiv>
        <LikeCountDiv>
          <FaHeart
            color="red"
            size={16}
          />
          {likeCount}
        </LikeCountDiv>
      </DescriptionDiv>
    </StyledReview>
  )
}

PreviewContent.propTypes = {
  userId: PropTypes.number,
  productId: PropTypes.number.isRequired,
  city: PropTypes.string.isRequired,
  subcategory: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  likeCount: PropTypes.number.isRequired,
}

export default PreviewContent
