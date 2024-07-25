import { React } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import StyledFlickity from '../Common/Carousel'

const flickityOptions = {
  wrapAround: true,
  setGallerySize: false,
  autoPlay: true,
  pauseAutoPlayOnHover: false,
}

export default function Banner({ contents }) {
  return (
    <StyledFlickity options={flickityOptions}>
      <StyledDiv />
      {contents.map((url) => {
        return (
          <img
            src={url}
            className="carousel-cell"
          />
        )
      })}
    </StyledFlickity>
  )
}
Banner.propTypes = {
  contents: PropTypes.arrayOf(PropTypes.string).isRequired,
}

const StyledDiv = styled.div`
  width: 100%;
  height: 280px;
  background-image: url(https://i.namu.wiki/i/LcxB7HDlW9ZEnKnl4CtQsEgLQ2cFksTsj7H63mV08Q2_d7OQv_XhgszPweyU2AF9wLr0spaQ1zKxv03um9P8M3hg5Lm-6g1BxNEs-xfcU3o74jX1PXybLOWp2gO9c3XdIYxI6v04dxBjSg_DjA0ZkA.svg);
  background-repeat: no-repeat;
  background-position: center;
`
