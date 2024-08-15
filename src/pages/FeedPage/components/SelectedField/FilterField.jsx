import React from 'react'
import { CloseOutlined } from '@ant-design/icons'
import useFeedStore from '../../stores/useFeedStore'
import { BlueFieldTag } from '../../../../components/Tags/Tags.style'

function FilterField() {
  const selectedFilter = useFeedStore((state) => state.selectedFilter)
  const setSelectedFilter = useFeedStore((state) => state.setSelectedFilter)

  const deleteFilter = (id) => {
    setSelectedFilter(selectedFilter.filter((selected) => selected.id !== id))
  }

  if (!selectedFilter) return null
  return selectedFilter.map((selected) => (
    <BlueFieldTag key={selected.id}>
      <span>{selected.name}</span>
      <CloseOutlined onClick={() => deleteFilter(selected.id)} />
    </BlueFieldTag>
  ))
}

export default FilterField
