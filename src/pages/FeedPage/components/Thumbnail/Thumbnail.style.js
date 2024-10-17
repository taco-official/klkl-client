import styled from 'styled-components'
import defaultWallpaper from '@constants/defaultWallpaper'

const ThumbnailArea = styled.div`
  width: 100%;
  height: 50vh;
  background: 50% 4% / cover
    ${(props) => `url(${props.$url})` || defaultWallpaper};
  display: flex;
  justify-content: center;
  position: relative;
  > div {
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    row-gap: 1rem;
    position: absolute;
    transform: translate(-50%, -50%);
    top: 60%;
    left: 50%;
    z-index: 1;
    text-align: center;
    mix-blend-mode: screen;
    > div.title {
      font-size: 3rem;
      font-weight: bold;
    }
    > div.description {
      font-size: 1.3rem;
    }
  }
`

export default ThumbnailArea
