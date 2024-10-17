import React from 'react'
import useInitializeState from '@hooks/useInitializeState'
import useNavIndex from '@hooks/useNavIndex'
import useInitializeLocationState from '@hooks/useInitializeLocationState'
import Thumbnail from './components/Thumbnail/Thumbnail'
import BasicFilter from './components/BasicFilter/BasicFilter'
import AdditionalFilter from './components/AdditionalFilter/AdditionalFilter'
import SelectedField from './components/SelectedField/SelectedField'
import ProductDataRenderer from './components/ProductDataRenderer'
import { FeedPageLayout, FeedPageContent, FeedArea } from './FeedPage.style'

function FeedPage() {
  useInitializeState()
  useNavIndex('FEED')
  useInitializeLocationState()

  return (
    <FeedPageLayout>
      <Thumbnail />
      <FeedPageContent>
        <BasicFilter />
        <FeedArea>
          <AdditionalFilter />
          <SelectedField />
          <ProductDataRenderer />
        </FeedArea>
      </FeedPageContent>
    </FeedPageLayout>
  )
}

export default FeedPage
