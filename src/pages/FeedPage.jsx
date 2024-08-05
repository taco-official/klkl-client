import React from 'react'
// import NavBar from '../components/Navbar/NavBar'
import BasicFilter from '../components/BasicFilter/BasicFilter'
import AdditionalFilter from '../components/AdditionalFilter/AdditionalFilter'
import ProductList from '../components/preview/ProductList'
import { PageMain, FeedSection } from './FeedPage.style'

function FeedPage() {
  return (
    <PageMain>
      <BasicFilter />
      <FeedSection>
        <AdditionalFilter />
        <ProductList />
      </FeedSection>
    </PageMain>
  )
}

export default FeedPage
