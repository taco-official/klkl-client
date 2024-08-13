import React, { useCallback } from 'react'
import { CloseOutlined } from '@ant-design/icons'
import useSelectedFilter from '../../../hooks/useSelectedFilter'
import { BlueFieldTag } from '../../../components/Tags/Tags.style'

function FilterField() {
  const { selectedFilter, setSelectedFilter } = useSelectedFilter()

  const deleteFilter = useCallback(
    (id) => {
      setSelectedFilter(selectedFilter.filter((filter) => filter.id !== id))
    },
    [selectedFilter]
  )

  if (!selectedFilter) return null
  return (
    <>
      {selectedFilter.map((filter) => (
        <BlueFieldTag key={filter.id}>
          <span>{filter.name}</span>
          <CloseOutlined onClick={() => deleteFilter(filter.id)} />
        </BlueFieldTag>
      ))}
    </>
  )
}

export default FilterField
