import React from 'react'
import { BasicFilterProvider } from '../../contexts/BasicFilterContext'
import { AdditionalFilterProvider } from '../../contexts/AdditionalFilterContext'
// import NavBar from '../components/Navbar/NavBar'
import BasicFilter from './BasicFilter/BasicFilter'
import AdditionalFilter from './AdditionalFilter/AdditionalFilter'
import SelectedField from './SelectedField/SelectedField'
import ProductList from './ProductList/ProductList'
import { PageMain, FeedArea } from './FeedPage.style'

function FeedPage() {
  return (
    <BasicFilterProvider>
      <PageMain>
        <BasicFilter />
        <AdditionalFilterProvider>
          <FeedArea>
            <AdditionalFilter />
            <SelectedField />
            <ProductList />
          </FeedArea>
        </AdditionalFilterProvider>
      </PageMain>
    </BasicFilterProvider>
  )
}

export default FeedPage
