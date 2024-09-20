import React, { useEffect } from 'react'
import useFeedStore from '../../stores/useFeedStore'
import useInitializeState from '../../hooks/useInitializeState'
import useProductData from '../../hooks/useProductData'
import Thumbnail from './components/Thumbnail/Thumbnail'
import BasicFilter from './components/BasicFilter/BasicFilter'
import AdditionalFilter from './components/AdditionalFilter/AdditionalFilter'
import SelectedField from './components/SelectedField/SelectedField'
import ProductDataStatusRenderer from '../../components/ProductList/ProductDataStatusRenderer'
import { FeedPageLayout, FeedPageContent, FeedArea } from './FeedPage.style'

function FeedPage() {
  const { isLoading, data, pageData, setPageData, error } = useProductData()
  const { resetSelectedField } = useFeedStore((state) => ({
    resetSelectedField: state.resetSelectedField,
  }))

  useInitializeState()
  useEffect(() => {
    return resetSelectedField
  }, [])

  return (
    <FeedPageLayout>
      <Thumbnail />
      <FeedPageContent>
        <BasicFilter />
        <FeedArea>
          <AdditionalFilter />
          <SelectedField />
          <ProductDataStatusRenderer
            isLoading={isLoading}
            data={data}
            pageData={pageData}
            setPageData={setPageData}
            error={error}
          />
        </FeedArea>
      </FeedPageContent>
    </FeedPageLayout>
  )
}

export default FeedPage
