import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import useFeedStore from '../../stores/useFeedStore'
import Thumbnail from './components/Thumbnail/Thumbnail'
import BasicFilter from './components/BasicFilter/BasicFilter'
import AdditionalFilter from './components/AdditionalFilter/AdditionalFilter'
import SelectedField from './components/SelectedField/SelectedField'
import ProductDataStatusRenderer from '../../components/ProductList/ProductDataStatusRenderer'
import { FeedPageLayout, FeedPageContent, FeedArea } from './FeedPage.style'

function FeedPage() {
  const resetSelectedField = useFeedStore((state) => state.resetSelectedField)
  const location = useLocation()

  useEffect(() => {
    return resetSelectedField()
  }, [])

  console.log(location.state)

  return (
    <FeedPageLayout>
      <Thumbnail />
      <FeedPageContent>
        <BasicFilter />
        <FeedArea>
          <AdditionalFilter />
          <SelectedField />
          <ProductDataStatusRenderer />
        </FeedArea>
      </FeedPageContent>
    </FeedPageLayout>
  )
}

export default FeedPage
