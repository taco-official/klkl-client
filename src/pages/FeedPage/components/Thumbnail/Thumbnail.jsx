import React from 'react'
import useFeedStore from '@stores/useFeedStore'
import useKyQuery from '@hooks/useKyQuery'
import ThumbnailArea from './Thumbnail.style'

function Thumbnail() {
  const selectedCountryId = useFeedStore((state) => state.selectedCountry.id)
  const defaultWallpaper =
    'https://image.fmkorea.com/files/attach/new3/20231020/3655109/5782408085/6302086124/a35751389c84e91bfa145bce6f81e5ba.jpg'
  const { data: wallpaper } = useKyQuery(
    `countries/${selectedCountryId}`,
    ['countryWallpaper', selectedCountryId],
    {
      staleTime: 1000 * 60 * 60 * 24,
      gcTime: 1000 * 60 * 60 * 24,
      select: (data) => data.data.wallpaper,
      enabled: !!selectedCountryId,
    }
  )

  return (
    <ThumbnailArea $url={wallpaper || defaultWallpaper}>
      <div>
        <div className="title">기념품 둘러보기</div>
        <div className="description">기념품을 둘러보세요.</div>
      </div>
    </ThumbnailArea>
  )
}

export default Thumbnail
