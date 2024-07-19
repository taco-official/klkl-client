import { React, useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

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
        ◀
      </ChangeButton>
      {images.map((url) => {
        return <SlideImageContent src={url} />
      })}
      <ChangeButton
        onClick={() => {
          changeIndex(index + 1 >= images.length ? index : index + 1)
        }}
      >
        ▶
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
`

const SlideImageContent = styled.img.attrs({
  alt: '',
  className: 'imgslide--content__img',
})`
  height: 100%;
  width: 100%;
  opacity: 0%;

  position: absolute;
  left: 0px;

  transition: linear 0.3s;
`

const ChangeButton = styled.div`
  width: 20px;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  z-index: 5;

  user-select: none;

  cursor: pointer;

  ${(props) => (props.$left ? `left: 0px` : `right: 0px`)};

  opacity: 0;

  &:hover {
    opacity: 0.5;
    transition: 0.5s;
  }
`

const DotList = styled.div.attrs({
  id: 'slide--dotlist',
})`
  display: flex;
  justify-content: center;

  position: absolute;
  bottom: 10px;

  opacity: 30%;

  div {
    z-index: 6;
    width: 7px;
    height: 7px;
    border: 1.5px solid black;
    border-radius: 50%;
    margin-left: 3px;
  }

  div.image--dot__curr {
    background-color: black;
  }
`
