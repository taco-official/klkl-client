function parseQueryParams(endPoint, requestQueryArray) {
  let uri = endPoint

  if (requestQueryArray) {
    const searchParams = new URLSearchParams()
    Object.entries(requestQueryArray).forEach(([key, value]) => {
      if (
        value == null ||
        value === '' ||
        (Array.isArray(value) && !value.length)
      )
        return
      searchParams.append(key, value)
    })
    const queryString = searchParams.toString()
    if (queryString && queryString.length) uri += `?${queryString}`
  }

  return uri
}

export default parseQueryParams
