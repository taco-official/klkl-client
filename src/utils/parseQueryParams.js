function parseQueryParams(endPoint, requestQueryArray) {
  let uri = endPoint

  if (requestQueryArray) {
    if (Array.isArray(requestQueryArray) && requestQueryArray.length) {
      const searchParams = new URLSearchParams()
      requestQueryArray.forEach((element) => {
        searchParams.append(element.key, element.value)
      })
      uri += `?${searchParams.toString()}`
    }
  }

  return uri
}

export default parseQueryParams
