import React from 'react'
import { CloseOutlined } from '@ant-design/icons'
import useFeedStore from '../../../../stores/useFeedStore'
import { BlueFieldTag } from '../../../../components/Tags/Tags.style'

function FilterField() {
  const selectedFilter = useFeedStore((state) => state.selectedFilter)
  const deleteSelectedFilter = useFeedStore(
    (state) => state.deleteSelectedFilter
  )

  if (selectedFilter.length === 0) return null
  return selectedFilter.map((selected) => (
    <BlueFieldTag key={selected.id}>
      <span>{selected.name}</span>
      <CloseOutlined onClick={() => deleteSelectedFilter(selected.id)} />
    </BlueFieldTag>
  ))
}

export default FilterField
