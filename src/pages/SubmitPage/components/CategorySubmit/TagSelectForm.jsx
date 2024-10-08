import React from 'react'
import useFormStore from '@stores/useFormStore'
import SelectButtons from './SelectButtons'

function TagSelectForm() {
  const subcategory = useFormStore((state) => state.subcategory)
  const tags = useFormStore((state) => state.tags)
  const setTagState = useFormStore((state) => state.setFormContents)

  return (
    <div>
      {subcategory?.tags.map((tag) => {
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
