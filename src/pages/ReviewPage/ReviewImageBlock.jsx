import React from 'react'
import PropTypes from 'prop-types'
import { Image } from 'antd'
import styled from 'styled-components'
import StyledFlickity from '../../components/Carousel/Carousel'

const reviewImagesOptions = {
  setGallerySize: false,
  pauseAutoPlayOnHover: true,
  draggable: false,
}

export default function ReviewImageBlock({ images }) {
  return (
    <section>
      <ReviewImageCarousel options={reviewImagesOptions}>
        {images.map((image) => (
          <div
            className="carousel-cell"
            key={image}
          >
            <Image
              src={image.url}
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
    </section>
  )
}
ReviewImageBlock.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string,
    })
  ).isRequired,
}

const ReviewImageCarousel = styled(StyledFlickity)`
  width: 100%;
  height: 25rem;
  margin: 30px 0;

  .carousel-cell {
    width: 100%;
    height: 100%;
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
