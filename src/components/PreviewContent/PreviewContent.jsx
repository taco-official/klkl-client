import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { FaHeart } from 'react-icons/fa6'
import { StarFilled } from '@ant-design/icons'
import PreviewLikeButton from '../Button/PreviewLikeButton'
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

function PreviewContent({ userData, productData }) {
  return (
    <PreviewContainer>
      <ThumbnailContainer id="productThumbnail">
        <Link
          to={`/products/${productData.id}`}
          state={{ from: window.location.pathname }}
        >
          <img src={productData.image?.url} />
        </Link>
        <PreviewLikeButton
          userData={userData}
          productId={productData.id}
          likeContent={productData.isLiked}
          iconSize="1.2rem"
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
  userData: PropTypes.shape({}),
  productData: PropTypes.shape({
    id: PropTypes.number.isRequired,
    image: PropTypes.shape({
      url: PropTypes.string,
    }),
    isLiked: PropTypes.bool.isRequired,
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
