import React from 'react'
import { BasicFilterProvider } from '../../contexts/BasicFilterContext'
import { AdditionalFilterProvider } from '../../contexts/AdditionalFilterContext'
// import NavBar from '../components/Navbar/NavBar'
import Thumbnail from './components/Thumbnail/Thumbnail'
import BasicFilter from './components/BasicFilter/BasicFilter'
import AdditionalFilter from './components/AdditionalFilter/AdditionalFilter'
import SelectedField from './components/SelectedField/SelectedField'
import ProductList from './components/ProductList/ProductList'
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
