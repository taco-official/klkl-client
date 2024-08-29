import React from 'react'
// import NavBar from '../components/Navbar/NavBar'
import Thumbnail from './components/Thumbnail/Thumbnail'
import BasicFilter from './components/BasicFilter/BasicFilter'
import AdditionalFilter from './components/AdditionalFilter/AdditionalFilter'
import SelectedField from './components/SelectedField/SelectedField'
import ProductDataFetcher from './components/ProductList/ProductDataFetcher'
import ProductList from './components/ProductList/ProductList'
// import Footer from '../../components/Footer/Footer'
import { FeedPageLayout, FeedPageContent, FeedArea } from './FeedPage.style'

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
            {({ productDataList, loading, error }) => (
              <ProductList
                productDataList={productDataList}
                loading={loading}
                error={error}
              />
            )}
          </ProductDataFetcher>
        </FeedArea>
      </FeedPageContent>
    </FeedPageLayout>
  )
}

export default FeedPage
