import React from 'react'
import PropTypes from 'prop-types'
import { FaHeart } from 'react-icons/fa6'
import {
  PreviewContainer,
  ThumbnailContainer,
  DescriptionContainer,
  SubDesContainer,
  CategoryBox,
  TitleBox,
  TagsContainer,
  LikeBox,
} from './PreviewContent.style'
import LikeButton from '../Button/LikeButton'
import MoreButton from '../Button/MoreButton'
import Tag from '../tag/Tag'

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
    <PreviewContainer>
      <ThumbnailContainer className="productThumbnail">
        <img
          className="previewContentImg"
          src={`nginx/products/${productId}.jpg`}
        />
        <LikeButton
          userId={userId}
          productId={productId}
        />
      </ThumbnailContainer>
      <DescriptionContainer>
        <SubDesContainer>
          <CategoryBox>
            <div className="city">{city}</div>
            <div className="subcategory">{subcategory}</div>
          </CategoryBox>
          <MoreButton size="0.8rem" />
        </SubDesContainer>
        <TitleBox id="productName">
          <b>{name}</b>
        </TitleBox>
        <TagsContainer>
          {tags.map((tag) => (
            <Tag
              key={tag}
              tagName={tag}
            />
          ))}
        </TagsContainer>
        <LikeBox>
          <FaHeart color="red" />
          {likeCount}
        </LikeBox>
      </DescriptionContainer>
    </PreviewContainer>
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
