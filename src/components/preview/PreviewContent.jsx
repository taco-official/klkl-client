import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { FaHeart } from 'react-icons/fa6'
import LikeButton from '../icons/LikeButton'
import MoreButton from '../icons/MoreButton'
import Tag from '../tag/Tag'

const StyledReview = styled.div`
  width: 13rem;
  background-color: white;
  border: 0.1rem solid #000000;
  padding: 0.5rem;
  margin: 0.5rem;
  display: flex inline-block;
  flex-direction: column;
  justify-content: center;
`

const ThumbnailDiv = styled.div`
  height: 13rem;
  margin-bottom: 0.25rem;
  position: relative;
  justify-content: center;
`

const LikeDiv = styled.div`
  display: inline-block;
  position: absolute;
  bottom: 0.3rem;
  right: 0.7rem;
`

const DescriptionDiv = styled.div`
  padding: 0.1rem 0.1rem 0rem 0.1rem;
`

const SubDesDiv = styled.div`
  padding-left: 0.1rem;
  font-size: 0.8rem;
  display: flex;
  justify-content: space-between;
`

const CategoryDiv = styled.div`
  color: #8d8d8d;
  display: flex;
  align-items: center;
`

const TitleDiv = styled.div`
  font-size: 1.2rem;
  margin-bottom: 0.1rem;
`

const TagsDiv = styled.div`
  margin-bottom: 0.4rem;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  :nth-child(n) {
    margin-right: 0.3rem;
  }
  :last-child {
    margin-right: 0rem;
  }
`

const LikeCountDiv = styled.div`
  display: flex;
  font-size: 0.8rem;
  color: red;
  align-items: flex-start;
  :first-child {
    margin-right: 0.2rem;
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
            size={22}
          />
        </LikeDiv>
      </ThumbnailDiv>
      <DescriptionDiv>
        <SubDesDiv>
          <CategoryDiv>
            {city} {subcategory}
          </CategoryDiv>
          <MoreButton size="0.8rem" />
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
          <FaHeart color="red" />
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
