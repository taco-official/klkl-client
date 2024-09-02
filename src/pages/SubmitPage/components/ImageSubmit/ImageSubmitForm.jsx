import React, { useRef } from 'react'
import styled from 'styled-components'
import { Image } from 'antd'

import Icon from '../../../../components/Icons/Icons'
import theme from '../../../../styles/theme'
import useFormStore from '../../../../stores/useFormStore'

const MAX_COUNT = 3

function ImageSubmitForm() {
  const images = useFormStore((state) => state.images)
  const setFormContents = useFormStore((state) => state.setFormContents)
  const inputRef = useRef()

  const changeProfileImage = (e) => {
    const { files } = e.target
    if (files.length === 0) return

    const length =
      files.length + images.length > MAX_COUNT
        ? MAX_COUNT - images.length
        : files.length

    const newFiles = []
    for (let i = 0; i < length; i++) newFiles.push(files[i])

    setFormContents({ images: [...images, ...newFiles] })
  }

  const removeImage = (image) => {
    const newArray = images.filter((current) => {
      if (current === image) return false
      return true
    })
    setFormContents({ images: [...newArray] })
  }

  return (
    <>
      {console.log(images)}
      <h2>사진을 선택해 주세요</h2>
      <ImageListBox>
        {images.map((image) => (
          <div
            style={{ position: 'relative' }}
            key={image.name}
          >
            <CloseButton onClick={() => removeImage(image)}>
              <Icon $size="1.5em">close</Icon>
            </CloseButton>
            <StyledImage src={URL.createObjectURL(image)} />
          </div>
        ))}
        {images.length !== 3 && (
          <SubmitButton onClick={() => inputRef.current.click()}>
            <Icon $size="2.5em">add</Icon>
          </SubmitButton>
        )}
      </ImageListBox>
      <input
        type="file"
        accept="image/png, image/jpeg, image/webp"
        multiple
        ref={inputRef}
        onChange={changeProfileImage}
        style={{ display: 'none' }}
      />
    </>
  )
}

const ImageListBox = styled.div`
  display: flex;
  column-gap: 0.625rem;
  flex-wrap: wrap;
  margin-bottom: 2.5rem;
`

const StyledImage = styled(Image).attrs({
  className: 'submit--image',
  width: '10.9375rem',
  height: '10.9375rem',
  placeholder: true,
  preview: { destroyOnClose: true, toolbarRender: () => null },
})`
  border-radius: 0.5rem;
  object-fit: cover;

  @keyframes slide {
    0% {
      transform: translateX(-5%);
    }
    100% {
      transform: translateX(0);
    }
  }
  animation: slide 0.3s;
`

const CloseButton = styled.button.attrs({ type: 'button' })`
  position: absolute;
  top: 3px;
  right: 3px;
  z-index: 10;

  background: none;
  border: none;
  color: white;

  border-radius: 50%;
  width: 20px;
  height: 20px;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: all ease-in-out 0.2s;

  &:hover {
    color: rgba(255, 0, 0, 0.9);
  }
`

const SubmitButton = styled.button.attrs({ type: 'button' })`
  width: 10.9375rem;
  height: 10.9375rem;
  background-color: rgba(0, 0, 0, 0.05);
  border: 1px solid ${theme.color.lineGrey};
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all ease-in-out 0.1s;

  &:hover {
    border: 1px solid ${theme.color.main};
  }

  &:active {
    border: 1px solid ${theme.color.mainDark};
    background-color: rgba(0, 0, 0, 0.1);
  }

  span {
    color: rgba(0, 0, 0, 0.3);
  }
`

export default ImageSubmitForm
