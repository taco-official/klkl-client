import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Flickity from 'flickity'
import theme from '@styles/theme'
import StyledFlickity from '@components/Carousel/Carousel'

const flickityOptions = {
  wrapAround: true,
  setGallerySize: false,
  autoPlay: 3500,
  pauseAutoPlayOnHover: true,
  selectedAttraction: 0.02,
  prevNextButtons: false,
}

export default function MainBanner({ urls }) {
  const [curIndex, setCurIndex] = useState(0)

  useEffect(() => {
    const flicktyContainer = new Flickity('.main-banner', flickityOptions)

    flicktyContainer.on('change', setCurIndex)

    return () => {
      flicktyContainer.off('change', setCurIndex)
    }
  }, [])

  return (
    <BannerContainer>
      <StyledFlickity
        options={flickityOptions}
        className="main-banner"
      >
        {urls.map((country) => {
          return (
            <StyledContainer
              $url={country.image}
              key={country.name}
              className="carousel-cell"
            />
          )
        })}
      </StyledFlickity>
      <span
        key={urls[curIndex].name}
        className="banner--word__country"
      >{`${urls[curIndex].name}`}</span>
      <span className="banner--word__other">기념품을 만나보세요</span>
    </BannerContainer>
  )
}

MainBanner.propTypes = {
  urls: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
}

const BannerContainer = styled.div`
  width: 100%;
  height: 60vh;
  min-width: 900px;
  position: relative;
  overflow: hidden;

  & > span {
    font-family: ${theme.style.bannerEN}, ${theme.style.bannerKO};
    font-weight: 500;
    pointer-events: none;
    color: white;
    position: absolute;
  }

  .banner--word__country {
    top: 10%;
    left: 3%;
    font-size: 3.75rem;

    @keyframes word {
      0% {
        opacity: 0;
        transform: translateY(-50%);
      }
      100% {
        opacity: 1;
        transform: translateY(0%);
      }
    }

    animation: word ease-in-out 0.7s;
  }

  .banner--word__other {
    top: 31%;
    left: 5%;
    font-size: 2.1875rem;
  }

  .carousel-cell {
    border-radius: 0;
    margin: 0 5px;
    height: 100%;
  }
`

const StyledContainer = styled.div`
  background-image: ${({ $url }) => `url(${$url})`};
  background-color: rgba(0, 0, 0, 0.3);
  background-blend-mode: multiply;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 100%;
  transition: background-size ease-in-out 1.5s;

  &:hover {
    background-size: 105%;
  }
`
