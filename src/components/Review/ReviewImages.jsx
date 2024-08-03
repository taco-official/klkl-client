import React from 'react'
import PropTypes from 'prop-types'
import { Image } from 'antd'
import styled from 'styled-components'
import StyledFlickity from '../Common/Carousel'

export default function ReviewImages({ imageURLs }) {
  const flickityOptions = {
    setGallerySize: false,
    pauseAutoPlayOnHover: true,
  }

  return (
    <ReviewImageCarousel options={flickityOptions}>
      {imageURLs.map((url) => (
        <div
          className="carousel-cell"
          key={url}
        >
          <Image
            src={url}
            width="100%"
            height="100%"
            style={{
              borderRadius: '10px',
              objectFit: 'cover	',
              objectPosition: 'center',
            }}
            preview={{
              destroyOnClose: true,
              toolbarRender: () => null,
            }}
          />
        </div>
      ))}
    </ReviewImageCarousel>
  )
}
ReviewImages.propTypes = {
  imageURLs: PropTypes.arrayOf(PropTypes.string).isRequired,
}

const ReviewImageCarousel = styled(StyledFlickity)`
  height: 420px;
  margin-bottom: 20px;
  min-width: 500px;

  .carousel-cell {
    width: 60%;
    max-width: 400px;
    height: 400px;
    margin: 0 25px;
  }

  .flickity-button {
    background-color: rgba(255, 255, 255, 0.5);
  }

  .flickity-page-dots {
    .dot {
      border: none;
      background-color: lightgrey;
    }
  }
`
