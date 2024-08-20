import React from 'react'
import PropTypes from 'prop-types'

import { useKyQuery } from '../../../../hooks/useKyQuery'
import SelectButtons from './SelectButtons'
import useFormStore from '../../../../stores/useFormStore'

function TagSelectForm({ subcategory }) {
  const tags = useFormStore((state) => state.tags)
  const setTagState = useFormStore((state) => state.setFormContents)

  const { data, isError, error, isLoading } = useKyQuery(
    `tags?subcategory_id=${subcategory}`
  )

  if (isError) return <div>{error}</div>

  return (
    <div>
      {!isLoading &&
        data.data.map((tag) => {
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
TagSelectForm.propTypes = {
  subcategory: PropTypes.number.isRequired,
}

export default TagSelectForm
