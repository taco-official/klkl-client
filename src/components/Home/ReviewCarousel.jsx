import { React } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import StyledFlickity from '../Common/Carousel'
import PreviewContent from '../preview/PreviewContent'

const flickityOptions = {
  wrapAround: false,
  setGallerySize: false,
  groupCells: 4,
  pageDots: false,
}

function ReviewCarousels({ contents }) {
  return (
    <ReviewCarousel options={flickityOptions}>
      {contents.map((info) => {
        return (
          <PreviewContent
            className="carousel-cell"
            key={info.name}
            userId={info.id}
            productId={info.id}
            city={info.city}
            subcategory={info.subcategory}
            name={info.name}
            tags={info.tags}
            likeCount={info.likeCount}
          />
        )
      })}
    </ReviewCarousel>
  )
}
ReviewCarousels.propTypes = {
  contents: PropTypes.arrayOf(PropTypes.string).isRequired,
}

const flickityOptions2 = {
  wrapAround: false,
  setGallerySize: false,
  pageDots: false,
}

function ReviewCarousels2({ contents }) {
  return (
    <ReviewCarousel options={flickityOptions2}>
      {contents.map((info) => {
        return (
          <PreviewContent
            className="carousel-cell"
            key={info.name}
            userId={info.id}
            productId={info.id}
            city={info.city}
            subcategory={info.subcategory}
            name={info.name}
            tags={info.tags}
            likeCount={info.likeCount}
          />
        )
      })}
    </ReviewCarousel>
  )
}
ReviewCarousels2.propTypes = {
  contents: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export { ReviewCarousels, ReviewCarousels2 }

const ReviewCarousel = styled(StyledFlickity)`
  width: 100%;
  height: 350px;
  cursor: default;
  margin: 20px 0;

  .carousel-cell {
    width: 100%;
    height: 100%;
    border-radius: 5px;
    border-radius: 8px;
    object-fit: cover;
    cursor: pointer;
  }

  .flickity-button {
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
    opacity: 0.99;
  }
`
