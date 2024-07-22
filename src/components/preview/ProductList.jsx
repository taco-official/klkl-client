import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
// import propTypes from 'prop-types'
import axios from 'axios'
import PreviewContent from './PreviewContent'

const StyledList = styled.div`
  display: flex;
  justify-content: space-around;
  align-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
`

function ProductList() {
  const [loading, setLoading] = useState(true)
  const [productList, setProductList] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    async function getProductList() {
      try {
        const response = await axios.get('ProductList API')
        setProductList(response.data)
        setLoading(false)
      } catch (e) {
        // 에러 처리
        setError(e)
        setLoading(false)
      }
    }
    getProductList()
  }, [])
  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>
  return (
    <StyledList>
      {productList.map((content) => (
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
      ))}
    </StyledList>
  )
}

export default ProductList
