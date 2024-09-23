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
  CategoryWrapper,
  ProductNameBox,
  TagsContainer,
  IconContainer,
  IconBox,
} from './PreviewContent.style'

function PreviewContent({ productData }) {
  return (
    <PreviewContainer>
      <ThumbnailContainer id="productThumbnail">
        <Link
          to={`/products/${productData.id}`}
          state={{ from: window.location.pathname }}
        >
          <img src={productData.image?.url} />
        </Link>
        <LikeButton
          productId={productData.id}
          iconSize="1.3rem"
        />
      </ThumbnailContainer>
      <Link
        to={`/products/${productData.id}`}
        state={{ from: window.location.pathname }}
      >
        <DescriptionContainer>
          <CategoryWrapper>
            {`${productData.countryName} ∙ ${productData.categoryName}`}
          </CategoryWrapper>
          <ProductNameBox id="productName">{productData.name}</ProductNameBox>
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
      </Link>
    </PreviewContainer>
  )
}

PreviewContent.propTypes = {
  productData: PropTypes.shape({
    id: PropTypes.number.isRequired,
    image: PropTypes.shape({
      url: PropTypes.string,
    }),
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
