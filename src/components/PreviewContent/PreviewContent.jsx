import React from 'react'
import PropTypes from 'prop-types'
import { StarFilled } from '@ant-design/icons'
import { FaHeart } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

import LikeButton from '../Button/LikeButton'
import { BlueTag } from '../Tags/Tags.style'
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
    <Link
      to={`/products/${productData.id}`}
      state={{ from: window.location.pathname }}
    >
      <PreviewContainer>
        <ThumbnailContainer id="productThumbnail">
          <img
            id="previewContentImg"
            src={productData.thumbnail}
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
                <div>{`${productData.countryName} / ${productData.categoryName}`}</div>
              </CategoryWrapper>
            </SubDesBox>
            <ProductNameBox id="productName">{productData.name}</ProductNameBox>
          </TitleContainer>
          <TagsContainer>
            {productData.tags.map(
              (tag, index) =>
                index < 3 && <BlueTag key={tag.id}>{tag.name}</BlueTag>
            )}
          </TagsContainer>
          <IconContainer>
            <IconBox
              className="productRates"
              color="gold"
            >
              <StarFilled className="productRates" />
              <div className="productRates">{productData.rating}</div>
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
    </Link>
  )
}

PreviewContent.propTypes = {
  userId: PropTypes.number,
  productData: PropTypes.shape({
    id: PropTypes.number.isRequired,
    thumbnail: PropTypes.string,
    countryName: PropTypes.string.isRequired,
    categoryName: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
      })
    ),
    rating: PropTypes.number.isRequired,
    likeCount: PropTypes.number.isRequired,
  }).isRequired,
}

export default PreviewContent
