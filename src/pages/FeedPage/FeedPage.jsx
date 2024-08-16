import React from 'react'
import { ConfigProvider } from 'antd'
// import NavBar from '../components/Navbar/NavBar'
import Thumbnail from './Thumbnail/Thumbnail'
import BasicFilter from './BasicFilter/BasicFilter'
import AdditionalFilter from './AdditionalFilter/AdditionalFilter'
import SelectedField from './SelectedField/SelectedField'
import ProductList from './ProductList/ProductList'
// import Footer from '../../components/Footer/Footer'
import {
  antdTheme,
  PageContainer,
  PageContent,
  FeedArea,
} from './FeedPage.style'

function FeedPage() {
  return (
    <PageContainer>
      <Thumbnail />
      <ConfigProvider theme={antdTheme}>
        <PageContent>
          <BasicFilter />
          <FeedArea>
            <AdditionalFilter />
            <SelectedField />
            <ProductList />
          </FeedArea>
        </PageContent>
      </ConfigProvider>
    </PageContainer>
  )
}

export default FeedPage
