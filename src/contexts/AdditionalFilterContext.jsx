import React, { createContext, useState, useCallback, useMemo } from 'react'
import PropTypes from 'prop-types'

const AdditionalFilterContext = createContext()

function AdditionalFilterProvider({ children }) {
  const [selectedFilter, setSelectedFilterState] = useState([])

  const setSelectedFilter = useCallback(
    (value) => setSelectedFilterState(value),
    []
  )

  const value = useMemo(
    () => ({
      selectedFilter,
      setSelectedFilter,
    }),
    [selectedFilter]
  )

  return (
    <AdditionalFilterContext.Provider value={value}>
      {children}
    </AdditionalFilterContext.Provider>
  )
}

AdditionalFilterProvider.propTypes = {
  children: PropTypes.element.isRequired,
}

export { AdditionalFilterContext, AdditionalFilterProvider }
