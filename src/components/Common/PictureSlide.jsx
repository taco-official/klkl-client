import { React, useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa6'

export default function PictureSlide({ images, $width, $height }) {
  const [index, changeIndex] = useState(0)

  useEffect(() => {
    const curImage = document.getElementsByClassName(`imgslide--content__img`)
    const dotList = document.getElementById('slide--dotlist')

    dotList.innerHTML = ''

    for (let i = 0; i < curImage.length; i += 1) {
      const dot = document.createElement('div')
      if (i === index) {
        curImage[i].style.opacity = 0.99
        dot.className = 'image--dot__curr'
        dotList.append(dot)
      } else {
        curImage[i].style.opacity = 0
        dotList.append(dot)
      }
    }
  }, [index])

  return (
    <PictureSlideWrapper
      $width={$width}
      $height={$height}
    >
      <ChangeButton
        onClick={() => {
          changeIndex(index - 1 < 0 ? index : index - 1)
        }}
        $left
      >
        <FaChevronLeft style={{ width: '100%', height: '100%' }} />
      </ChangeButton>
      {images.map((url) => {
        return <SlideImageContent src={url} />
      })}
      <ChangeButton
        onClick={() => {
          changeIndex(index + 1 >= images.length ? index : index + 1)
        }}
      >
        <FaChevronRight style={{ width: '100%', height: '100%' }} />
      </ChangeButton>
      <DotList />
    </PictureSlideWrapper>
  )
}
PictureSlide.propTypes = {
  images: PropTypes.shape([]).isRequired,
  $width: PropTypes.string.isRequired,
  $height: PropTypes.string.isRequired,
}

const PictureSlideWrapper = styled.div`
  height: ${(props) => props.$height};
  width: ${(props) => props.$width};
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  &:hover {
    div {
      opacity: 1;
      transition: all ease-in-out 0.5s;
    }
  }
`

const SlideImageContent = styled.img.attrs({
  alt: '',
  className: 'imgslide--content__img',
})`
  width: 100%;
  opacity: 0%;

  position: absolute;
  left: 0px;

  transition: linear 0.3s;
`

const ChangeButton = styled.div`
  width: 3%;
  aspect-ratio: 1 / 1;
  opacity: 0;
  border-radius: 50%;

  padding: 8px;

  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  z-index: 5;
  user-select: none;

  color: white;
  background-color: rgba(255, 255, 255, 0.15);
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);

  cursor: pointer;

  ${(props) => (props.$left ? `left: 5px` : `right: 5px`)};
`

const DotList = styled.div.attrs({
  id: 'slide--dotlist',
})`
  display: flex;
  justify-content: center;

  position: absolute;
  bottom: 10px;

  opacity: 0;

  div {
    z-index: 6;

    height: 8px;
    aspect-ratio: 1 / 1;

    border-radius: 50%;
    margin-left: 3px;
    background-color: lightgrey;
    box-shadow: 1px 1px 1px grey;
  }

  div.image--dot__curr {
    background-color: white;
  }
`
