import Flickity from 'react-flickity-component'
import styled from 'styled-components'

const StyledFlickity = styled(Flickity)`
  width: 80%;
  height: 18.75rem;
  min-width: 68.75rem;

  margin: 60px auto;

  border: none;
  outline: none;
  position: relative;
  overflow: hidden;

  cursor: pointer;
  transition: opacity linear 1s;

  &:hover {
    .flickity-button {
      opacity: 0.99;
    }
  }

  .carousel-cell {
    width: 100%;
    height: 280px;
    border-radius: 5px;
    border-radius: 8px;
    object-fit: cover;
  }

  .flickity-page-dots {
    bottom: 5px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);

    display: flex;
    align-items: center;
    justify-content: center;

    .dot {
      border-radius: 50%;
      width: 6px;
      height: 6px;
      opacity: 1;
      background: lightgray;
      border: 1.5px solid white;
      margin-left: 2px;
    }

    .dot.is-selected {
      background: gray;
    }
  }

  .flickity-button {
    display: flex;
    justify-content: center;
    align-items: center;
    background: transparent;

    position: absolute;
    top: 50%;
    margin-top: -1.25rem;

    border: none;
    cursor: pointer;
    background-color: rgba(255, 255, 255, 0.3);
    border-radius: 50%;

    .flickity-button-icon {
      fill: rgba(0, 0, 0, 0.4);
      width: 80%;
      height: 80%;
    }

    opacity: 0;
    transition: ease-in-out 0.3s;

    &:hover {
      background-color: rgba(255, 255, 255, 0.8);
    }
  }

  .flickity-prev-next-button {
    width: 35px;
    height: 35px;
  }

  .next {
    right: 0.625rem;
  }

  .previous {
    left: 0.625rem;
  }
`

export default StyledFlickity
