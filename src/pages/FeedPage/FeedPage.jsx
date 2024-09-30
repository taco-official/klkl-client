import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { navIndex } from '../../constants/navIndex'
import useFeedStore from '../../stores/useFeedStore'
import { useCurrentPageStore } from '../../stores/navbarStores'
import useInitializeState from '../../hooks/useInitializeState'
import Thumbnail from './components/Thumbnail/Thumbnail'
import BasicFilter from './components/BasicFilter/BasicFilter'
import AdditionalFilter from './components/AdditionalFilter/AdditionalFilter'
import SelectedField from './components/SelectedField/SelectedField'
import ProductDataRenderer from './components/ProductDataRenderer'
import { FeedPageLayout, FeedPageContent, FeedArea } from './FeedPage.style'

function FeedPage() {
  useInitializeState()

  const location = useLocation()
  const { currentPage, setCurrentPage } = useCurrentPageStore()
  const { resetSelectedField } = useFeedStore((state) => ({
    resetSelectedField: state.resetSelectedField,
  }))

  useEffect(() => {
    if (currentPage !== navIndex.FEED) setCurrentPage(navIndex.FEED)
    return () => setCurrentPage(navIndex.NONE)
  }, [])

  useEffect(() => {
    const deleteDataState = (state) => {
      if (!state?.usr) return state
      const newState = { ...state, usr: { ...state.usr } }
      if ('data' in newState.usr) delete newState.usr.data
      return newState
    }
    const { history } = window
    if (history.state) {
      const newState = deleteDataState(history.state)
      if (newState) history.replaceState(newState, '')
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
          <ProductDataRenderer />
        </FeedArea>
      </FeedPageContent>
    </FeedPageLayout>
  )
}

export default FeedPage
