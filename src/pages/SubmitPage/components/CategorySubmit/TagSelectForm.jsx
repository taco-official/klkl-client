import React from 'react'

import useKyQuery from '../../../../hooks/useKyQuery'
import SelectButtons from './SelectButtons'
import useFormStore from '../../../../stores/useFormStore'

function TagSelectForm() {
  const subcategory = useFormStore((state) => state.subcategory)
  const tags = useFormStore((state) => state.tags)
  const setTagState = useFormStore((state) => state.setFormContents)

  const { data: tagData, status } = useKyQuery(
    `tags?subcategory_id=${subcategory?.id}`,
    null,
    undefined,
    { enabled: !!subcategory }
  )

  if (status === 'pending') return null

  return (
    <div>
      {tagData?.data.map((tag) => {
        return (
          <div key={tag.id}>
            <h3>{tag.name}</h3>
            <SelectButtons
              isSelected={tags.has(tag.id)}
              enable={() => setTagState({ tags: new Set(tags.add(tag.id)) })}
              disable={() => {
                tags.delete(tag.id)
                setTagState({ tags: new Set(tags) })
              }}
            />
          </div>
        )
      })}
    </div>
  )
}

export default TagSelectForm
