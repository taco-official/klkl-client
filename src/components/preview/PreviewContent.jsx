import React from 'react'
import PropTypes from 'prop-types'
import { StarFilled } from '@ant-design/icons'
import { FaHeart } from 'react-icons/fa6'
import LikeButton from '../Button/LikeButton'
import MoreButton from '../Button/MoreButton'
import { BlueTag } from '../tag/Tags.style'
import {
  PreviewContainer,
  ThumbnailContainer,
  DescriptionContainer,
  SubDesBox,
  CategoryWrapper,
  ProductNameBox,
  TagsContainer,
  IconContainer,
  IconBox,
  TitleContainer,
} from './PreviewContent.style'

function PreviewContent({ userId = undefined, productData }) {
  return (
    <PreviewContainer>
      <ThumbnailContainer id="productThumbnail">
        <img
          id="previewContentImg"
          src={`nginx/products/${productData.id}.jpg`}
        />
        <LikeButton
          id="likeButton"
          userId={userId}
          productId={productData.id}
        />
      </ThumbnailContainer>
      <DescriptionContainer>
        <TitleContainer>
          <SubDesBox>
            <CategoryWrapper>
              <div id="city">{productData.city}</div>
              <div id="subcategory">{productData.subcategory}</div>
            </CategoryWrapper>
            <MoreButton size="1.1rem" />
          </SubDesBox>
          <ProductNameBox id="productName">
            <b>{productData.name}</b>
          </ProductNameBox>
        </TitleContainer>
        <TagsContainer>
          {productData.tags.map((tag) => (
            <BlueTag key={tag}>{tag}</BlueTag>
          ))}
        </TagsContainer>
        <IconContainer>
          <IconBox
            className="productRates"
            color="gold"
          >
            <StarFilled className="productRates" />
            <div className="productRates">{productData.rates}</div>
          </IconBox>
          <IconBox
            className="likeCount"
            color="red"
          >
            <FaHeart className="likeCount" />
            <div className="likeCount">{productData.likeCount}</div>
          </IconBox>
        </IconContainer>
      </DescriptionContainer>
    </PreviewContainer>
  )
}

PreviewContent.propTypes = {
  userId: PropTypes.number,
  productData: PropTypes.shape({
    id: PropTypes.number.isRequired,
    city: PropTypes.string.isRequired,
    subcategory: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    rates: PropTypes.number.isRequired,
    likeCount: PropTypes.number.isRequired,
  }).isRequired,
}

export default PreviewContent
