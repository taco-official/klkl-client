import styled from 'styled-components'

const ThumbnailArea = styled.div`
  width: 100%;
  height: 45vh;
  position: relative;
  overflow: hidden;
  > img {
    width: 100%;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -4%);
  }
  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: absolute;
    top: 60%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
    color: white;
    > div.title {
      text-align: center;
      font-size: 3rem;
      font-weight: bold;
    }
    > div.description {
      margin: 1rem;
      text-align: center;
      font-size: 1.3rem;
    }
  }
`

export default ThumbnailArea
