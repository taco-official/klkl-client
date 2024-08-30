import React from 'react'
import Thumbnail from './components/Thumbnail/Thumbnail'
import BasicFilter from './components/BasicFilter/BasicFilter'
import AdditionalFilter from './components/AdditionalFilter/AdditionalFilter'
import SelectedField from './components/SelectedField/SelectedField'
import ProductDataFetcher from './components/ProductList/ProductDataFetcher'
import LoadingContent from '../../components/PreviewContent/LoadingContent'
import ProductList from './components/ProductList/ProductList'
import { FeedPageLayout, FeedPageContent, FeedArea } from './FeedPage.style'
import StyledList from './components/ProductList/ProductList.style'

function FeedPage() {
  return (
    <FeedPageLayout>
      <Thumbnail />
      <FeedPageContent>
        <BasicFilter />
        <FeedArea>
          <AdditionalFilter />
          <SelectedField />
          <ProductDataFetcher>
            {({ isLoading, productDataList, isError }) => {
              if (isLoading)
                return (
                  <StyledList>
                    <LoadingContent />
                  </StyledList>
                )
              if (isError)
                return (
                  <StyledList className="empty">
                    로딩에 실패했습니다.
                  </StyledList>
                )
              return <ProductList dataList={productDataList} />
            }}
          </ProductDataFetcher>
        </FeedArea>
      </FeedPageContent>
    </FeedPageLayout>
  )
}

export default FeedPage
