import { React } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import StyledFlickity from '@components/Carousel/Carousel'
import PreviewContent from '@components/PreviewContent/PreviewContent'

const flickityOptions = {
  wrapAround: false,
  setGallerySize: false,
  groupCells: 4,
  pageDots: false,
  resize: true,
  contain: true,
  cellAlign: 'left',
}

export default function ReviewCarousels({ contents, userData }) {
  return (
    <ReviewCarousel options={flickityOptions}>
      {contents.map((content) => {
        return (
          <ReviewWrapper
            className="carousel-cell"
            key={content.id}
          >
            <PreviewContent
              userData={userData}
              productData={content}
            />
          </ReviewWrapper>
        )
      })}
    </ReviewCarousel>
  )
}
ReviewCarousels.propTypes = {
  contents: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      likeCount: PropTypes.number,
      rating: PropTypes.number,
      categoryName: PropTypes.string,
      countryName: PropTypes.string,
      tags: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
          name: PropTypes.string,
        })
      ),
    })
  ).isRequired,
  userData: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    profileImageUrl: PropTypes.string,
  }),
}

const ReviewWrapper = styled.div`
  display: flex;
  justify-content: center;
`

const ReviewCarousel = styled(StyledFlickity)`
  width: 100%;
  height: 320px;
  cursor: default;
  margin: 20px 0;
  overflow: visible;

  .flickity-viewport {
    overflow: hidden;
  }

  .carousel-cell {
    width: 25%;
    height: 100%;
    cursor: pointer;
  }

  .flickity-button {
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
    opacity: 0.99;
  }

  .next {
    right: -2.5rem;
  }

  .previous {
    left: -2.5rem;
  }
`
