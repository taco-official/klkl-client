function parseQueryParams(endPoint, requestQuery) {
  let uri = endPoint

  if (requestQuery) {
    const searchParams = new URLSearchParams()

    Object.entries(requestQuery).forEach(([key, value]) => {
      searchParams.append(key, value)
    })

    uri += `?${searchParams.toString()}`
  }

  return uri
}

export default parseQueryParams
