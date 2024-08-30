import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import useTagQuery from '../../../../hooks/useTagQuery'
import useKy from '../../../../hooks/useKy'
import parseQueryParams from '../../../../utils/parseQueryParams'

function TagDataFetcher({ children }) {
  const { queryData, isError } = useTagQuery()
  const [tags, setTags] = useState([])
  const { loading, data: tagData, error, fetchData } = useKy()

  useEffect(() => {
    if (queryData.length)
      fetchData({ url: parseQueryParams('tags', queryData) })
  }, [queryData])

  useEffect(() => {
    if (!loading && !error && tagData) setTags(tagData.data)
  }, [loading, error, tagData])

  return children({ tags, isError, error })
}

TagDataFetcher.propTypes = {
  children: PropTypes.func,
}

export default TagDataFetcher
