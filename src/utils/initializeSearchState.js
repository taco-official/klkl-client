const initializeSearchState = (searchedCategory, searchedContent) => {
  const data = {
    id: searchedContent.id,
    name: searchedContent.name,
  }
  const result = {
    countries: [],
    cities: [],
    categories: [],
    subcategories: [],
  }
  result[searchedCategory].push(data)
  return result
}

export default initializeSearchState
