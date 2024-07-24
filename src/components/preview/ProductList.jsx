import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
// import axios from 'axios'
import PreviewContent from './PreviewContent'
import LoadingContent from './LoadingContent'

const StyledList = styled.div`
  display: inline-grid;
  grid-template-columns: repeat(3, minmax(auto, 13rem));
`

/* productList 더미 데이터 */
const user = {
  id: 54329,
}

const dummyProductList = [
  {
    id: 24456,
    name: 'Real Sayoon',
    city: 'Seoul',
    subcategory: 'Portrait',
    tags: ['귤락', '10기', '레노버', '42Guest'],
    likeCount: 100,
  },
  {
    id: 24457,
    name: 'Oyabung',
    city: 'Olympic',
    subcategory: 'Ohhamma',
    tags: ['오야붕', '함대장', '망치'],
    likeCount: 101,
  },
  {
    id: 24458,
    name: 'Yeongo',
    city: 'Naksungdae',
    subcategory: 'Fxck-end',
    tags: ['100m', '패럴림픽'],
    likeCount: 101,
  },
]

function ProductList() {
  const [productList, setProductList] = useState([])
  const [loading, setLoading] = useState(true)
  // const [error, setError] = useState(null)

  // useEffect(() => {
  // async function getProductList() {
  // try {
  // const response = await axios.get('ProductList API')
  // setProductList(response.data)
  // setLoading(false)
  // } catch (e) {
  // 에러 처리
  // setError(e)
  // setLoading(false)
  // }
  // }
  // }, [])
  // if (error) return <div>Error: {error.message}</div>

  /* 더미데이터 테스트 코드 */
  useEffect(() => {
    function getProductList() {
      setTimeout(() => {
        setProductList(dummyProductList)
        setLoading(false)
      }, 3000)
    }
    getProductList()
  }, [])

  return (
    <StyledList>
      {loading ? (
        <LoadingContent />
      ) : (
        productList.map((content) => (
          <PreviewContent
            key={content.name}
            userId={user.id}
            productId={content.id}
            city={content.city}
            subcategory={content.subcategory}
            name={content.name}
            tags={content.tags}
            likeCount={content.likeCount}
          />
        ))
      )}
      <LoadingContent />
    </StyledList>
  )
}

export default ProductList
