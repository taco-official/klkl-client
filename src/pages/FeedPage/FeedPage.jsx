import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import useFeedStore from '../../stores/useFeedStore'
import useInitializeState from '../../hooks/useInitializeState'
import useProductData from '../../hooks/useProductData'
import Thumbnail from './components/Thumbnail/Thumbnail'
import BasicFilter from './components/BasicFilter/BasicFilter'
import AdditionalFilter from './components/AdditionalFilter/AdditionalFilter'
import SelectedField from './components/SelectedField/SelectedField'
import ProductDataRenderer from '../../components/ProductList/ProductDataRenderer'
import { FeedPageLayout, FeedPageContent, FeedArea } from './FeedPage.style'

function FeedPage() {
  useInitializeState()
  const { isLoading, data, isError, setPageData } = useProductData()
  const location = useLocation()
  const { resetSelectedField } = useFeedStore((state) => ({
    resetSelectedField: state.resetSelectedField,
  }))

  useEffect(() => {
    const deleteDataState = (state) => {
      if (!state || !state.usr) return state
      const newState = { ...state, usr: { ...state.usr } }
      if ('data' in newState.usr) delete newState.usr.data
      return newState
    }
    const historyState = window.history.state
    if (historyState) {
      const newState = deleteDataState(historyState)
      if (newState) window.history.replaceState(newState, '')
    }
    return resetSelectedField
  }, [location.state])

  return (
    <FeedPageLayout>
      <Thumbnail />
      <FeedPageContent>
        <BasicFilter />
        <FeedArea>
          <AdditionalFilter />
          <SelectedField />
          <ProductDataRenderer
            isLoading={isLoading}
            data={data}
            isError={isError}
            setPageData={setPageData}
          />
        </FeedArea>
      </FeedPageContent>
    </FeedPageLayout>
  )
}

export default FeedPage
