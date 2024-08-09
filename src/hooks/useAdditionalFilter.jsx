import { useContext } from 'react'
import { AdditionalFilterContext } from '../contexts/AdditionalFilterContext'

const useAdditionalFilter = () => {
  const context = useContext(AdditionalFilterContext)

  if (!context) {
    throw new Error(
      'useAdditionalFilter must be used within a AdditionalFilterProvider'
    )
  }

  return context
}

export default useAdditionalFilter
