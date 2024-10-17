import React from 'react'
import defaultWallpaper from '@constants/defaultWallpaper'
import useFeedStore from '@stores/useFeedStore'
import useKyQuery from '@hooks/useKyQuery'
import ThumbnailArea from './Thumbnail.style'

function Thumbnail() {
  const selectedCountryId = useFeedStore((state) => state.selectedCountry.id)
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
