const initializeSearchState = (searchedCategory, searchedContent) => {
  const result = {
    countries: [],
    cities: [],
    categories: [],
    subcategories: [],
  }
  result[searchedCategory].push(searchedContent)
  return result
}

export default initializeSearchState
