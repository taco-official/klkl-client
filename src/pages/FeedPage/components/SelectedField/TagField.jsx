import React from 'react'
import { CloseOutlined } from '@ant-design/icons'
import useFeedStore from '../../../../stores/useFeedStore'
import { BlueFieldTag } from '../../../../components/Tags/Tags.style'

function TagField() {
  const selectedTag = useFeedStore((state) => state.selectedTag)
  const deleteSelectedTag = useFeedStore((state) => state.deleteSelectedTag)

  if (!selectedTag.length) return null
  return selectedTag.map((selected) => (
    <BlueFieldTag key={selected.id}>
      <span>{selected.name}</span>
      <CloseOutlined onClick={() => deleteSelectedTag(selected.id)} />
    </BlueFieldTag>
  ))
}

export default TagField
