import React from 'react'
import ThumbnailArea from './Thumbnail.style'

function Thumbnail() {
  return (
    <ThumbnailArea>
      <img
        src="https://image.fmkorea.com/files/attach/new3/20231020/3655109/5782408085/6302086124/a35751389c84e91bfa145bce6f81e5ba.jpg"
        alt="김유연 김나경, 세상에서 가장 얘쁜 애들"
      />
      <div>
        <div className="title">기념품 둘러보기</div>
        <div className="description">기념품을 둘러보세요.</div>
      </div>
    </ThumbnailArea>
  )
}

export default Thumbnail
