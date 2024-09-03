import React, { useEffect } from 'react'
import useFeedStore from '../../stores/useFeedStore'
import Thumbnail from './components/Thumbnail/Thumbnail'
import BasicFilter from './components/BasicFilter/BasicFilter'
import AdditionalFilter from './components/AdditionalFilter/AdditionalFilter'
import SelectedField from './components/SelectedField/SelectedField'
import ProductDataFetcher from './components/ProductList/ProductDataFetcher'
import ProductDataStatusRenderer from './components/ProductList/ProductDataStatusRenderer'
import { FeedPageLayout, FeedPageContent, FeedArea } from './FeedPage.style'

function FeedPage() {
  const resetSelectedField = useFeedStore((state) => state.resetSelectedField)
  useEffect(() => {
    return resetSelectedField()
  }, [])

  return (
    <FeedPageLayout>
      <Thumbnail />
      <FeedPageContent>
        <BasicFilter />
        <FeedArea>
          <AdditionalFilter />
          <SelectedField />
          <ProductDataFetcher>
            {({ isLoading, data, pageData, setPageData, isError }) => (
              <ProductDataStatusRenderer
                isLoading={isLoading}
                data={data}
                pageData={pageData}
                setPageData={setPageData}
                isError={isError}
              />
            )}
          </ProductDataFetcher>
        </FeedArea>
      </FeedPageContent>
    </FeedPageLayout>
  )
}

export default FeedPage
