import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import useUserData from '../../hooks/useUserData'
import useKyQuery from '../../hooks/useKyQuery'
import parseQueryParams from '../../utils/parseQueryParams'
import ProductFeed from '../../components/ProductFeed/ProductFeed'

function ReviewList({ selectedMenu }) {
  const [currentPage, setCurrentPage] = useState({
    page: 0,
    size: 1,
    sort: ['string'],
  })
  const { data: userData } = useUserData()
  const url = parseQueryParams(`${selectedMenu}`, currentPage)
  const { data: productList } = useKyQuery(url, undefined, {
    staleTime: 0,
  })

  useEffect(() => {
    if (currentPage.page === 0) return
    setCurrentPage({
      ...currentPage,
      page: 0,
    })
  }, [selectedMenu])

  if (!productList) return null

  return (
    <ProductFeed
      userData={userData}
      data={productList.data}
      setPageData={setCurrentPage}
    />
  )
}
ReviewList.propTypes = {
  selectedMenu: PropTypes.string.isRequired,
}

export default ReviewList
