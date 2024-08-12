import React, { createContext, useState, useCallback, useMemo } from 'react'
import PropTypes from 'prop-types'

const BasicFilterContext = createContext()

function BasicFilterProvider({ children }) {
  const [selectedCountry, setSelectedCountryState] = useState({})
  const [selectedCity, setSelectedCityState] = useState([])
  const [selectedCategory, setSelectedCategoryState] = useState([])
  const [selectedSubCategory, setSelectedSubCategoryState] = useState([])

  const setSelectedCountry = useCallback(
    (value) => setSelectedCountryState(value),
    []
  )

  const setSelectedCity = useCallback(
    (value) => setSelectedCityState(value),
    []
  )

  const setSelectedCategory = useCallback(
    (value) => setSelectedCategoryState(value),
    []
  )

  const setSelectedSubCategory = useCallback(
    (value) => setSelectedSubCategoryState(value),
    []
  )

  const value = useMemo(
    () => ({
      selectedCountry,
      setSelectedCountry,
      selectedCity,
      setSelectedCity,
      selectedCategory,
      setSelectedCategory,
      selectedSubCategory,
      setSelectedSubCategory,
    }),
    [selectedCountry, selectedCity, selectedCategory, selectedSubCategory]
  )

  return (
    <BasicFilterContext.Provider value={value}>
      {children}
    </BasicFilterContext.Provider>
  )
}

BasicFilterProvider.propTypes = {
  children: PropTypes.element.isRequired,
}

export { BasicFilterContext, BasicFilterProvider }
