import React from 'react'
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
      <PageContent>
        <BasicFilter />
        <FeedArea>
          <AdditionalFilter />
          <SelectedField />
          <ProductList />
        </FeedArea>
      </PageContent>
    </PageRoot>
  )
}

export default FeedPage
