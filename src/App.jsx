import React from 'react'
import GlobalStyle from './style/GlobalStyle'
import PreviewContent from './components/preview/PreviewContent'

const userId = 54329
const product = {
  id: 24456,
  name: 'Real Sayoon',
  city: 'Seoul',
  subcategory: 'Portrait',
  tags: ['귤락', '10기', '레노버', '42Guest'],
  likeCount: 100,
}

function App() {
  return (
    <>
      <GlobalStyle />
      <PreviewContent
        userId={userId}
        productId={product.id}
        city={product.city}
        subcategory={product.subcategory}
        name={product.name}
        tags={product.tags}
        likeCount={product.likeCount}
      />
    </>
  )
}

export default App
