import React from 'react'
import { BasicFilterProvider } from '../contexts/BasicFilterContext'
import { AdditionalFilterProvider } from '../contexts/AdditionalFilterContext'
// import NavBar from '../components/Navbar/NavBar'
import BasicFilter from '../components/BasicFilter/BasicFilter'
import AdditionalFilter from '../components/AdditionalFilter/AdditionalFilter'
import SelectedField from '../components/SelectedField/SelectedField'
import ProductList from '../components/preview/ProductList'
import { PageMain, FeedSection } from './FeedPage.style'

function FeedPage() {
  return (
    <BasicFilterProvider>
      <PageMain>
        <BasicFilter />
        <AdditionalFilterProvider>
          <FeedSection>
            <AdditionalFilter />
            <SelectedField />
            <ProductList />
          </FeedSection>
        </AdditionalFilterProvider>
      </PageMain>
    </BasicFilterProvider>
  )
}

export default FeedPage
