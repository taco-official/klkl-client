import React, { useEffect, useState } from 'react'
// import axios from 'axios'
import PreviewContent from '../../../components/preview/PreviewContent'
import LoadingContent from '../../../components/preview/LoadingContent'
import StyledList from './ProductList.style'

/* productList 더미 데이터 */
const user = {
  id: 54329,
}

const dummyProductList = [
  {
    id: 24456,
    thumbnail:
      'https://sports.hankooki.com/news/photo/202406/6866870_1087630_489.jpg',
    name: 'Real Sayoon',
    country: 'Seoul',
    subcategory: 'Portrait',
    tags: ['귤락', '10기', '레노버', '42Guest'],
    rates: 4.5,
    likeCount: 100,
  },
  {
    id: 24457,
    thumbnail:
      'https://i.namu.wiki/i/JkFtc-y1dM_3ityMm2kLId8iX8nf_AqboDeULLdpJ8pgxgvrIK7-Ne2Gg_Z7wC70vz4WTE2wkXFoQVyfFWz9rA.webp',
    name: 'Oyabung',
    country: 'Olympic',
    subcategory: 'Ohhamma',
    tags: ['오야붕', '함대장', '망치'],
    rates: 4.5,
    likeCount: 101,
  },
  {
    id: 24458,
    thumbnail:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToZAsKAc-RnQTaFKc-odIBaKlvNqMhephzJg&s',
    name: 'Yeongo',
    country: 'Naksungdae',
    subcategory: 'Fxck-end',
    tags: ['100m', '패럴림픽'],
    rates: 4.5,
    likeCount: 101,
  },
  {
    id: 24459,
    thumbnail:
      'https://i.namu.wiki/i/-q-0mKMgM9KchsnXKMj7uaydcDqI9lGtScPqX5jK6MEAuIJROl0ypa40LX-varFiBSYr-hURike9lg4ACgZnDQ.webp',
    name: 'Sample',
    country: 'Sample',
    subcategory: 'Sample',
    tags: ['tag1', 'tag2', 'tag3', 'tag4', 'tag5'],
    rates: 0,
    likeCount: 0,
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

  // productId={content.id}
  // city={content.city}
  // subcategory={content.subcategory}
  // name={content.name}
  // tags={content.tags}
  // likeCount={content.likeCount}

  return (
    <StyledList>
      {loading ? (
        <LoadingContent />
      ) : (
        productList.map((content) => (
          <PreviewContent
            key={content.name}
            userId={user.id}
            productData={content}
          />
        ))
      )}
      <LoadingContent />
    </StyledList>
  )
}

export default ProductList
