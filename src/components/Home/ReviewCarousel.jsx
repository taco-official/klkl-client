import { React } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import StyledFlickity from '../Common/Carousel'
import PreviewContent from '../preview/PreviewContent'

export default function ReviewCarousels({ contents, options }) {
  return (
    <ReviewCarousel options={options}>
      {contents.map((info) => {
        return (
          <div className="carousel-cell">
            <PreviewContent
              key={info.name}
              userId={info.id}
              productId={info.id}
              city={info.city}
              subcategory={info.subcategory}
              name={info.name}
              tags={info.tags}
              likeCount={info.likeCount}
              style={{ transform: 'scale(1.5, 1.5)' }}
            />
          </div>
        )
      })}
    </ReviewCarousel>
  )
}
ReviewCarousels.propTypes = {
  contents: PropTypes.arrayOf(PropTypes.string).isRequired,
  options: PropTypes.objectOf().isRequired,
}

const ReviewCarousel = styled(StyledFlickity)`
  width: 100%;
  height: 350px;
  cursor: default;
  margin: 20px 0;

  .carousel-cell {
    width: 250px;
    height: 100%;
    margin: 0 10px;
    cursor: pointer;
  }

  .flickity-button {
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
    opacity: 0.99;
  }
`
