import { useContext } from 'react'
import { BasicFilterContext } from '../contexts/BasicFilterContext'

const useBasicFilter = () => {
  const context = useContext(BasicFilterContext)

  if (!context) {
    throw new Error('useBasicFilter must be used within a BasicFilterProvider')
  }

  return context
}

export default useBasicFilter
