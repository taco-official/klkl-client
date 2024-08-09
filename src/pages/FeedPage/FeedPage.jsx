import React from 'react'
import { BasicFilterProvider } from '../../contexts/BasicFilterContext'
import { AdditionalFilterProvider } from '../../contexts/AdditionalFilterContext'
// import NavBar from '../components/Navbar/NavBar'
import Thumbnail from './Thumbnail/Thumbnail'
import BasicFilter from './BasicFilter/BasicFilter'
import AdditionalFilter from './AdditionalFilter/AdditionalFilter'
import SelectedField from './SelectedField/SelectedField'
import ProductList from './ProductList/ProductList'
// import Footer from '../../components/Footer/Footer'
import { PageRoot, PageContent, FeedArea } from './FeedPage.style'

function FeedPage() {
  return (
    <PageRoot>
      <Thumbnail />
      <BasicFilterProvider>
        <PageContent>
          <BasicFilter />
          <AdditionalFilterProvider>
            <FeedArea>
              <AdditionalFilter />
              <SelectedField />
              <ProductList />
            </FeedArea>
          </AdditionalFilterProvider>
        </PageContent>
      </BasicFilterProvider>
    </PageRoot>
  )
}

export default FeedPage
