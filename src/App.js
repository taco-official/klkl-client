import React from 'react'
import PreviewContent from './components/preview/PreviewContent'
import SelectionField from './components/icons/SelectionField'
import TabletButton from './components/icons/TabletButton'

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
    <div>
      <h1>React Components</h1>
      <PreviewContent
        userId={userId}
        productId={product.id}
        city={product.city}
        subcategory={product.subcategory}
        name={product.name}
        tags={product.tags}
        likeCount={product.likeCount}
      />
      <SelectionField text="서울" />
      <TabletButton
        text="서울"
        size="0.8rem"
        ChildComponent={SelectionField}
      />
    </div>
  )
}

export default App
