import { useEffect } from 'react'
import PropTypes from 'prop-types'
import useTagQuery from '../../../../hooks/useTagQuery'
import useKy from '../../../../hooks/useKy'
import parseQueryParams from '../../../../utils/parseQueryParams'

function TagDataFetcher({ children }) {
  const { isLoading, queryData, isError } = useTagQuery()
  const { loading, data, error, fetchData } = useKy()

  useEffect(() => {
    if (queryData.length)
      fetchData({ url: parseQueryParams('tags', queryData) })
  }, [queryData])

  return children({ isLoading, loading, data, isError, error })
}

TagDataFetcher.propTypes = {
  children: PropTypes.func,
}

export default TagDataFetcher
