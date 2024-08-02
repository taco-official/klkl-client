import PropTypes from 'prop-types'

const reviewDataType = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  currencyId: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,

  continentId: PropTypes.number.isRequired,
  countryId: PropTypes.number.isRequired,
  cityId: PropTypes.number.isRequired,
  address: PropTypes.string.isRequired,

  categoryId: PropTypes.number.isRequired,
  subCategoryId: PropTypes.number.isRequired,
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_NAME':
      return {
        ...state,
        name: action.value,
      }
    case 'SET_DESCRIPTION':
      return {
        ...state,
        description: action.value,
      }
    case 'SET_CURRENCYID':
      return {
        ...state,
        currencyId: action.value,
      }
    case 'SET_PRICE':
      return {
        ...state,
        price: action.value,
      }
    case 'SET_CONTINENT':
      return {
        ...state,
        continentId: action.value,
        countryId: 0,
        cityId: 0,
      }
    case 'SET_COUNTRY':
      return {
        ...state,
        countryId: action.value,
        cityId: 0,
      }
    case 'SET_CITY':
      return {
        ...state,
        cityId: action.value,
      }
    case 'SET_ADDRESS':
      return {
        ...state,
        address: action.value,
      }
    case 'SET_CATEGORY':
      return {
        ...state,
        categoryId: action.value,
        subCategoryId: 0,
      }
    case 'SET_SUBCATEGORY':
      return {
        ...state,
        subCategoryId: action.value,
      }
    default:
      return state
  }
}

const initialState = {
  name: '',
  description: '',
  currencyId: 0,
  price: 0,

  continentId: 0,
  countryId: 0,
  cityId: 0,
  address: '',

  categoryId: 0,
  subCategoryId: 0,
}

export { reviewDataType, initialState, reducer }
