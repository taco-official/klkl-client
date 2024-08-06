import React, { useCallback } from 'react'
import { CloseOutlined } from '@ant-design/icons'
import useSelectedFilter from '../../hooks/useSelectedFilter'
import { BlueTag } from '../tag/Tags.style'

function FilterField() {
  const { selectedFilter, setSelectedFilter } = useSelectedFilter()

  const deleteFilter = useCallback((id) => {
    setSelectedFilter(selectedFilter.filter((filter) => filter.id !== id))
  }, [])

  if (!selectedFilter) return null

  return (
    <>
      {selectedFilter.map((filter) => (
        <BlueTag key={filter.id}>
          <span>{filter.name}</span>
          <CloseOutlined onClick={() => deleteFilter(filter.id)} />
        </BlueTag>
      ))}
    </>
  )
}

export default FilterField
