const initializeSearchState = (searchedCategory, searchedContent) => {
  const validCategories = ['countries', 'cities', 'categories', 'subcategories']

  if (!validCategories.includes(searchedCategory)) {
    throw new Error(`Invalid searchedCategory: ${searchedCategory}`)
  }

  if (!searchedContent || typeof searchedContent !== 'object') {
    throw new Error('searchedContent must be a non-null object')
  }

  if (!searchedContent.id || !searchedContent.name) {
    throw new Error('searchedContent must have id and name properties')
  }

  const data = {
    id: searchedContent.id,
    name: searchedContent.name,
  }
  const result = Object.fromEntries(
    validCategories.map((category) => [category, []])
  )
  result[searchedCategory].push(data)
  return result
}

export default initializeSearchState
